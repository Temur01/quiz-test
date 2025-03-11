import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyFace } from "../api/PostFaceId";
import Cookies from "js-cookie";

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

        // Add event listeners to check if video is actually playing
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
      console.error("Camera access error:", err);

      // More specific error messages based on the error type
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
      const pin = Cookies.get("user_pin");
      const user_pin = JSON.parse(pin || "");

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
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-center text-xl font-medium mb-6 text-red-700">
            Xatolik
          </h2>
          <p className="text-center mb-6">{error}</p>
          <div className="flex space-x-4">
            <button
              type="button"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              onClick={() => navigate("/")}
            >
              Qaytadan urinib ko'rish
            </button>
            <button
              type="button"
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
              onClick={() => startWebcam()}
            >
              Kamerani qayta ishga tushirish
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-xl font-medium mb-6 text-gray-700">
          Yuz orqali autentifikatsiya
        </h2>

        <div className="mb-6">
          <div className="relative flex justify-center">
            <div className="relative w-48 h-64">
              <div
                className="absolute inset-0 rounded-full border-4 border-green-500"
                style={{ borderRadius: "50%" }}
              ></div>
              {!capturedImage ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ borderRadius: "50%" }}
                />
              ) : (
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ borderRadius: "50%" }}
                />
              )}
            </div>

            <canvas ref={canvasRef} className="hidden" />

            {capturedImage && (
              <button
                type="button"
                onClick={resetCapture}
                className="absolute top-0 right-0 bg-white p-2 rounded-full shadow-md"
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

          <p className="text-center text-gray-600 mt-4 mb-2">
            {!capturedImage
              ? "Yuzingizni kameraga qarating"
              : "Rasmni tasdiqlang"}
          </p>
        </div>

        <button
          type="button"
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
          onClick={handleVerify}
          disabled={isLoading}
        >
          {isLoading
            ? "Yuklanmoqda..."
            : capturedImage
              ? "Tasdiqlash"
              : "Rasmga olish"}
        </button>
      </div>
    </div>
  );
};
