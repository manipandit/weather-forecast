import { atom } from "recoil";

export const cityAtom = atom({
  key: "cityAtom",
  default: "london",
});

export const currentDayAtom = atom({
  key: "currentDayAtom",
  default: [],
});

export const searchAtom = atom({
  key: "searchAtom",
  default: "",
});

export const currentWeatherAtom = atom({
  key: "currentWeatherAtom",
  default: [],
});

export const currentIndexAtom = atom({
  key: "currentIndexAtom",
  default: null,
});

export const unitAtom = atom({
  key: "unitAtom",
  default: true,
});
