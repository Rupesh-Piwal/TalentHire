import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="m-auto min-h-full max-w-5xl px-3">
      <div className=" border-2 border-gray-800 py-10 text-center text-[48px] font-semibold">
        <h1 className="font-clash-display text-xl">
          Find your <span>dream job</span>
        </h1>
        <p></p>
      </div>
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
