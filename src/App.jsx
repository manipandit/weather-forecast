import WeatherCard from "./components/weather/WeatherCard";
import ForecastCard from "./components/forecast/ForecastCard";
import SearchInput from "./components/SearchInput";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { cityAtom, currentWeatherAtom, unitAtom } from "./store/weatherAtom";
import axios from "axios";
import toast from "react-hot-toast";

function App() {
  const cityName = useRecoilValue(cityAtom);
  const [weatherData, setWeatherData] = useRecoilState(currentWeatherAtom);
  const [err, setErr] = useState(false);
  const unitsValue = useRecoilValue(unitAtom);
  // console.log("unitsVaL: ", unitsValue);

  async function fetchWeatherData() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const units = unitsValue ? "metric" : "imperial";

    const url = `${apiUrl}q=${cityName}&appid=${apiKey}&units=${units}`;

    try {
      const { data } = await axios.get(url);
      setWeatherData(data?.list);
      setErr(false);
    } catch (error) {
      setErr(true);
      toast.error(`City ${cityName} doesn't exist`);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchWeatherData();
  }, [cityName, unitsValue]);

  return (
    <div className="max-w-screen-sm md:min-w-full px-4 mt-5">
      <div className="flex items-center justify-center">
        <SearchInput />
      </div>
      {err && (
        <div>
          <div className="text-3xl flex items-center justify-center mt-10">
            city "{cityName}" doesn't exist.. Search with correct city name
          </div>
        </div>
      )}
      {!err && (
        <div className="flex flex-col gap-y-2 items-center md:flex-row gap-x-2 mt-2  w-full">
          <div>
            <WeatherCard />
          </div>
          <div className="w-full">
            <ForecastCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
