import React, { useEffect, useState } from "react";
import CurrentTime from "./CurrentTime";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cityAtom,
  currentIndexAtom,
  currentWeatherAtom,
  unitAtom,
} from "@/store/weatherAtom";
import determineWindDirection from "@/lib/windDirection";

function WeatherCard() {
  const cityName = useRecoilValue(cityAtom);
  const data = useRecoilValue(currentWeatherAtom);
  const [currentObject, setCurrentObject] = useState(null);
  const [index, setIndex] = useRecoilState(currentIndexAtom);
  const unitsValue = useRecoilValue(unitAtom);

  const symbol = unitsValue ? "°C" : "°F";
  const windSpeedMetric = unitsValue ? "m/s" : "miles/hour";
  useEffect(() => {
    if (data.length === 0) return;

    const current_time = new Date();
    const currentHour = parseInt(
      String(current_time).split(" ")[4].substring(0, 2)
    );

    const targetObject = data.find((d, index) => {
      const dataHour = parseInt(d?.dt_txt.split(" ")[1].substring(0, 2));
      setIndex(index);
      return dataHour >= currentHour;
    });

    setCurrentObject(targetObject);
  }, [data]);
  return (
    <div>
      <div className="bg-gradient-to-t from-[#020202] to-zinc-800 min-h-fit w-[350px] md:w-[400px] rounded-3xl px-4 py-2 flex flex-col gap-y-6">
        <div className="flex  items-center justify-between px-4">
          <div className="bg-white text-black w-20 rounded-3xl text-center capitalize py-2">
            {cityName}
          </div>
          <div>
            <CurrentTime />
          </div>
        </div>
        <div className="">
          <div className="flex gap-x-4 items-center">
            <img
              src={`https://openweathermap.org/img/wn/${currentObject?.weather[0].icon}.png`}
              className="w=[60px] h-[60px] object-cover"
              alt=""
            />
            {/* <CloudHail color="white" size={60} /> */}
            <div className="text-xl opacity-70">
              {currentObject?.weather[0].description}
            </div>
          </div>
          <div className=" relative">
            <span className="text-[100px] font-semibold">
              {currentObject?.main.temp}
            </span>
            <sup className="text-3xl absolute top-2">{symbol}</sup>
          </div>
        </div>
        {/*  */}
        <div className="flex gap-x-4 justify-between text-xl">
          <div>
            <div className="font-light text-base opacity-60">Pressure</div>
            <div>{currentObject?.main.pressure} hPa</div>
          </div>
          <div>
            <div className="font-light text-base opacity-60">Humidity</div>
            <div>{currentObject?.main.humidity}%</div>
          </div>
          <div>
            <div className="font-light text-base opacity-60">Visibility</div>
            <div>{currentObject?.visibility / 1000} km</div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col gap-y-4">
          <div className="w-full h-[90px] flex justify-between bg-zinc-800 p-3 rounded-2xl bg-opacity-60">
            <div>
              <div className="text-lg font-thin opacity-70"> Min Temp</div>
              <div className="text-center">
                {currentObject?.main.temp_min}
                {symbol}
              </div>
            </div>

            <div>
              <div className="text-lg font-thin opacity-70">Max Temp</div>
              <div className="text-center">
                {currentObject?.main.temp_max}
                {symbol}
              </div>
            </div>
          </div>
          <div className="w-full h-[90px] flex justify-between bg-zinc-800 p-3 rounded-2xl bg-opacity-60">
            <div>
              <div className="text-lg font-thin opacity-70">Wind Speed</div>
              <div className="text-center">
                {currentObject?.wind.speed} {windSpeedMetric}
              </div>
            </div>
            <div>
              <div className="text-lg font-thin opacity-70">Wind Direction</div>
              <div className="text-center">
                {determineWindDirection(currentObject?.wind.deg)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
