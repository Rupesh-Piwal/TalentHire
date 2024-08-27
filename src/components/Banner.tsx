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
    </div>
  );
};

export default Banner;
