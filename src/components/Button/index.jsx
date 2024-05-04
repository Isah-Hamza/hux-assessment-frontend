'use client'
import React from "react";

const Button = ({ className, children }) => {

    const scrollToForm = () => {
        document.querySelector('#waitlist-form').scrollIntoView()
      };

  return (
    <button onClick={scrollToForm} className={className}>
      {children}
    </button>
  );
};

export default Button;
