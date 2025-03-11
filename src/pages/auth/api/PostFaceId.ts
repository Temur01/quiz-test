import { instance } from "../../../api/instance";
import axios, { AxiosError } from "axios";

export interface FaceVerificationRequest {
  user_pin: string;
  image: string;
}

export interface FaceVerificationResponse {
  success: boolean;
  face_percent?: number;
  status?: number;
  error?: string;
}

export const verifyFace = async (
  user_pin: string,
  image: string,
): Promise<FaceVerificationResponse> => {
  try {
    const response = await instance.post("/check-face", {
      user_pin,
      image,
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message: string }>;
      return {
        success: false,
        error:
          axiosError.response?.data?.message ||
          "Yuz tasdiqlashda xatolik yuz berdi",
      };
    }
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Noma'lum xatolik yuz berdi",
    };
  }
};
