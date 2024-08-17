import { Search } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-[#F8F8FD] py-10 text-center">
      <div className="flex flex-col gap-3 py-3">
        <h1 className="px-16 text-[48px]">
          Find your <span className="text-[#26A4FF]">dream job</span>
        </h1>
        <p className="px-8 text-[18px] text-[#515B6F]">
          Find your next career at companies like HubSpot, Nike, and Dropbox
        </p>
      </div>

      {/* For screens above md */}
      <div className="hidden flex-col gap-3 py-4 md:flex">
        <div className="flex items-center justify-center gap-3">
          <Search size={26} className="text-[#515B6F]" />
          <input
            className="rounded px-10 py-3 outline-none md:min-w-[600px] md:px-2"
            type="search"
            name=""
            id=""
          />
          <button className="rounded bg-[#4640DE] px-4 py-3 font-semibold text-white hover:bg-[#4640DE]/90">
            Search
          </button>
        </div>
      </div>

      {/* For screens below md */}
      <div className="mx-8 flex flex-col items-center justify-center gap-3 bg-white md:hidden">
        <div className="flex flex-row items-center justify-between">
          <Search size={26} className="text-[#515B6F]" />
          <input
            className="rounded px-6 py-3 outline-none"
            type="search"
            name=""
            id=""
          />
        </div>
        <button className="w-full rounded bg-[#4640DE] px-4 py-3 font-semibold text-white hover:bg-[#4640DE]/90">
          Search my job
        </button>
      </div>

      <p className="mt-4 px-8 text-[16px] text-[#515B6F]">
        UI Designer, UX Researcher, Android, Admin
      </p>
    </div>
  );
};

export default Banner;
