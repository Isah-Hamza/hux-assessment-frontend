"use client";
import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "react-toastify";
import axios from "axios";

const Form = () => {
  const [user, setUser] = useState({ email: "", fullname: "" });
  const [loading, setLoading] = useState(false);

  const endpoint = "https://secrecypay.com/server/server.php";

  const successNotification = (msg) =>
    toast.success(msg ?? "Successfully subscribed. Thank you!", {
      theme: "colored",
      hideProgressBar: true,
    });

  const errorNotification = (msg) =>
    toast.error(msg ?? "An error occured. Try again!", {
      theme: "colored",
      hideProgressBar: true,
    });

  const submitForm = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(endpoint, user, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "*/*",
        },
      })
      .then((res) => {
        setUser(() => ({ email: "", fullname: "" }));
        successNotification(res.data.message);
      })
      .catch((e) => {
        console.log(e.response.data.error);
        errorNotification(e.response.data.error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      id="waitlist-form"
      className="bg-[#ebeff5] min-h-[200px] px-5 md:px-0 py-14"
    >
      <div className="max-w-[700px] m-auto">
        <form
          onSubmit={submitForm}
          className="my-7 text-white bg-black rounded-lg p-5 md:p-10 md:px-24"
        >
          <h3 className="text-3xl text-center font-semibold tracking-wider leading-9">
            Our Membership <br />
            is almost here
          </h3>
          <p className="text-sm text-center mb-7 mt-3">
            Information and connections that help you execute and scale your
            idea or business. stay informed about out launch and become our
            first members.
          </p>
          <input
            value={user.fullname}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, fullname: e.target.value }))
            }
            type="text"
            name="fullname"
            placeholder="Fullname"
            className="outline-none w-full text-sm bg-[#D9D9D940] p-3 rounded-md"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="my-3 outline-none w-full text-sm bg-[#D9D9D940] p-3 rounded-md"
            value={user.email}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <button
            disabled={loading}
            type="submit"
            className="flex items-center justify-center gap-3 disabled:opacity-75 w-full text-sm text-white bg-primary font-medium px-7 py-3.5 rounded-md"
          >
            {loading ? <ImSpinner2 className="animate-spin" size={20} /> : null}
            Join the waitlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
