import { Search } from "lucide-react";
import Image from "next/image";
import BannerImage from "@/assets/Banner-Image.png";
import SuitCase from "@/assets/suitcase.svg";
import Company from "@/assets/company.svg";
import Candidates from "@/assets/Candidates.svg";

const Banner = () => {
  return (
    <div className="flex flex-col bg-[#F8F8FD] py-10 text-center md:px-[150px] ">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col gap-3 py-3 text-center">
          <h1 className="text-[34px] font-bold text-[#18191C] md:text-[48px]">
            <span className="text-gradient">Find a job</span> that suits your{" "}
            <span className="text-gradient">skills</span>
          </h1>
          <p className="px-8 text-[18px] text-[#515B6F]">
            Find your next career at companies like HubSpot, Nike, and{" "}
            <span className="text-gradient">Dropbox</span>
          </p>
        </div>
        <div className="illustration">
          <Image
            className="px-8 py-4"
            alt="Banner-Image"
            src={BannerImage}
            height={360}
            width={452}
          ></Image>
        </div>
      </div>
      <div className="facts hidden flex-row justify-between py-4 md:flex">
        <div className="box-1 flex h-[112px] w-[260px] flex-row items-center justify-start gap-6 rounded-[8px] bg-[#ffffff] px-10 shadow-sm">
          <Image alt="live jobs" src={SuitCase} height={72} width={72}></Image>
          <div>
            <h1 className="text-[24px] font-bold">
              100<span className="text-gradient">+</span>
            </h1>
            <p>Live Job</p>
          </div>
        </div>
        <div className="box-1 flex h-[112px] w-[260px] flex-row items-center justify-start gap-6 rounded-[8px] bg-[#ffffff] px-10 shadow-lg">
          <Image alt="companies" src={Company} height={72} width={72}></Image>
          <div className="flex flex-col">
            <h1 className="text-[24px] font-bold">
              50<span className="text-gradient">+</span>
            </h1>
            <p>Companies</p>
          </div>
        </div>
        <div className="box-1 flex h-[112px] w-[260px] flex-row items-center justify-start gap-6 rounded-[8px] bg-[#ffffff] px-10 shadow-sm">
          <Image
            alt="candidates"
            src={Candidates}
            height={72}
            width={72}
          ></Image>
          <div>
            <h1 className="text-[24px] font-bold">
              500<span className="text-gradient">+</span>
            </h1>
            <p>Candidates</p>
          </div>
        </div>
        <div className="box-1 flex h-[112px] w-[260px] flex-row items-center justify-start gap-6 rounded-[8px] bg-[#ffffff] px-10 shadow-sm">
          <Image alt="new jobs" src={SuitCase} height={72} width={72}></Image>
          <div>
            <h1 className="text-[24px] font-bold">
              200 <span className="text-gradient">+</span>
            </h1>
            <p>New Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
