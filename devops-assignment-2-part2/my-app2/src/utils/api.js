import axios from 'axios';

// Replace with your IP-based backend API
export const API = axios.create({
  baseURL: 'http://13.60.192.21:5001/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  return config;
});
