import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-rocketmovies-dp99.onrender.com",
});
