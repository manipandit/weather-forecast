import React from "react";
import DayDetails from "./DayDetails";
import { useRecoilValue } from "recoil";
import { currentIndexAtom, currentWeatherAtom } from "@/store/weatherAtom";
import ToggleBtn from "../ToggleBtn";

function ForecastCard() {
  const weatherData = useRecoilValue(currentWeatherAtom);
  const index = useRecoilValue(currentIndexAtom);
  let i = index;
  return (
    <div>
      <div className="w-[350px] h-fit md:w-full md:h-[590px] bg-gradient-to-l from-[#020202] to-zinc-800 rounded-3xl p-4 ">
        <div className="flex justify-between">
          <div className="text-lg font-bold opacity-60">Weather Adviser</div>
          <div className="flex items-center gap-x-2">
            <div className="mt-[-5px] text-sm font-medium">C</div>
            <ToggleBtn />
            <div className="mt-[-5px] text-sm font-medium">F</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-5 w-full h-full place-items-center">
          {i && <DayDetails details={weatherData[i]} />}
          {i &&
            Array.from({ length: 4 }, (_) => {
              i += 8;

              return <DayDetails key={i} details={weatherData[i]} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
