import { convertTo12HourFormat } from "@/lib/convertTime";
import React, { useState, useEffect } from "react";

function currentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(intervalID);
  }, []);

  const hours = String(convertTo12HourFormat(currentTime.getHours()));
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const currentDate = currentTime.getDate();
  const currentMonth = currentTime.getMonth();
  const year = currentTime.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div>
      <p className="text-sm font-semibold">
        <span>
          {currentDate} {months[currentMonth]} {year}
        </span>
      </p>
      <p className="text-xl font-medium">
        {hours}:{minutes}
      </p>
    </div>
  );
}

export default currentTime;
