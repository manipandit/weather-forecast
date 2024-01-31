import React from "react";
import { Search } from "lucide-react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cityAtom, searchAtom } from "@/store/weatherAtom";

function SearchInput() {
  const [search, setSearch] = useRecoilState(searchAtom);
  const setCity = useSetRecoilState(cityAtom);
  function searchWithCity() {
    setCity(search);
  }
  return (
    <div>
      <div className="w-[350px] md:w-[430px] bg-zinc-900  py-3 rounded-2xl flex items-center gap-x-1 px-3">
        <input
          type="text"
          className="border-none  flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 "
          placeholder="Search location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="cursor-pointer opacity-70">
          <Search onClick={searchWithCity} />
        </span>
      </div>
    </div>
  );
}

export default SearchInput;
