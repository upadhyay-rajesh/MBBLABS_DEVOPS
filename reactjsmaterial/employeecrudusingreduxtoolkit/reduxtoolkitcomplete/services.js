// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:12002/api/v1/employees", // your Spring Boot backend
});

export default api;
