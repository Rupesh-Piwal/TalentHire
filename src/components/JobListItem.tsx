import { Job } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Stripe from "@/assets/Strip-logo.svg";
import { Banknote, Clock, EarthIcon, MapPin } from "lucide-react";
import { formatMoney, relativeDate } from "@/lib/utils";

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
    createdAt,
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
              {formatMoney(salary)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  gap-10">
        <Badge variant="secondary">{type}</Badge>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <Clock size={16} />
          {relativeDate(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default JobListItem;
