import Image from "next/image";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ placeholder = "Search...", onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };
  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <label htmlFor="search">
        <Image
          src="/assets/svg/search.svg"
          width={17}
          height={17}
          alt="icon-search"
          className="absolute top-[7px] md:top-[9px] left-[9px] md:left-[12px]"
        />
      </label>
      <input
        type="search"
        name="search"
        id="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border-[1px] text-gray-500 border-gray-400 px-3 py-[2px] md:py-1 pl-8 md:pl-10 rounded-sm outline-0 text-md"
      />
    </form>
  );
};

export default SearchBar;
