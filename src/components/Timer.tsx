import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

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
  }, [timeRemaining, onTimeUp, isCompleted]);

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
    <div className="flex items-center bg-white rounded-md border border-gray-200 shadow-sm px-3 py-2">
      <Clock size={18} className="text-gray-600 mr-2" />
      <div className="flex space-x-1">
        <div className="flex flex-col items-center">
          <div className="text-base font-medium text-gray-800">{hours}</div>
          <div className="text-xs text-gray-500">soat</div>
        </div>
        <span className="text-base font-medium text-gray-800">:</span>
        <div className="flex flex-col items-center">
          <div className="text-base font-medium text-gray-800">{minutes}</div>
          <div className="text-xs text-gray-500">daqiqa</div>
        </div>
        <span className="text-base font-medium text-gray-800">:</span>
        <div className="flex flex-col items-center">
          <div className="text-base font-medium text-gray-800">{seconds}</div>
          <div className="text-xs text-gray-500">soniya</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
