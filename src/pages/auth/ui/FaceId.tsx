import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyFace } from "../api/PostFaceId";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const FaceIdAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    startWebcam();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startWebcam = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError(
          "Brauzeringiz kamera funksiyasini qo'llab-quvvatlamaydi. Iltimos, boshqa brauzerdan foydalaning.",
        );
        return;
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 },
        },
        audio: false,
      });

      console.log(
        "Camera access granted:",
        mediaStream.getVideoTracks().length > 0,
      );

      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        console.log("Video element updated with media stream");

        videoRef.current.onloadedmetadata = () => {
          console.log("Video metadata loaded");
          if (videoRef.current) {
            videoRef.current
              .play()
              .then(() => console.log("Video playback started"))
              .catch((e) => console.error("Video playback failed:", e));
          }
        };
      } else {
        console.error("Video reference is null");
        setError("Video elementi topilmadi. Iltimos, sahifani qayta yuklang.");
      }
    } catch (err: unknown) {
      if (err instanceof DOMException) {
        if (
          err.name === "NotAllowedError" ||
          err.name === "PermissionDeniedError"
        ) {
          setError(
            "Kameradan foydalanish uchun ruxsat berilmadi. Iltimos, brauzer sozlamalarida kameraga ruxsat bering.",
          );
        } else if (
          err.name === "NotFoundError" ||
          err.name === "DevicesNotFoundError"
        ) {
          setError(
            "Kamera qurilmasi topilmadi. Iltimos, kamera ulanganligini tekshiring.",
          );
        } else if (
          err.name === "NotReadableError" ||
          err.name === "TrackStartError"
        ) {
          setError(
            "Kameraga ulanib bo'lmadi. Kamera boshqa dastur tomonidan ishlatilayotgan bo'lishi mumkin.",
          );
        } else {
          setError(`Kamerani ishga tushirishda xatolik yuz berdi: ${err.name}`);
        }
      } else {
        setError(
          "Kamerani ishga tushirishda xatolik yuz berdi. Iltimos, kameraga ruxsat bering.",
        );
      }
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = canvas.toDataURL("image/jpeg");
        setCapturedImage(imageData);
      }
    }
  };

  const handleVerify = async () => {
    if (!capturedImage) {
      captureImage();
      return;
    }

    setIsLoading(true);

    try {
      const user_pin = Cookies.get("user_pin");

      if (!user_pin) {
        setError(
          "Foydalanuvchi ma'lumotlari topilmadi. Iltimos, qaytadan urinib ko'ring.",
        );
        setIsLoading(false);
        return;
      }

      const base64Image = capturedImage.split(",")[1];

      const result = await verifyFace(user_pin, base64Image);

      if (result.success) {
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        toast.success("Muvaffaqiyatli ro'yxatdan o'tildi!");

        navigate("/quiz");
      } else {
        setError(result.error || "Yuz tasdiqlashda xatolik yuz berdi");
        setCapturedImage(null);
      }
    } catch (error: unknown) {
      console.error("Face verification error:", error);
      setError("Kutilmagan xatolik yuz berdi");
      setCapturedImage(null);
    } finally {
      setIsLoading(false);
    }
  };

  const resetCapture = () => {
    setCapturedImage(null);
  };

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
          <div className="text-center mb-6">
            <svg
              className="h-12 w-12 text-red-500 mx-auto mb-4"
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
            <h2 className="text-xl font-semibold text-red-700 mb-2">Xatolik</h2>
            <p className="text-gray-600 mb-6">{error}</p>
          </div>
          <div className="flex space-x-4">
            <button
              type="button"
              className="flex-1 bg-[#33B5F1] hover:bg-[#1c94c4] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
              onClick={() => navigate("/")}
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Qaytadan urinib ko'rish
            </button>
            <button
              type="button"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
              onClick={() => startWebcam()}
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Kamerani qayta ishga tushirish
            </button>
          </div>
        </div>
      </div>
    );
  }

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

          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Yuz orqali autentifikatsiya
          </h2>
        </div>

        <div className="mb-8">
          <div className="relative flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#33B5F1] shadow-lg">
              {!capturedImage ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-2 border-dashed border-white rounded-full opacity-70"></div>
              </div>
            </div>

            <canvas ref={canvasRef} className="hidden" />

            {capturedImage && (
              <button
                type="button"
                onClick={resetCapture}
                className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            )}
          </div>

          <p className="text-center text-gray-600 mt-6 mb-2 font-medium">
            {!capturedImage
              ? "Yuzingizni kameraga qarating"
              : "Rasmni tasdiqlang"}
          </p>
        </div>

        <button
          type="button"
          className={`w-full bg-[#33B5F1] hover:bg-[#1c94c4] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
          onClick={handleVerify}
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
            <>
              {capturedImage ? (
                <>
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Tasdiqlash
                </>
              ) : (
                <>
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Rasmga olish
                </>
              )}
            </>
          )}
        </button>
      </div>
    </div>
  );
};
