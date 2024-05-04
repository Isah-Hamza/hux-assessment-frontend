// import axios from "axios";
export const baseURL = 'http://localhost:5000';

import axios from 'axios';

export default () => {
  // Create an instance of Axios
  const api = axios.create({
    baseURL,
    headers: {
      // Authorization: Boolean(token) ? "Bearer " + token : undefined,
      // Authorization: 'Boolean(token) ? "Bearer " + token : undefined',
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      let token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => {
      if (response.status === 401) {
        alert("You are not authorized");
      }
      return response;
    },
    (error) => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.message);
    }
  );

  return api
}
