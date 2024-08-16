import { Search } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-[#F8F8FD] py-10 text-center ">
      <div className="flex flex-col gap-3 py-3">
        <h1 className="text-[48px]">
          Find your <span className="text-[#26A4FF]">dream job</span>
        </h1>
        <p className="text-[18px] text-[#515B6F]">
          Find your next career at companies like HubSpot, Nike, and Dropbox
        </p>
      </div>
      <div className="flex flex-col gap-3 py-4">
        <div className="flex items-center justify-center gap-3 ">
          <Search size={26} className="text-[#515B6F]" />
          <input
            className="min-w-[600px] rounded px-2 py-3 outline-none"
            type="search"
            name=""
            id=""
          />
          <button className="rounded bg-[#4640DE] px-4 py-3 font-semibold text-white hover:bg-[#4640DE]/90">
            Search
          </button>
        </div>
        <p className="text-[16px] text-[#515B6F]">
          Popular : UI Designer, UX Researcher, Android, Admin
        </p>
      </div>
    </div>
  );
};

export default Banner;
