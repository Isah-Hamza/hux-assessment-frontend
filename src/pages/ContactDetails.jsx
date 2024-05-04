import React, { useEffect, useState } from 'react'
import Header from '../components/Header/index'
import { CgCopy, CgTrashEmpty } from 'react-icons/cg'
import { BiEditAlt } from 'react-icons/bi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsEye } from 'react-icons/bs'
const ContactDetails = () => {
    const navigate =  useNavigate();
    const [deleteModal, setDeleteModal] = useState(false);
    const [id, setId] = useState();
    const { contact:item }  = useLocation().state

    const toggleDelete = () => setDeleteModal(!deleteModal)

    const editContact = (item) => {
        navigate(`edit`, { state: { contact:item } });
    }

    const handleDelete = (id) => {
        setId(id);
        toggleDelete();
    }

    useEffect(() => {
    if(!item){
        navigate('/contacts');
    }
    }, [])
    

  return (
    <div className='bg-[#ebeff5] min-h-screen'>
      <Header />
        <div className='mt-8 max-w-[500px] px-5 sm:px-10 m-auto py-10'>   
            <div className='bg-[#2b2b2b] mb-5 w-full p-3 text-white sm:px-5 py-10 rounded-xl flex flex-col justify-between items-center'>
                <div className='flex text-center flex-col items-center gap-3 sm:gap-5'>
                    <div className=" size-20 uppercase rounded-full text-black bg-gray-50 grid place-content-center text-2xl font-semibold">
                        { item.first_name[0] }
                        { item.last_name[0] }
                    </div>
                    <div>
                        <p>{item.first_name} {item.last_name} </p>
                        <p>{item.phone_number} </p>
                    </div>
                </div>
                <div className="mt-5 text-black flex gap-1.5 sm:gap-3 items-center justify-between">
                    <button onClick={() => navigate(`${item.id}`)} className='bg-gray-300 flex items-center px-4 sm:px-5 rounded-lg gap-1 py-2 '> <CgCopy /> Copy </button>
                    <button onClick={() => editContact(item)} className='bg-gray-300 flex items-center px-4 sm:px-5 rounded-lg gap-1 py-2 '> <BiEditAlt /> Edit  </button>
                    <button onClick={() => handleDelete(item.id)} className='bg-gray-300 flex items-center px-4 sm:px-5 rounded-lg gap-1 py-2 '> <CgTrashEmpty color='red' /> Delete</button>
                </div>
            </div>
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
                        type="submit"
                        className="px-5 bg-[tomato] rounded-md py-3 w-full font-medium flex items-center justify-center gap-2"
                    >
                        <CgTrashEmpty color='red' size={20} />
                        Delete
                    </button>
        </div>
                </div>
            </div>: null    
        }
    </div>
  )
}

export default ContactDetails
