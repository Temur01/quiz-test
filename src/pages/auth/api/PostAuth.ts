import { instance } from "../../../api/instance";
import axios, { AxiosError } from "axios";

export interface PassportData {
  document: string;
  pin: string;
  surname_latin: string;
  name_latin: string;
  patronym_latin: string;
  surname_cyrillic: string;
  name_cyrillic: string;
  patronym_cyrillic: string;
  birth_date: string;
  gender: string;
  nationality: string;
  birth_place: string;
  document_giving_date: string;
  document_expiry_date: string;
  document_given_by: string;
  photo: string;
}

export interface PassportValidationResponse {
  success: boolean;
  data: PassportData;
  error?: string;
}

const emptyPassportData: PassportData = {
  document: "",
  pin: "",
  surname_latin: "",
  name_latin: "",
  patronym_latin: "",
  surname_cyrillic: "",
  name_cyrillic: "",
  patronym_cyrillic: "",
  birth_date: "",
  gender: "",
  nationality: "",
  birth_place: "",
  document_giving_date: "",
  document_expiry_date: "",
  document_given_by: "",
  photo: "",
};

export const validatePassport = async (
  user_pin: string,
  passport: string,
): Promise<PassportValidationResponse> => {
  try {
    const response = await instance.post("/get-passport-data", {
      user_pin,
      passport,
    });
    if (response.data.data && response.data.document) {
      return {
        success: true,
        data: response.data.data as PassportData,
      };
    } else {
      return {
        success: true,
        data: response.data.data as PassportData,
      };
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage = axiosError.response?.data?.message;

      if (
        errorMessage ===
        "Бунақа фойдаланувчи топилмади, илтимос маълумотлар аниқлилигини текширинг!"
      ) {
        return {
          success: false,
          data: emptyPassportData,
          error: "JSHSHIR yoki pasport ma'lumoti xato kiritilgan!",
        };
      }

      return {
        success: false,
        data: emptyPassportData,
        error: errorMessage || "Serverda xatolik mavjud!",
      };
    }
    return {
      success: false,
      data: emptyPassportData,
      error: "Xatolik yuz berdi",
    };
  }
};
