import { useEffect, useState } from "react";

export default function QuizTimer({ timeout, onTimeout, mode }) {
  const [timeLeft, setTimeLeft] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={timeLeft}
      max={timeout}
      className={mode}
    />
  );
}
