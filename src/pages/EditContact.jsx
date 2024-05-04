import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'; 
import ValidationError from '../components/Error/ValidationError'
import { Link, useNavigate } from 'react-router-dom';

import { BiEdit, BiSolidLockOpen, BiUser, BiUserPlus } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill, BsPlusSquare } from "react-icons/bs";
import { successToast, errorToast } from '../utils/Helper'
import LoadingModal from "../components/Modal/LoadingModal";
import { useMutation, useQuery } from "react-query";
import Auth from '../services/Auth';
import { toast } from 'react-toastify';

const EditContact = () => {

    const navigate = useNavigate(); 
  
    const { isLoading, mutate } = useMutation(Auth.Register, {
      onError: (e) => errorToast(e.message),
      onSuccess: (res) => { 
        // successToast(res.data.message);
        navigate("/");
      },
    });
  
    const formik = useFormik({
      initialValues: {
        first_name: '',
        last_name: '',
        phone_number:'',
      },
      validationSchema: Yup.object().shape({
        first_name: Yup.string().required('This field is required'),
        last_name: Yup.string().required('This field is required'),
        phone_number: Yup.string().required('This field is required'),
      }),
      onSubmit: values => { 
        mutate(values);
      }
    });
  
    const { handleSubmit, errors, touched, values, getFieldProps } = formik
  

  return (
    <div className="h-screen sm:px-14 py-8 flex flex-col">
    <div className="bg-white p-5 rounded-md main w-[90%] sm:w-[430px] h-fit py-10 grid place-content-center m-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">
        Edit Contact Details!
      </h2>
      <form onSubmit={handleSubmit} className="mt-10 w-full">
        <div className="flex flex-col text-sm mb-4">
          <label className="font-medium" htmlFor="first_name">
            First Name
          </label>
          <input
            type="text"
            className="text-sm outline-none p-3 border-thick_blue border rounded-md"
            {...getFieldProps('first_name')}
          />
          {touched.first_name && errors.first_name && (
            <ValidationError text={errors.first_name} />
          )}
        </div>
        <div className="flex flex-col text-sm mb-4">
          <label className="font-medium" htmlFor="last_name">
            Last Name
          </label>
          <input
            type="text"
            className="text-sm outline-none p-3 border-thick_blue border rounded-md"
            {...getFieldProps('last_name')}
          />
          {touched.last_name && errors.last_name && (
            <ValidationError text={errors.last_name} />
          )}
        </div>
        <div className="flex flex-col text-sm mb-4">
          <label className="font-medium" htmlFor="phone_number">
            Phone Number
          </label>
          <input
            type="text"
            className="text-sm outline-none p-3 border-thick_blue border rounded-md"
            {...getFieldProps('phone_number')}
          />
          {touched.phone_number && errors.phone_number && (
            <ValidationError text={errors.phone_number} />
          )}
        </div>
        <div className='grid sm:grid-cols-2 gap-4 mt-8'>
          <Link to={'/contacts'}
            type="button"
            className=" bg-gray-300 rounded-md py-3 w-full font-medium flex items-center justify-center gap-2"
          >
            Go Back
          </Link>
          <button
            type="submit"
            className="px-5 bg-primary rounded-md py-3 w-full font-medium flex items-center justify-center gap-2"
          >
            <BiEdit size={20} />
            Save Changes
          </button>

        </div>
      </form>
    </div>
    {
      isLoading ? <LoadingModal /> : null
    }
  </div>
  )
}

export default EditContact