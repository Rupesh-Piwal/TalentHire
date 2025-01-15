import prisma from "@/lib/prisma";
import { cn } from "@/lib/utils";
import { JobFilterValues } from "@/lib/validation";
import { Prisma } from "@prisma/client";
import { ArrowLeft, ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import JobListItem from "./JobListItem";

interface JobResultsProps {
  filterValues: JobFilterValues;
  page?: number;
}

export default async function JobResults({
  filterValues,
  page = 1,
}: JobResultsProps) {
  const { q, type, location, remote } = filterValues;

  const jobsPerPage = 6;
  const skip = (page - 1) * jobsPerPage;

  const searchString = q
    ?.split(" ")
    .filter((word) => word.length > 0)
    .join(" & ");

  const searchFilter: Prisma.JobWhereInput = searchString
    ? {
        OR: [
          { title: { search: searchString } },
          { companyName: { search: searchString } },
          { type: { search: searchString } },
          { locationType: { search: searchString } },
          { location: { search: searchString } },
        ],
      }
    : {};

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFilter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true },
    ],
  };

  const jobsPromise = prisma.job.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: jobsPerPage,
    skip,
  });

  const countPromise = prisma.job.count({ where });

  const [jobs, totalResults] = await Promise.all([jobsPromise, countPromise]);

  return (
    <div className="grow space-y-6">
      {jobs.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl bg-white/50 p-8 text-center backdrop-blur-sm">
          <div className="mb-4 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 p-4">
            <Briefcase className="h-8 w-8 text-indigo-600" />
          </div>
          <p className="text-lg font-medium text-gray-600">
            No jobs found. Try adjusting your search filters.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/jobs/${job.slug}`}
                className="transform transition-all duration-300 hover:scale-[1.02]"
              >
                <JobListItem job={job} />
              </Link>
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={Math.ceil(totalResults / jobsPerPage)}
            filterValues={filterValues}
          />
        </>
      )}
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  filterValues: JobFilterValues;
}

function Pagination({
  currentPage,
  totalPages,
  filterValues: { q, type, location, remote },
}: PaginationProps) {
  function generatePageLink(page: number) {
    const searchParams = new URLSearchParams({
      ...(q && { q }),
      ...(type && { type }),
      ...(location && { location }),
      ...(remote && { remote: "true" }),
      page: page.toString(),
    });

    return `/?${searchParams.toString()}`;
  }

  return (
    <div className="flex items-center justify-between rounded-lg bg-white/80 p-4 backdrop-blur-sm">
      <Link
        href={generatePageLink(currentPage - 1)}
        className={cn(
          "flex items-center gap-2 rounded-lg border-2 border-indigo-600 px-4 py-2 font-semibold text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white",
          currentPage <= 1 && "invisible",
        )}
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-1"
        />
        Previous
      </Link>

      <span className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text px-4 py-2 text-lg font-bold text-transparent">
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={generatePageLink(currentPage + 1)}
        className={cn(
          "group flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 font-semibold text-white shadow-lg transition-all hover:from-indigo-700 hover:to-purple-700",
          currentPage >= totalPages && "invisible",
        )}
      >
        Next
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
