import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Select from "./ui/select";
import prisma from "@/lib/prisma";
import { jobTypes } from "@/lib/job-types";
import { Button } from "./ui/button";
import { jobFilterSchema, jobFilterValues } from "@/lib/validation";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";

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
  defaultValues: jobFilterValues;
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
    <div className="top-0 ml-4 mt-3 h-fit rounded border bg-background p-4 md:w-[260px] lg:sticky">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input
              id="q"
              name="q"
              placeholder="Title, company, etc."
              defaultValue={defaultValues.q}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Type</Label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.type || ""}
            >
              <option value="">All Types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Location</Label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.location || ""}
            >
              <option value="">All locations</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-2 ">
            <input
              className="scale-125 cursor-pointer accent-[#4640DE]"
              type="checkbox"
              id="remote"
              name="remote"
              defaultChecked={defaultValues.remote}
            />
            <label htmlFor="remote">Remote jobs</label>
          </div>
          <FormSubmitButton className="w-full bg-[#4640DE] hover:bg-[#4640DE]/90">
            Filter jobs
          </FormSubmitButton>
        </div>
      </form>
    </div>
  );
};

export default JobFilter;
