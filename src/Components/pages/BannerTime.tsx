"use client";
import { useState, useEffect } from "react";
import TextAnimation from "../Utlities/TextAnimation";
type TimeLeft = {
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = ({ targetDate }: { targetDate: any }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div className="text-3xl font-exotwo font-semibold text-white">
        <TextAnimation title="Discounted Tea & Coffee!" />
      </div>
      <div className="flex items-center justify-center space-x-4 text-white">
        <div>
          <h1 className="text-4xl font-bold">{timeLeft.hours}</h1>
        </div>
        <h1 className=" text-4xl">:</h1>
        <div>
          <h1 className="text-4xl font-bold">{timeLeft.minutes}</h1>
        </div>
        <h1 className=" text-4xl">:</h1>
        <div>
          <h1 className="text-4xl font-bold">{timeLeft.seconds}</h1>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
