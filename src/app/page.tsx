import Banner from "@/components/Banner";
import JobFilter from "@/components/JobFilter";
import JobListItem from "@/components/JobListItem";
import JobResults from "@/components/JobResults";

export default async function Home() {
  return (
    <main className="min-h-full w-full">
      <Banner />
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilter />
        <JobResults />
      </section>
    </main>
  );
}
