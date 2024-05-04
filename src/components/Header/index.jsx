'use client'
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";


const index = ({  }) => {
  const [auth, setAuth] = useState(false);
  const token = window.localStorage.getItem('hux-token');

  const scrollToForm = () => {
    document.querySelector('#waitlist-form').scrollIntoView()
  };

  const logout = () => {
    window.localStorage.removeItem('hux-user');
    window.localStorage.removeItem('hux-token');
    window.location.href = '/';
  }

  useEffect(() => {
    if(token){
     setAuth(true);
    }
   }, [])

  return (
    <header className="max-w-[1300px] m-auto px-5 relative z-20 flex justify-between items-center py-10">
      <Link to={'/'} className="flex items-center gap-1 ">
        <img src={logo} alt="logo"className="w-[20px] sm:w-[25px] h-[35px] " />
        <span className="font-extrabold text-xl">KONTACT</span>
      </Link>
     {auth ?
     <div className="flex items-center gap-2"> <Link
        onClick={scrollToForm}
        to={"/contacts"}
        className="text-black join-btn font-semibold px-7 py-2.5 rounded-3xl text-sm"
      >
        {" "}
        Your Contacts
      </Link>
      <button onClick={logout} className='bg-gray-300 flex items-center px-4 sm:px-5 rounded-3xl gap-1 py-2 '>
        Logout
      </button>
       </div>:
      <Link
        onClick={scrollToForm}
        to={"/login"}
        className="text-black join-btn font-semibold px-7 py-2.5 rounded-3xl text-sm"
      >
        {" "}
        Login
      </Link>}
    </header>
  );
};

export default index;
