import React, { useState } from 'react'
import Header from '../components/Header/index'
import { CgCopy, CgTrashEmpty } from 'react-icons/cg'
import { BiEditAlt } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { BsEye } from 'react-icons/bs'
import { useMutation, useQuery } from 'react-query'
import Contact from '../services/Contact'
import LoadingModal from '../components/Modal/LoadingModal'
import { errorToast, successToast } from '../utils/Helper'
const ContactList = () => {
    const navigate =  useNavigate();
    const [deleteModal, setDeleteModal] = useState(false);
    const user_id = JSON.parse(window.localStorage.getItem('hux-user'))?.id;
    const toggleDelete = () => setDeleteModal(!deleteModal)
    const [id, setId] = useState(0);

    const editContact = (item) => {
        navigate(`${item.id}/edit`, { state: { contact:item } });
    }

    const handleDelete = (id) => {
        toggleDelete();
        setId(id);
    }

    const  { isLoading , mutate} = useMutation(Contact.DeleteContact, {
        onSuccess: res => {
            navigate('/contacts');
            successToast(res.data.message);
            toggleDelete()
            refetch()
        },
        onError: e => {
            errorToast(e.message);
        }
    })

    const confirmDelete = () => {
        mutate({ contact_id:id, user_id })
    }

    const { data, refetch  } = useQuery(['get-contacts', user_id], () => Contact.GetContacts(user_id))

  return (
    <div className='bg-[#ebeff5] min-h-screen pb-20'>
      <Header />
        <div className='mt-14 max-w-[1000px] px-5 sm:px-10 m-auto'>
                    <Link 
                        to={'/contacts/create'} 
                        className=" mb-3 bg-gray-300 rounded-md py-3 w-fit px-3 font-medium flex justify-start items-center gap-2"
                    >
                        Create New 
                    </Link>
            {
               data?.data?.user?.contacts.map((item) => (
                    <div key={item.id} className='bg-[#2b2b2b] mb-5 w-full p-3 text-white sm:px-5 rounded-xl flex justify-between items-center'>
                        <div className='flex items-center gap-3 sm:gap-5'>
                            <div className="size-14 uppercase rounded-full text-black bg-gray-50 grid place-content-center text-2xl font-semibold">
                                { item.first_name[0] }
                                { item.last_name[0] }
                            </div>
                            <div>
                                <p>{item.first_name} {item.last_name} </p>
                                <p>{item.phone_number} </p>
                            </div>
                        </div>
                        <div className="text-black flex gap-1.5 sm:gap-3 items-center justify-between">
                            <button onClick={() => navigate(`${item.id}`, { state:{ contact:item } })} className='bg-gray-300 size-8 rounded-lg grid place-content-center'> <BsEye /> </button>
                            <button onClick={() => editContact(item)} className='bg-gray-300 size-8 rounded-lg grid place-content-center'> <BiEditAlt /> </button>
                            <button onClick={() => handleDelete(item.id)} className='bg-gray-300 size-8 rounded-lg grid place-content-center'> <CgTrashEmpty color='red' /> </button>
                        </div>
                    </div>
                ))
            }
        </div>
        {
            deleteModal ? 
            <div className='fixed z-20 inset-0 bg-black bg-opacity-60 grid place-content-center'>
                <div className="text-sm text-center flex flex-col justify-center bg-white w-[300px]  rounded-md p-10 px-7">
                   <p className='mx-auto'><CgTrashEmpty color='red' size={24} /></p> 
                   <p className='mt-3'>
                    Are you sure you want to delete this contact ? This action is irreversible!
                   </p>
                   <div className='grid sm:grid-cols-2 gap-4 mt-8'>
                        <button 
                            onClick={toggleDelete}
                            type="button"
                            className=" bg-gray-300 rounded-md py-3 w-full font-medium flex items-center justify-center gap-2"
                        >
                            Cancel 
                        </button>
                        <button
                            onClick={confirmDelete}
                            className="px-5 bg-[tomato] rounded-md py-3 w-full font-medium flex items-center justify-center gap-2"
                        >
                            <CgTrashEmpty color='red' size={20} />
                            Delete
                        </button>
                    </div>
                </div>
            </div>: null    
        }
                {
            isLoading ? <LoadingModal /> : null
        }
    </div>
  )
}

export default ContactList
