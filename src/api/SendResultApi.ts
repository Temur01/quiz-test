import { instance } from "./instance";

export const SendResultApi = async (user_pin: string, ball: number) => {
  return await instance
    .post("/demo-test-results", {
      user_pin,
      ball,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
