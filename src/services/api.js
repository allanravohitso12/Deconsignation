import axios from "axios";

const API = axios.create({
  baseURL: "https://deconsignation-back-1.onrender.com/api",
});

export default API;
