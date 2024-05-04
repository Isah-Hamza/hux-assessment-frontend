import { toast } from "react-toastify";

export const successToast = (msg) => {
  toast.success(msg ?? "Operation successful!", { theme: 'light' });
};

export const errorToast = (msg) => {
  toast.error(msg ?? "Operation failed. Try again!", { theme: 'light' });
};

export const infoToast = (msg) => {
  toast.info(msg ?? "Attention, please!", { theme: 'light' });
};

export const SAVE_TO_LOCALSTORAGE = (key, value) => {
  if (typeof window != 'undefined') window.localStorage.setItem(key, JSON.stringify(value));
};

export const GET_FROM_LOCALSTORAGE = (key) => {
  if (typeof window != 'undefined') window.localStorage.getItem(key);
};

export const REMOVE_FROM_LOCALSTORAGE = (key) => {
  if (typeof window != 'undefined') window.localStorage.removeItem(key);
};


export const ConvertToNaira = (amount = 0) => {
  return `₦${amount.toLocaleString('en-NG')}`;
};


export const truncateText = (description, maxLength = 20) => {
  if (description?.length <= maxLength) {
    return description;
  } else {
    return description?.slice(0, maxLength) + "...";
  }
};