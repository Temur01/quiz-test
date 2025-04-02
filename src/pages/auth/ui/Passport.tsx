import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validatePassport } from "../api/PostAuth";
import Cookies from "js-cookie";
import logoUz from "../../../assets/logo_uz.png";

export const PassportAuth = () => {
  const [jshshir, setJshshir] = useState("");
  const [passport, setPassport] = useState("");
  const [errors, setErrors] = useState<{
    jshshir?: string;
    passport?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateJshshir = (value: string): boolean => {
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, jshshir: "JSHSHIR kiritilmagan" }));
      return false;
    }

    if (value.length !== 14) {
      setErrors((prev) => ({
        ...prev,
        jshshir: "JSHSHIR 14 raqam bo'lishi kerak",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, jshshir: undefined }));
    return true;
  };

  const validatePassportField = (value: string): boolean => {
    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        passport: "Pasport ma'lumotlari kiritilmagan",
      }));
      return false;
    }

    const passportRegex = /^[A-Z]{2}\d{7}$/;
    if (!passportRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        passport: "Pasport noto'g'ri formatda (AB1234567)",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, passport: undefined }));
    return true;
  };

  const handleJshshirChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setJshshir(value);
    if (errors.jshshir) {
      validateJshshir(value);
    }
  };

  const handlePassportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setPassport(value);
    if (errors.passport) {
      validatePassportField(value);
    }
  };

  const handleSubmit = async () => {
    setErrors({});
    const isJshshirValid = validateJshshir(jshshir);
    const isPassportValid = validatePassportField(passport);

    if (!isJshshirValid || !isPassportValid) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await validatePassport(jshshir, passport);

      if (result.success && result.data) {
        Cookies.set("user_pin", result.data.pin);
        localStorage.setItem("user_photo", result.data.photo);
        Cookies.set(
          "user_name",
          result.data.surname_latin + " " + result.data.name_latin,
        );
        navigate("/face-id");
      } else {
        setErrors((prev) => ({
          ...prev,
          general: result.error || "Ma'lumotlar tekshirishda xatolik yuz berdi",
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        general: "Kutilmagan xatolik yuz berdi",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-8">
            <img src={logoUz} alt="O'zbekiston Respublikasi" className="h-14" />
          </div>
        </div>

        {errors.general && (
          <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-red-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{errors.general}</span>
            </div>
          </div>
        )}

        <div className="mb-5">
          <label
            htmlFor="jshshir"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            JSHSHIR <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="jshshir"
            className={`w-full px-4 py-3 border ${errors.jshshir ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33B5F1] focus:border-transparent transition-all duration-200`}
            placeholder="42138025651510"
            value={jshshir}
            onChange={handleJshshirChange}
            maxLength={14}
          />
          {errors.jshshir && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <svg
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              {errors.jshshir}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="passport"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Pasport <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="passport"
            className={`w-full px-4 py-3 border ${errors.passport ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33B5F1] focus:border-transparent transition-all duration-200 uppercase`}
            placeholder="AB1234567"
            value={passport}
            onChange={handlePassportChange}
            maxLength={9}
          />
          {errors.passport && (
            <p className="mt-2 text-sm text-red-600 flex items-center">
              <svg
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              {errors.passport}
            </p>
          )}
        </div>

        <button
          type="button"
          className={`w-full bg-[#33B5F1] hover:bg-[#1c94c4] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Yuklanmoqda...
            </div>
          ) : (
            "Kirish"
          )}
        </button>
      </div>
    </div>
  );
};
