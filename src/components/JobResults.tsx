import React from "react";
import JobListItem from "./JobListItem";
import prisma from "@/lib/prisma";

const JobResults = async () => {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="grow space-y-4">
      {jobs.map((job) => (
        <JobListItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobResults;
