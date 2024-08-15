import { Job } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./ui/badge";

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
    <div className="max-w-[919px] border border-gray-200 py-4">
      <div>{companyLogoUrl}</div>
      <div className="flex flex-col  justify-start gap-2 pl-10">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{companyName}</div>
        <div>
          <Badge variant="secondary">{type}</Badge>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default JobListItem;
