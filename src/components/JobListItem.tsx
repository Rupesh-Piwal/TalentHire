import { Job } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Stripe from "@/assets/Strip-logo.svg";
import { Banknote, EarthIcon, MapPin } from "lucide-react";

interface JobListItemProps {
  job: Job;
}

const JobListItem = async ({
  job: {
    title,
    type,
    locationType,
    location,
    description,
    companyName,
    applicationEmail,
    applicationUrl,
    companyLogoUrl,
    salary,
  },
}: JobListItemProps) => {
  return (
    <div className="my-3 flex max-w-[919px] cursor-pointer flex-row items-center justify-between border border-gray-200 px-6 py-4 hover:bg-gray-50">
      <div className="flex flex-row items-start gap-6">
        <Image alt="" src={Stripe} width={50} height={50} />
        <div className="flex  flex-col items-start justify-start gap-1.5 ">
          <div>
            <div className="font-semibold">{title}</div>
            <p className="text-sm text-gray-500 ">{companyName}</p>
          </div>
          <div className="flex flex-col items-start text-sm">
            <p className="flex flex-row items-center justify-center gap-1 text-gray-500">
              <MapPin className="w-[15px]" />
              {locationType}
            </p>
            <p className="flex flex-row items-center justify-center gap-1 text-gray-500">
              <EarthIcon className="w-[15px]" />
              {location}
            </p>
            <p className="flex flex-row items-center justify-center gap-1 text-gray-500">
              <Banknote className="w-[15px]" />
              {salary}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  gap-10">
        <Badge variant="secondary">{type}</Badge>
        <p className="text-sm text-gray-500">1 hour ago</p>
      </div>
    </div>
  );
};

export default JobListItem;
