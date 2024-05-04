import React from "react";
import LearnMoreButton from "../Button";

import feature1 from "../../assets/images/swap.png";
import feature2 from "../../assets/images/secure.png";
import feature3 from "../../assets/images/send_funds.png";
import feature4 from "../../assets/images/simplified_payment.png";
import feature5 from "../../assets/images/get_paid.png";

const FeaturesDesktop = () => {
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

  return (
    <div className="hidden relative z-20 features md:grid grid-cols-3 gap-5">
      <div className="px-2">
        <h4 className="font-semibold leading-10 mb-3 text-4xl">
          Amazing <br /> features
        </h4>
        <div className="text-slate-400 text-xs">
          <ul className="list-disc disc-inside">
            <li> Explore the World of Confidential Transactions</li>
            <li>Engage in discreet cryptocurrency transactions </li>
            <li>
              Acquire and vend crypto at optimal rates without any transaction
              fees.
            </li>
            <li>
              Utilize dollar cards for seamless shopping and confidential
              payments worldwide.
            </li>
            <li>
              Swiftly exchange crypto without the need to wait for blockchain
              confirmations.
            </li>
            <li>
              Safely store your digital assets and earn up to 10% interest on
              your cryptocurrency holdings.
            </li>
          </ul>
        </div>
      </div>
      {features.map((item, idx) => (
        <div
          className={`feature-${
            idx + 1
          } feature transition-all duration-300 ease-linear cursor-pointer p-5 px-10 rounded`}
          key={idx}
        >
          <img src={item.img} width={60} height={60} alt={item.title} />
          <p className="my-3">{item.title}</p>
          <p className="text-sm mb-3 text-slate-400">{item.content}</p>
          <LearnMoreButton className="text-primary underline text-sm">
            Learn more
          </LearnMoreButton>
        </div>
      ))}
    </div>
  );
};

export default FeaturesDesktop;
