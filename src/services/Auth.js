"use client";

import endpoints from "../api/endpoints";
import axiosClient from "../api/axiosClient";


const Register = (data) => {
  return axiosClient()
    .post(endpoints.auth.REGISTER, data)
    .then((res) => res)
    .catch((error) => Promise.reject(error));
};

const Login = (data) => {
  return axiosClient()
    .post(endpoints.auth.LOGIN, data, {
    })
    .then((res) => res)
    .catch((error) => Promise.reject(error));
};


export default {
  Register,
  Login, 
};
