import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validatePassport } from "../api/PostAuth";
import Cookies from "js-cookie";

export const PassportAuth = () => {
  const [jshshir, setJshshir] = useState("");
  const [passportSeria, setPassportSeria] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [errors, setErrors] = useState<{
    jshshir?: string;
    passportSeria?: string;
    passportNumber?: string;
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

  const validatePassportSeria = (value: string): boolean => {
    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        passportSeria: "Passport seriyasi kiritilmagan",
      }));
      return false;
    }

    const seriaRegex = /^[A-Z]{2}$/;
    if (!seriaRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        passportSeria: "Passport seriyasi 2 bosh harf bo'lishi kerak (AB)",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, passportSeria: undefined }));
    return true;
  };

  const validatePassportNumber = (value: string): boolean => {
    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        passportNumber: "Passport raqami kiritilmagan",
      }));
      return false;
    }

    const numberRegex = /^\d{7}$/;
    if (!numberRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        passportNumber: "Passport raqami 7 raqam bo'lishi kerak (1234567)",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, passportNumber: undefined }));
    return true;
  };

  const handleJshshirChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setJshshir(value);
    if (errors.jshshir) {
      validateJshshir(value);
    }
  };

  const handlePassportSeriaChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value.toUpperCase();
    setPassportSeria(value);
    if (errors.passportSeria) {
      validatePassportSeria(value);
    }
  };

  const handlePassportNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setPassportNumber(value);
    if (errors.passportNumber) {
      validatePassportNumber(value);
    }
  };

  const handleSubmit = async () => {
    setErrors({});
    const isJshshirValid = validateJshshir(jshshir);
    const isPassportSeriaValid = validatePassportSeria(passportSeria);
    const isPassportNumberValid = validatePassportNumber(passportNumber);

    if (!isJshshirValid || !isPassportSeriaValid || !isPassportNumberValid) {
      return;
    }

    const passport = `${passportSeria}${passportNumber}`;

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
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            O'zbekiston Respublikasi
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Prezident huzuridagi Davlat xizmatlarini rivojlantirish agentligi
          </h2>

          <div className="w-20 h-1 bg-[#33B5F1] mx-auto mb-6"></div>

          <h2 className="text-lg font-medium text-gray-700">Tizimga kirish</h2>
        </div>

        {errors.general && (
          <div className="mb-6 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r">
            <div className="flex">
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
            placeholder="52008015650010"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Passport <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-3">
            <div className="w-1/3">
              <input
                type="text"
                id="passportSeria"
                className={`w-full px-4 py-3 border ${errors.passportSeria ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33B5F1] focus:border-transparent transition-all duration-200 uppercase`}
                placeholder="AB"
                value={passportSeria}
                onChange={handlePassportSeriaChange}
                maxLength={2}
              />
              {errors.passportSeria && (
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
                  {errors.passportSeria}
                </p>
              )}
            </div>
            <div className="w-2/3">
              <input
                type="number"
                id="passportNumber"
                className={`w-full px-4 py-3 border ${errors.passportNumber ? "border-red-500 ring-1 ring-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33B5F1] focus:border-transparent transition-all duration-200`}
                placeholder="1234567"
                value={passportNumber}
                onChange={handlePassportNumberChange}
                maxLength={7}
              />
              {errors.passportNumber && (
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
                  {errors.passportNumber}
                </p>
              )}
            </div>
          </div>
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
