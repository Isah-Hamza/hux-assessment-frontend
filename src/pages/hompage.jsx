import { useEffect, useState } from "react";
import "../App.css";

import Form from "../components/Form";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import LearnMoreButton from "../components/Button";
import FeaturesDesktop from "../components/FeaturesDesktop";
import ResponsiveSlider from "../components/Slider/ResponsiveSlider";
import Footer from "../components/Footer";

import black_arrow from "../assets/images/arrow-right-black.png";
import white_arrow from "../assets/images/arrow-right-white.png";
import right_ellipse from "../assets/images/right-ellipse.png";
import left_ellipse from "../assets/images/left-ellipse.png";
import feature1 from "../assets/images/swap.png";
import feature2 from "../assets/images/secure.png";
import feature3 from "../assets/images/send_funds.png";
import feature4 from "../assets/images/simplified_payment.png";
import feature5 from "../assets/images/get_paid.png";

import country1 from "../assets/images/country1.png";
import country2 from "../assets/images/country2.png";
import country3 from "../assets/images/country3.png";
import country4 from "../assets/images/country4.png";
import country5 from "../assets/images/country5.png";
import country6 from "../assets/images/country6.png";
import country7 from "../assets/images/uae-flag.png";
import playStore from "../assets/images/get_google_play.svg";
import appStore from "../assets/images/get_play_store.svg";
import { ToastContainer } from "react-toastify";

function Homepage() {
  const features = [
    {
      title: "Experience Zero Fee Swap",
      content:
        "Maximize your trades by instantly exchanging coins without any fees.",
      img: feature1,
    },
    {
      title: "Secure and Reliable P2P",
      content:
        "Safely deposit funds from your bank account and securely withdraw money using personalized P2P service.",
      img: feature2,
    },
    {
      title: "Easily Send and Receive Funds Using Usernames",
      content:
        "Connect with friends, family, and loved ones, sending money using their usernames.",
      img: feature3,
    },
    {
      title: "Simplified Payments Using Virtual Cards",
      content:
        "Effortlessly manage payments with Obiex's virtual credit and debit cards. Generate a virtual card to conveniently cover all your expenses.",
      img: feature4,
    },
    {
      title: "Get paid while keeping your crypto safe!",
      content:
        "Securely store your cryptocurrency and earn up to 10% interest on what you save.",
      img: feature5,
    },
  ];

  const countries = [
    country1,
    country2,
    country3,
    country4,
    country5,
    country6,
    country7,
  ];

  


  return (
    <>
      <ToastContainer />
      <div className="relative min-h-screen">
        <div className="bg-black text-white pb-14">
          <Header />
          <main className="max-w-[1300px] px-5 m-auto h-full flex flex-col">
            <div className="">
              <img
                alt="arrow"
                src={left_ellipse}
                height={100}
                width={450}
                className="absolute top-[-100px] left-0"
              />
              <img
                alt="arrow"
                src={right_ellipse}
                height={100}
                width={400}
                className="absolute top-[-70px] right-0"
              />
              <div className="relative z-20 hero min-h-[550px] w-full sm:w-[97%] m-auto flex items-center">
                <div className="w-full flex flex-col gap-5">
                  <div className="flex gap-2 items-center text-primary text-xs font-medium">
                    <p>SAFE //</p>
                    <p>SECURE //</p>
                    <p>PRIVATE.</p>
                  </div>
                  <div className="text-4xl md:text-6xl my-3">
                    <p>Buy & sell crypto</p>
                    <p className="font-semibold mt-3">
                      fast <span className="font-normal">& </span> secure.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-10">
                    <LearnMoreButton className="req-to-join-btn font-semibold px-3 sm:px-7 py-3.5 rounded-3xl text-black flex items-center justify-center gap-3">
                      <span>Request to join</span>
                      <img
                        src={black_arrow}
                        alt="arrow"
                        width={10}
                        height={6}
                      />
                    </LearnMoreButton>
                    <LearnMoreButton className="text-sm text-white border border-white font-semibold px-3 sm:px-7 py-3.5 rounded-3xl flex items-center justify-center gap-3">
                      <span>LEARN MORE</span>
                      <img
                        src={white_arrow}
                        alt="arrow"
                        width={10}
                        height={6}
                      />
                    </LearnMoreButton>
                  </div>
                </div>
              </div>
              <FeaturesDesktop />
              <div className="relative z-20 features grid md:hidden gap-5">
                <div className="px-2">
                  <h4 className="font-semibold leading-10 mb-3 text-4xl">
                    Amazing <br /> features
                  </h4>
                  <ul className="list-disc list-outside pl-3 flex flex-col gap-3">
                    <li> Explore the World of Confidential Transactions</li>
                    <li>Engage in discreet cryptocurrency transactions </li>
                    <li>
                      Acquire and vend crypto at optimal rates without any
                      transaction fees.
                    </li>
                    <li>
                      Utilize dollar cards for seamless shopping and
                      confidential payments worldwide.
                    </li>
                    <li>
                      Swiftly exchange crypto without the need to wait for
                      blockchain confirmations.
                    </li>
                    <li>
                      Safely store your digital assets and earn up to 10%
                      interest on your cryptocurrency holdings.
                    </li>
                  </ul>
                </div>
                <div className="container">
                  <ResponsiveSlider reviews={features} />
                </div>
              </div>

              <div className="mt-28">
                <p className="text-lg text-slate-500 text-center">
                  Available in these countries
                </p>
                <div className="overflow-x-auto">
                  <div className="min-w-[610px] sm:min-w-[840px] flex items-center justify-center gap-5 md:gap-10 mt-10">
                    {countries.map((item, idx) => (
                      <img
                        key={idx}
                        src={item}
                        alt="country"
                        className="rounded-lg w-[70px] sm:w-[100px] sm:max-w-[100px]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Form />
        <FAQ />
        <div className="bg-primary mt-32">
          <div className="max-w-[1300px] m-auto px-5 py-20 pb-28 flex gap-10 flex-col md:flex-row justify-between md:items-center">
            <div className="">
              <div className="text-4xl md:text-5xl my-3">
                <p>Buy & sell crypto</p>
                <p className="font-semibold mt-3">
                  fast <span className="font-normal">& </span> secure.
                </p>
              </div>
              <p className="text-sm max-w-sm mt-3">
                Buy and sell crypto in a flash with Secrecy Pay. Fast, secure
                transactions made easy
              </p>
            </div>
            <div className="flex flex-col gap-7 md:mr-10">
              <p className="text-lg font-semibold">
                Download App (Coming Soon)
              </p>
              <div className="flex flex-col gap-5">
                <img
                  alt="arrow"
                  src={playStore}
                  height={50}
                  width={150}
                  className="cursor-pointer"
                />
                <img
                  alt="arrow"
                  src={appStore}
                  height={50}
                  width={150}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
