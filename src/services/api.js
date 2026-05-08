import axios from "axios";

const api = axios.create({
  baseURL: "https://dp-backend-pg5r.onrender.com"
});

export default api;