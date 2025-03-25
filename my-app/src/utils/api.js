import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://16.170.201.54:5000/',
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});


API.interceptors.request.use((config) => {
  return config;
});


