import Banner from "@/components/Banner";
import JobFilter from "@/components/JobFilter";
import JobListItem from "@/components/JobListItem";
import JobResults from "@/components/JobResults";
import { jobFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  };
}

export default async function Home({
  searchParams: { q, type, location, remote },
}: PageProps) {
  const filterValues: jobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };
  return (
    <main className="min-h-full w-full">
      <Banner />
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilter defaultValues={filterValues} />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
}
