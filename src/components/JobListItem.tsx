import { Job } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Stripe from "@/assets/Strip-logo.svg";

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
  },
}: JobListItemProps) => {
  return (
    <div className="flex max-w-[919px] flex-row items-center justify-between border border-gray-200 px-6 py-4">
      <div className="flex flex-row items-start gap-6">
        <Image alt="" src={Stripe} width={50} height={50} />
        <div className="flex  flex-col items-start justify-start gap-1.5">
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500">{companyName}</div>
          <div>
            <Badge variant="secondary">{type}</Badge>
          </div>
        </div>
      </div>
      <div>
        <button className="rounded bg-[#4640DE] px-4 py-1.5 text-white hover:bg-[#4640DE]/80">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobListItem;
