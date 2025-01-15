import JobPage from "@/components/JobPage";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

const getJob = cache(async (slug: string) => {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return job;
});

export async function generateStaticParams() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    select: { slug: true },
  });

  return jobs.map(({ slug }) => slug);
}

export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  const job = await getJob(slug);

  return {
    title: `${job.title} at ${job.companyName}`,
    description: `Apply for the ${job.title} position at ${job.companyName}. ${job.type} job in ${job.location}.`,
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const job = await getJob(slug);

  const { applicationEmail, applicationUrl } = job;

  const applicationLink = applicationEmail
    ? `mailto:${applicationEmail}`
    : applicationUrl;

  if (!applicationLink) {
    console.error("Job has no application link or email");
    notFound();
  }

  return (
    <div className="min-h-screen ">
      <main className="m-auto my-10 flex max-w-7xl flex-col items-center gap-8 px-4 md:flex-row md:items-start">
        <div className="w-full md:w-2/3">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h1 className="mb-4 text-3xl font-bold text-indigo-700">
              {job.title}
            </h1>
            <div className="mb-6 flex flex-wrap gap-4 text-sm text-indigo-600">
              <div className="flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                {job.type}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Posted on {new Date(job.createdAt).toLocaleDateString()}
              </div>
            </div>
            <JobPage job={job} />
          </div>
        </div>
        <aside className="w-full md:w-1/3">
          <div className="sticky top-8 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-indigo-700">
              Apply for this position
            </h2>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              <a
                href={applicationLink}
                className="flex items-center justify-center"
              >
                Apply now
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <div className="mt-4 text-center text-sm text-gray-600">
              This will take you to the application process
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
