import axios from "axios";

export const instance = axios.create({
  baseURL: "https://test.argos.uz/api",
  headers: {
    "Content-Type": "application/json",
  },
});
