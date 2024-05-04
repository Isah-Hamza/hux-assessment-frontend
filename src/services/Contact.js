"use client";

import endpoints from "../api/endpoints";
import axiosClient from "../api/axiosClient";


const GetContacts = (id) => {
  return axiosClient()
    .get(`${endpoints.contact.GET_CONTACTS}/${id}/contacts`)
    .then((res) => res)
    .catch((error) => Promise.reject(error));
};
 
const CreateContact = ({id, payload}) => {
  return axiosClient()
    .post(`${endpoints.contact.GET_CONTACTS}/${id}/contacts`, payload)
    .then((res) => res)
    .catch((error) => Promise.reject(error));
};
 
const EditContact = ({user_id, contact_id, payload}) => {
  return axiosClient()
    .put(`${endpoints.contact.GET_CONTACTS}/${user_id}/contacts/${contact_id}`, payload)
    .then((res) => res)
    .catch((error) => Promise.reject(error));
};
 

export default {
  GetContacts,
  CreateContact,
  EditContact,
};
