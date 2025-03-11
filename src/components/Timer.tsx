import React, { useState, useEffect } from "react";
import { Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

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
  const [isLowTime, setIsLowTime] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    if (!isCompleted && timeRemaining > 0) {
      timer = window.setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      onTimeUp();
    }

    // Set low time warning when less than 10% of time remains
    if (timeRemaining < initialTime * 0.1 && timeRemaining > 0) {
      setIsLowTime(true);
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

  const progressPercentage = (timeRemaining / initialTime) * 100;

  const getTimerColor = () => {
    if (isLowTime) return "from-red-500 to-orange-500";
    if (timeRemaining < initialTime * 0.3)
      return "from-orange-500 to-yellow-500";
    return "from-blue-500 to-purple-500";
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl shadow-md p-3 bg-white border border-gray-100`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gray-100 w-full">
        <motion.div
          className={`h-full bg-gradient-to-r ${getTimerColor()}`}
          initial={{ width: "100%" }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex items-center justify-center">
        {isLowTime ? (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mr-2"
          >
            <AlertCircle size={18} className="text-red-500" />
          </motion.div>
        ) : (
          <Clock size={18} className="text-gray-600 mr-2" />
        )}

        <div className="flex space-x-1">
          <TimeUnit value={hours} label="soat" isLowTime={isLowTime} />
          <span
            className={`text-xl font-bold ${isLowTime ? "text-red-500" : "text-gray-700"}`}
          >
            :
          </span>
          <TimeUnit value={minutes} label="daqiqa" isLowTime={isLowTime} />
          <span
            className={`text-xl font-bold ${isLowTime ? "text-red-500" : "text-gray-700"}`}
          >
            :
          </span>
          <TimeUnit value={seconds} label="soniya" isLowTime={isLowTime} />
        </div>
      </div>
    </motion.div>
  );
};

// Time unit component for better organization
const TimeUnit: React.FC<{
  value: string;
  label: string;
  isLowTime: boolean;
}> = ({ value, label, isLowTime }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={`text-xl font-bold ${isLowTime ? "text-red-500" : "text-gray-800"}`}
        key={value}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.div>
      <div className="text-[10px] text-gray-500">{label}</div>
    </div>
  );
};

export default Timer;
