import Banner from "@/components/Banner";
import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="m-auto min-h-full w-[100%] px-3">
      <Banner />
      <section>
        <div>
          {jobs.map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </div>
      </section>
    </main>
  );
}
