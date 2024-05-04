"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ResponsiveSlider = ({ reviews }) => {
  const sliderRef = useRef(null);

  const scrollToForm = () => {
    document.querySelector('#waitlist-form').scrollIntoView()
  };

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-[340px] m-auto my-14">
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((item, idx) => (
          // <div
          //   key={idx}
          //   className={`border border-red-800 ${
          //     idx !== 0 && "hidden md:block"
          //   }  mr-5 bg-normal text-white p-8 sm:p-14 rounded-lg `}
          // >
          //   <p className="text-base sm:text-lg font-semibold">{item?.review}</p>
          //   <div className=" flex gap-3 sm:gap-5 mt-7 items-center">
          //     <Image
          //       className="overflow-hidden !rounded-full h-24 w-24"
          //       src={item?.img}
          //       alt="img"
          //     />
          //     <div className="">
          //       <p className="font-bold text-base md:text-xl mb-2.5">
          //         {item?.name}
          //       </p>
          //       <div className="flex items-center gap-1 ">
          //         {[1, 2, 3, 4, 5].map((item) => (
          //           <BiStar size={20} className="text-[#ff9505]" key={item} />
          //         ))}
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div
            className={`mb-7 feature transition-all duration-300 ease-linear cursor-pointer p-5 px-10 rounded`}
            key={idx}
          >
            <img src={item.img} width={60} height={60} alt={item.title} />
            <p className="my-3">{item.title}</p>
            <p className="text-sm mb-3 text-slate-400">{item.content}</p>
            <button
              onClick={scrollToForm}
              className="text-primary underline text-sm"
            >
              Learn more
            </button>
          </div>
        ))}
      </Slider>
      <div
        // data-aos=""
        className="flex justify-center items-center gap-4"
      >
        <button
          onClick={previous}
          className="bg-white text-black w-12 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowBackIosNew size={18} />
        </button>
        <button
          onClick={next}
          className="bg-white text-black w-12 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowForwardIos size={18} />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
