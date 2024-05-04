import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'; 
import ValidationError from '../components/Error/ValidationError'
import { Link, useNavigate } from 'react-router-dom';

import { BiSolidLockOpen, BiUserPlus } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { successToast, errorToast } from '../utils/Helper'
import LoadingModal from "../components/Modal/LoadingModal";
import { useMutation, useQuery } from "react-query";
import Auth from '../services/Auth';

const Register = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate(); 
  
    const { isLoading, mutate } = useMutation(Auth.Register, {
      onError: (e) => errorToast(e.message),
      onSuccess: (res) => { 
        successToast(res.data.message);
        navigate("/login");
      },
    });
  
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        confirm:'',
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
        confirm: Yup.string()
          .oneOf([Yup.ref('password'), null], "Passwords doesn't match"),
      }),
      onSubmit: values => {
        const data = { 
          email: values.email,
          password: values.password
         }
        mutate(data);
        // navigate("/");

      }
    });
  
    const { handleSubmit, errors, touched, values, getFieldProps } = formik
  

  return (
    <div className="h-screen sm:px-14 py-8 flex flex-col">
    <div className="bg-white p-5 rounded-md main w-[90%] sm:w-[unset] sm:max-w-[430px] h-fit py-10 grid place-content-center m-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">
        Create Free Account To Start Saving Contacts!
      </h2>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="flex flex-col text-sm mb-4">
          <label className="font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="text-sm outline-none p-3 border-thick_blue border rounded-md"
            {...getFieldProps('email')}
          />
          {touched.email && errors.email && (
            <ValidationError text={errors.email} />
          )}
        </div>
        <div className="flex flex-col text-sm mb-2 ">
          <label className="font-medium" htmlFor="email">
            Password
          </label>
          <div className="relative w-full">
            <input
              type={show ? "text" : "password"}
              className="text-sm bg-custom_gray outline-none p-3 border-thick_blue border rounded-md w-full"
              {...getFieldProps('password')}
            />
            <div
              onClick={() => setShow(!show)}
              className="cursor-pointer w-10 h-full bg-gray-400 border border-thick_blue absolute grid place-content-center right-0 top-0 rounded-r-md"
              >
              {show ? <BsEyeSlashFill size={17} /> : <BsEyeFill size={17} />}
            </div>
          </div>
                {touched.password && errors.password && (
                  <ValidationError text={errors.password} />
                )}
        </div>
        <div className="flex flex-col text-sm mb-2 mt-5">
          <label className="font-medium" htmlFor="email">
            Confirm Password
          </label>
          <div className="relative w-full">
            <input
              type={show ? "text" : "password"}
              className="text-sm bg-custom_gray outline-none p-3 border-thick_blue border rounded-md w-full"
              {...getFieldProps('confirm')}
            />
            <div
              onClick={() => setShow(!show)}
              className="cursor-pointer w-10 h-full bg-gray-400 border border-thick_blue absolute grid place-content-center right-0 top-0 rounded-r-md"
              >
              {show ? <BsEyeSlashFill size={17} /> : <BsEyeFill size={17} />}
            </div>
          </div>
                {touched.confirm && errors.confirm && (
                  <ValidationError text={errors.confirm} />
                )}
        </div>
        <div className="flex gap-1 text-sm items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="accent-primary text-sm"
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button
          type="submit"
          className="mt-12 bg-primary rounded-md py-3 w-full font-medium flex items-center justify-center gap-2"
        >
          <BiUserPlus size={20} />
          Create Account
        </button>
        <p className='text-xs text-center mt-2'>Already have an account ? <Link to={'/login'} className='font-semibold italic text-primary'>Login</Link> </p>
      </form>
    </div>
    {
      isLoading ? <LoadingModal /> : null
    }
  </div>
  )
}

export default Register
