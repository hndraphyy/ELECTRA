import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/assets/svg/search.svg"
        width={17}
        height={17}
        alt="icon-search"
        className="absolute top-[9px] left-[12px]"
      />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search . . ."
        className="w-full border-[1px] border-gray-500 px-3 py-1 pl-10 rounded-lg outline-0"
      />
    </div>
  );
};

export default SearchBar;
