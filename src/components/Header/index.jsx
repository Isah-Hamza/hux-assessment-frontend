'use client'
import React from "react";
import logo from "../../assets/images/logo.png";


const index = ({  }) => {

  const scrollToForm = () => {
    document.querySelector('#waitlist-form').scrollIntoView()
  };

  return (
    <header className="max-w-[1300px] m-auto px-5 relative z-20 flex justify-between items-center py-10">
      <div className="flex items-center gap-1 ">
        <img src={logo} alt="logo" width={25} height={35} />
        <span className="font-extrabold text-xl">SECRECY PAY</span>
      </div>
      <button
        onClick={scrollToForm}
        href={"#waitlist-form"}
        className="text-black join-btn font-semibold px-7 py-2.5 rounded-3xl text-sm"
      >
        {" "}
        JOIN
      </button>
    </header>
  );
};

export default index;
