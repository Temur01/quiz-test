import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validatePassport } from "../api/PostAuth";
import Cookies from "js-cookie";

export const PassportAuth = () => {
  const [jshshir, setJshshir] = useState("52008015650053");
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
        console.log(result.data, "data");
        Cookies.set("user_pin", JSON.stringify(result.data.pin));
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-xl font-medium mb-6 text-gray-700">
          Sinovga kirish uchun shaxsingizni tasdiqlang!
        </h2>

        {errors.general && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {errors.general}
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="jshshir"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            JSHSHIR <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="jshshir"
            className={`w-full px-3 py-2 border ${errors.jshshir ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            placeholder="52008015650010"
            value={jshshir}
            onChange={handleJshshirChange}
            maxLength={14}
          />
          {errors.jshshir && (
            <p className="mt-1 text-sm text-red-600">{errors.jshshir}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Passport <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-2">
            <div className="w-1/3">
              <input
                type="text"
                id="passportSeria"
                className={`w-full px-3 py-2 border ${errors.passportSeria ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="AB"
                value={passportSeria}
                onChange={handlePassportSeriaChange}
                maxLength={2}
              />
              {errors.passportSeria && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.passportSeria}
                </p>
              )}
            </div>
            <div className="w-2/3">
              <input
                type="number"
                id="passportNumber"
                className={`w-full px-3 py-2 border ${errors.passportNumber ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="1234567"
                value={passportNumber}
                onChange={handlePassportNumberChange}
                maxLength={7}
              />
              {errors.passportNumber && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.passportNumber}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Yuklanmoqda..." : "Kirish"}
        </button>
      </div>
    </div>
  );
};
