import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Select from "./ui/select";
import prisma from "@/lib/prisma";
import { jobTypes } from "@/lib/job-types";
import { Button } from "./ui/button";
import { jobFilterSchema, JobFilterValues } from "@/lib/validation";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";
import { Search, MapPin, Briefcase, Building } from "lucide-react";

const filterJobs = async (formData: FormData) => {
  "use server";
  const values = Object.fromEntries(formData.entries());
  const { q, type, location, remote } = jobFilterSchema.parse(values);
  const searchParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });
  redirect(`/?${searchParams.toString()}`);
};

interface JobFilterProps {
  defaultValues: JobFilterValues;
}

const JobFilter = async ({ defaultValues }: JobFilterProps) => {
  const distinctLocations = (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean),
    )) as string[];

  return (
    <div className="top-0 ml-4 mt-3 h-fit rounded-xl border bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl md:w-[260px] lg:sticky">
      <form action={filterJobs}>
        <div className="space-y-5">
          <div className="space-y-2.5">
            <Label htmlFor="q" className="text-sm font-medium text-gray-700">
              Search Jobs
            </Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-400" />
              <Input
                id="q"
                name="q"
                placeholder="Title, company, etc."
                defaultValue={defaultValues.q}
                className="border-indigo-100 pl-10 text-sm transition-colors placeholder:text-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-2.5">
            <Label htmlFor="type" className="text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-indigo-500" />
                Job Type
              </div>
            </Label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.type || ""}
              className="border-indigo-100 text-sm transition-colors focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">All Types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>

          <div className="space-y-2.5">
            <Label
              htmlFor="location"
              className="text-sm font-medium text-gray-700"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indigo-500" />
                Location
              </div>
            </Label>
            <Select
              id="location"
              name="location"
              defaultValue={defaultValues.location || ""}
              className="border-indigo-100 text-sm transition-colors focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">All locations</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id="remote"
                name="remote"
                defaultChecked={defaultValues.remote}
                className="h-4 w-4 cursor-pointer rounded border-indigo-300 text-purple-500 transition-colors focus:ring-purple-500"
              />
              <Building className="ml-2 h-4 w-4 text-indigo-500" />
            </div>
            <Label
              htmlFor="remote"
              className="cursor-pointer text-sm font-medium text-gray-700"
            >
              Remote jobs
            </Label>
          </div>

          <FormSubmitButton className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Filter jobs
          </FormSubmitButton>
        </div>
      </form>
    </div>
  );
};

export default JobFilter;
