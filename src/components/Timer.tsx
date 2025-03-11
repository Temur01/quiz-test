import React, { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number; // in seconds
  onTimeUp: () => void;
  isCompleted?: boolean;
}

const Timer: React.FC<TimerProps> = ({
  initialTime,
  onTimeUp,
  isCompleted = false,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    setTimeRemaining(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (!isCompleted) {
      setTimeRemaining(initialTime);
    }
  }, [isCompleted, initialTime]);

  useEffect(() => {
    let timer: number | undefined;

    if (!isCompleted && timeRemaining > 0) {
      timer = window.setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      onTimeUp();
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [timeRemaining, onTimeUp, isCompleted, initialTime]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeRemaining);

  return (
    <div className="flex items-center justify-center space-x-3">
      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="border-2 border-[#1E88E5] rounded-lg px-4 py-2 w-16 text-center">
          <div className="text-xl font-bold text-[#1E88E5]">{hours}</div>
        </div>
        <div className="text-xs mt-1 text-gray-600">Soat</div>
      </div>

      {/* Colon */}
      <div className="text-xl font-bold text-[#1E88E5] mt-[-12px]">:</div>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="border-2 border-[#1E88E5] rounded-lg px-4 py-2 w-16 text-center">
          <div className="text-xl font-bold text-[#1E88E5]">{minutes}</div>
        </div>
        <div className="text-xs mt-1 text-gray-600">Daqiqa</div>
      </div>

      {/* Colon */}
      <div className="text-xl font-bold text-[#1E88E5] mt-[-12px]">:</div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="border-2 border-[#1E88E5] rounded-lg px-4 py-2 w-16 text-center">
          <div className="text-xl font-bold text-[#1E88E5]">{seconds}</div>
        </div>
        <div className="text-xs mt-1 text-gray-600">Soniya</div>
      </div>
    </div>
  );
};

export default Timer;
