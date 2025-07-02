"use client";
import { useEffect, useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState<number | null>(null);

  useEffect(() => {
    const targetDate = new Date("2026-01-02T10:00:00");
    const calculateDays = () => {
      const now = new Date();
      const startOfToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      const startOfTarget = new Date(
        targetDate.getFullYear(),
        targetDate.getMonth(),
        targetDate.getDate()
      );
      const timeDifference = startOfTarget.getTime() - startOfToday.getTime();
      const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return days;
    };

    setCounter(calculateDays());
  }, []);

  return { counter };
};
