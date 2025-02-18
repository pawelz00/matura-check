import { useEffect, useState } from "react";

export default function Counter() {
  const calculateDays = () => {
    const today = new Date();
    const targetDate = new Date("2025-05-05");
    const timeDiff = targetDate.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  const [daysLeft, setDaysLeft] = useState(calculateDays());

  useEffect(() => {
    const interval = setInterval(
      () => {
        setDaysLeft(calculateDays());
      },
      1000 * 60 * 60 * 24,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={"text-sm font-medium"}>{daysLeft} dni do matury</span>
  );
}
