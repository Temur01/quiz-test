import axios from "axios";

export const instance = axios.create({
  baseURL: "https://demo-test.argos.uz/api",
  headers: {
    "Content-Type": "application/json",
  },
});
