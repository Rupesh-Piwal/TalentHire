import Banner from "@/components/Banner";
import JobFilter from "@/components/JobFilter";
import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="min-h-full w-full">
      <Banner />
      <section>
        <JobFilter />
        <div>
          {jobs.map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </div>
      </section>
    </main>
  );
}
