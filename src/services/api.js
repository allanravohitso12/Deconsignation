import axios from "axios";

const API = axios.create({
  baseURL: "https://deconsignation-back.onrender.com/api",
});

export default API;
