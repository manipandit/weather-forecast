import React from "react";
import { findDay } from "@/lib/findDay";
import { unitAtom } from "@/store/weatherAtom";
import { useRecoilValue } from "recoil";

function DayDetails({ details }) {
  const day = findDay(details?.dt);
  const fullDate = details?.dt_txt.split(" ")[0];
  const month = fullDate?.split("-")[1];
  const date = fullDate?.split("-")[2];
  const year = fullDate?.split("-")[0];
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

  const finalDate = `${date} ${months[month - 1]} ${year}`;
  const unitsValue = useRecoilValue(unitAtom);

  const symbol = unitsValue ? "°C" : "°F";

  return (
    <div className="h-fit p-6 md:p-2 lg:p-6 rounded-2xl  flex items-center justify-center border border-slate-50 border-opacity-50 mt-10 md:mt-0">
      <div className="flex flex-col items-center gap-y-2">
        <div className="flex flex-col">
          <span className="text-xl opacity-60 text-center">{day}</span>
          <span className="text-base opacity-60">{finalDate}</span>
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <img
            src={`https://openweathermap.org/img/wn/${details?.weather[0].icon}.png`}
            className="h-[100px] w-[100px] object-cover"
            alt=""
          />
          <div>{details?.weather[0].description}</div>
          <span className="text-3xl">
            {details?.main.temp} <span>{symbol}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DayDetails;
