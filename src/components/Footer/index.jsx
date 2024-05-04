"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = ({ faq }) => {
  const navigate = useNavigate();

  return (
    <footer className="text-white pt-14 pb-5">
      <div className="text-sm flex flex-wrap justify-between gap-10 max-w-[1300px] px-5 m-auto">
        <div className="">
          <div className="flex items-center gap-1 ">
            <img src={logo} alt="logo" width={20} height={30} />
            <span className="text-lg font-extrabold">SECRECY PAY</span>
          </div>
          <p className="max-w-xs text-sm mt-2 ">
            Buy and sell crypto in a flash with Secrecy Pay. Fast, secure
            transactions made easy
          </p>
        </div>
        <div className="mt-10 sm:mt-0">
          <h4 className="font-semibold text-base mb-5">Community</h4>
          <ul className="flex flex-col gap-4">
            <li className="hover:text-primary">
              {" "}
              <a
                target="_blank"
                href="https://x.com/secrecypay?s=21&t=1cONdDNrW1DXiKkRQxYzgw"
              >
                Twitter
              </a>{" "}
            </li>
            <li className="hover:text-primary">
              {" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/company/secrecy-pay/"
              >
                LinkedIn
              </a>{" "}
            </li>
            <li className="hover:text-primary">
              {" "}
              <a target="_blank" href="https://t.me/+1LQb4qZwsxIzYTM0">
                Telegram
              </a>{" "}
            </li>
            <li className="hover:text-primary">
              {" "}
              <a
                target="_blank"
                href="https://instagram.com/secrecypayhq?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
              >
                Instagram
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="mt-10 sm:mt-0">
          <h4 className="font-semibold text-base mb-7">Help</h4>
          <ul className="flex flex-col gap-4">
            <li className="hover:text-primary">
              <a href="mailto:info@secrecypay.com">Help Center</a>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <button onClick={() => navigate("#faq")}>FAQs</button>
            </li>
          </ul>
        </div>
        <div className="mt-10 sm:mt-0">
          <h4 className="font-semibold text-base mb-7">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li className="hover:text-primary">
              <a href="mailto:info@secrecypay.com">Mail</a>
            </li>
            <li className="hover:text-primary">
              <a href="tel:+1234567890">Phone</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-16 text-center text-sm text-white/80">
        © {new Date().getFullYear()} SecrecyPay
      </p>
    </footer>
  );
};

export default Footer;
