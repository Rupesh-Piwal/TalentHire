import Image from "next/image";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Select from "./ui/select";

const filterJobs = async (formData: FormData) => {
  "use server";
};

const JobFilter = () => {
  return (
    <div className="top-0 ml-4 mt-3 h-fit rounded border bg-background p-4 md:w-[260px] lg:sticky">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input id="q" name="q" placeholder="Title, company, etc." />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Type</Label>
            <Select id="type" name="type"></Select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobFilter;
