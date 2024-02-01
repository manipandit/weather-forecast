import { unitAtom } from "@/store/weatherAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

function ToggleBtn() {
  const setUnits = useSetRecoilState(unitAtom);
  function changeUnits() {
    setUnits((prev) => !prev);
  }
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div
          className="w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 ring-blue-800 rounded-full peer border peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"
          onClick={changeUnits}
        ></div>
      </label>
    </div>
  );
}

export default ToggleBtn;
