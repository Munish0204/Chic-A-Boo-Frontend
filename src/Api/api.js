import axios from "axios";

const API_BASE_URL = "https://chic-a-boo-backend.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
