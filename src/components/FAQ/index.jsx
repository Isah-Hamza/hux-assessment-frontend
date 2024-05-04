'use client'
import React, { useRef, useState } from 'react'
import ResponsiveSlider from '../Slider/ResponsiveSlider';

import resource1 from "../../assets/images/swift.png";
import resource2 from "../../assets/images/speed.png";
import resource3 from "../../assets/images/trusted.png";
import plus from "../../assets/images/plus.png";

const FAQ = ({  }) => {
    const faq = useRef();
    const [activeCategory, setActiveCategory] = useState(1);
    const [activeFaq, setActiveFaq] = useState(0);

    const scrollToForm = () => {
        document.querySelector('#waitlist-form').scrollIntoView()
      };

      const resources = [
        {
          title: "Safe, Swift, Reliable: Coming Soon!",
          content:
            "Get ready for the ultimate online money experience! Secrecy Pay is gearing up to revolutionize your transactions. Stay tuned for secure, lightning fast, and reliable financial interactions.",
          img: resource1,
        },
        {
          title: "SecrecyPay: Where Safety Meets Speed",
          content:
            "Your wait for secure and swift transactions is almost over! SecrecyPay brings you the perfect blend of security and speed. Join us soon for a seamless money moving adventure.",
          img: resource2,
        },
        {
          title: "Coming Soon: Your Trusted Money Companion",
          content:
            "Brace yourself for the arrival of SecrecyPay! Your trusted companion for secure, reliable, and hassle free transactions. Prepare to experience money matters like never before!",
          img: resource3,
        },
      ];

      const faqs = [
        {
          title: "General",
          faqs: [
            {
              q: "What's Secrecy Pay all about?",
              a: "Secrecy Pay is all about making transactions super safe, speedy, and reliable. We're all about keeping your money moves secure and smooth with some top notch encryption.",
            },
            {
              q: "How can I sign up to get on board with Secrecy Pay?",
              a: "Easy peasy! Just join the waitlist. Pop in your details, and we'll give you the heads up as soon as the website's up and running.",
            },
            {
              q: "Can I use Secrecy Pay from anywhere in the world?",
              a: "We're aiming to go global eventually, but when we kick off, we might start in specific places. Stay tuned for updates on where we're launching first!",
            },
          ],
        },
        {
          title: "Transactions",
          faqs: [
            {
              q: "Is Secrecy Pay really secure for transactions?",
              a: "You bet! We've got security measures like fancy encryption and extra verification steps to make sure your transactions are as safe as can be.",
            },
    
            {
              q: "What can I do on Secrecy Pay?",
              a: "Loads of stuff! You can sling money to friends, buy stuff online, pay bills, anything to do with money, we've got your back.",
            },
    
            {
              q: "Are there limits on how much I can do in one go?",
              a: "Yup, for safety reasons, we might set some limits at first. But as you get comfy and build trust with us, we might tweak those limits for you.",
            },
          ],
        },
        {
          title: "Payment",
          faqs: [
            {
              q: "How quick are payments on Secrecy Pay?",
              a: "Lightning fast! Most times. We hustle to make sure your money moves at cheetah speed.",
            },
            {
              q: "Can I cancel payments once I've hit send?",
              a: "Once you hit send, it's like launching a rocket! So, cancelling might not be an option. Check twice before hitting that send button!",
            },
            {
              q: "What currencies can I use on Secrecy Pay?",
              a: "We're aiming to cover lots of different currencies to suit everyone. At the start, we might have a few, but we're working on adding more.",
            },
          ],
        },
        {
          title: "Returns",
          faqs: [
            {
              q: "Can I get refunds through Secrecy Pay?",
              a: "While we make sure your transactions are safe, refunds and returns depend on the folks you're buying from. You'll need to talk to them directly about that.",
            },
            {
              q: "Do I get charged fees for returns through Secrecy Pay?",
              a: "Nope, we won't slap you with fees. But remember, the sellers might have their own policies, so check what they say about returns.",
            },
            {
              q: "How long does it take to process a return on Secrecy Pay?",
              a: "That's in the hands of the sellers, my friend. We make sure your transactions are secure, but how fast they do returns—it's up to them.",
            },
          ],
        },
        {
          title: "Careers",
          faqs: [
            {
              q: "Got any jobs going at Secrecy Pay?",
              a: "Heck yeah, we're always on the lookout for talented folks to join our crew! Check our website for job openings and send in your application.",
            },
            {
              q: "What kind of roles are usually up for grabs at Secrecy Pay?",
              a: "We've got a bunch, making cool stuff, spreading the word, helping customer, loads of exciting stuff. Dive into our careers page for more deets.",
            },
            {
              q: "Does Secrecy Pay do internships or programs for new grads?",
              a: "Absolutely! We're big fans of fresh talent. Keep an eye on our careers page for updates about internships and cool programs to kickstart your career with us.",
            },
          ],
        },
      ];

  return (
    <div
    id="faq"
    ref={faq}
    className="scroll-pt-20 px-5 text-white pt-16 max-w-[1300px] mx-auto"
  >
    <div className="faqs" id="faqs">
      <h3 className="text-3xl font-semibold ">Have a Question?</h3>
      <p className="text-slate-400 text-sm mb-10">
        Get instant clarity and expert guidance.{" "}
      </p>
      <div className=" md:px-0 mt-10 flex flex-col md:flex-row md:items-start gap-14 md:gap-20 max-w-6xl m-auto">
        <div className="p-3 border-y md:border-y-0 overflow-x-auto md:w-[400px] flex md:grid gap-5">
          {faqs.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-7 py-3 rounded-md text-sm ${
                activeCategory == idx && "bg-[#191919] text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="w-full md:w-[calc(100vw-400px)]">
          {faqs[activeCategory].faqs.map((item, idx) => (
            <div
              onClick={() => setActiveFaq(idx)}
              key={idx}
              className="mb-3 cursor-pointer border-b border-slate-800 py-2"
            >
              <div className="mb-2 flex items-center justify-between gap-10">
                <p className="font-medium">{item.q}</p>
                <img
                  src={plus}
                  width={10}
                  height={10}
                  alt={"plus"}
                  className={`${
                    activeFaq == idx
                  } && 'origin-center rotate-45'`}
                />
              </div>
              <p
                className={`pb-2 text-sm text-slate-300 ${
                  activeFaq !== idx && "hidden"
                }`}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="resources mt-32">
      <h3 className="text-[26px] font-semibold ">Resources</h3>
      <p className="text-slate-400 text-sm mb-10">
        Discover the hidden strategies and expert insights.{" "}
      </p>
      <div className="relative z-20 resources hidden md:grid grid-cols-1 md:grid-cols-3 gap-5">
        {resources.map((item, idx) => (
          <div
            className={`resource-${
              idx + 1
            } resource transition-all duration-300 ease-linear cursor-pointer p-5 px-10 rounded`}
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
      </div>
      <div className="container block md:hidden">
        <ResponsiveSlider reviews={resources} />
      </div>
    </div>
  </div>
  )
}

export default FAQ