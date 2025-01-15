"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  X,
  ImageIcon,
  Briefcase,
  MapPin,
  DollarSign,
  Send,
} from "lucide-react";
import LoadingButton from "@/components/LoadingButton";
import LocationInput from "@/components/LocationInput";
import RichTextEditor from "@/components/RichTextEditor";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Select from "@/components/ui/select";
import { jobTypes, locationTypes } from "@/lib/job-types";
import { CreateJobValues, createJobSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { draftToMarkdown } from "markdown-draft-js";
import { useForm } from "react-hook-form";
import { createJobPosting } from "./actions";
import DotBackground from "@/components/DotBackground";

interface FormSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  icon: ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
  icon,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-4 rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur-sm"
  >
    <div className="flex items-center space-x-3">
      <div className="rounded-full bg-indigo-100 p-2 text-indigo-600">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
        <p className="text-sm text-indigo-600">{description}</p>
      </div>
    </div>
    <div className="space-y-4">{children}</div>
  </motion.div>
);

export default function NewJobForm() {
  const form = useForm<CreateJobValues>({
    resolver: zodResolver(createJobSchema),
  });

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: CreateJobValues) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await createJobPosting(formData);
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <DotBackground>
      <div className="min-h-screen w-screen bg-gradient-to-br from-indigo-100/30 via-purple-100/10 to-pink-100/30  px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mx-auto w-full max-w-4xl space-y-8"
        >
          <div className="text-center">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent"
            >
              Post a New Job
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-gray-600"
            >
              Get your job posting seen by thousands of job seekers
            </motion.p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white/50 p-2 shadow-xl backdrop-blur-lg md:w-[900px] md:p-8">
            <Form {...form}>
              <form
                className="space-y-8"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <FormSection
                  title="Job Details"
                  description="Essential information about the position"
                  icon={<Briefcase className="h-6 w-6" />}
                >
                  <FormField
                    control={control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-700">
                          Job Title
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Frontend Developer"
                            {...field}
                            className="border-indigo-200 bg-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:ring-purple-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-700">
                          Job Type
                        </FormLabel>
                        <FormControl>
                          <Select
                            {...field}
                            defaultValue=""
                            className="border-indigo-200 bg-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:ring-purple-500"
                          >
                            <option value="" hidden>
                              Select an option
                            </option>
                            {jobTypes.map((jobType) => (
                              <option key={jobType} value={jobType}>
                                {jobType}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FormSection>

                <FormSection
                  title="Company Information"
                  description="Tell us about your organization"
                  icon={<ImageIcon className="h-6 w-6" />}
                >
                  <FormField
                    control={control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-700">
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-indigo-200 bg-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:ring-purple-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="companyLogo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-indigo-700">
                          Company Logo
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="file"
                              accept="image/*"
                              {...field}
                              value={undefined}
                              className="absolute inset-0 z-50 h-full w-full cursor-pointer opacity-0"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                field.onChange(file);
                              }}
                            />
                            <div className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 transition-all duration-300 hover:from-indigo-100 hover:to-purple-100">
                              <ImageIcon className="mb-2 h-12 w-12 text-indigo-500" />
                              <p className="mb-2 text-sm text-indigo-700">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-indigo-600">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </p>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-rose-500" />
                      </FormItem>
                    )}
                  />
                </FormSection>

                <FormSection
                  title="Location"
                  description="Where the job is based"
                  icon={<MapPin className="h-6 w-6" />}
                >
                  <FormField
                    control={control}
                    name="locationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-700">
                          Location Type
                        </FormLabel>
                        <FormControl>
                          <Select
                            {...field}
                            defaultValue=""
                            onChange={(e) => {
                              field.onChange(e);
                              if (e.currentTarget.value === "Remote") {
                                trigger("location");
                              }
                            }}
                            className="border-indigo-200 bg-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:ring-purple-500"
                          >
                            <option value="" hidden>
                              Select an option
                            </option>
                            {locationTypes.map((locationType) => (
                              <option key={locationType} value={locationType}>
                                {locationType}
                              </option>
                            ))}
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-700">
                          Office Location
                        </FormLabel>
                        <FormControl>
                          <LocationInput
                            onLocationSelected={field.onChange}
                            ref={field.ref}
                            className="border-indigo-200 bg-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:ring-purple-500"
                          />
                        </FormControl>
                        {watch("location") && (
                          <div className="mt-2 flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-600">
                              {watch("location")}
                              <button
                                type="button"
                                onClick={() =>
                                  setValue("location", "", {
                                    shouldValidate: true,
                                  })
                                }
                                className="ml-1 rounded-full p-1 hover:bg-purple-200"
                              >
                                <X size={14} />
                              </button>
                            </span>
                          </div>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FormSection>

                <FormSection
                  title="Application Details"
                  description="How candidates can apply"
                  icon={<Send className="h-6 w-6" />}
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="applicationEmail"
                      className="text-indigo-700"
                    >
                      How to apply
                    </Label>
                    <div className="flex gap-4">
                      <FormField
                        control={control}
                        name="applicationEmail"
                        render={({ field }) => (
                          <FormItem className="grow">
                            <FormControl>
                              <div className="flex items-center gap-4">
                                <Input
                                  id="applicationEmail"
                                  placeholder="Email"
                                  type="email"
                                  {...field}
                                  className="border-indigo-200 bg-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:ring-purple-500"
                                />
                                <span className="text-indigo-500">or</span>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={control}
                        name="applicationUrl"
                        render={({ field }) => (
                          <FormItem className="grow">
                            <FormControl>
                              <Input
                                placeholder="Website"
                                type="url"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  trigger("applicationEmail");
                                }}
                                className="border-indigo-200 bg-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:ring-purple-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </FormSection>

                <FormSection
                  title="Job Description"
                  description="Detailed information about the role"
                  icon={<Briefcase className="h-6 w-6" />}
                >
                  <FormField
                    control={control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <Label
                          onClick={() => setFocus("description")}
                          className="text-indigo-700"
                        >
                          Description
                        </Label>
                        <FormControl>
                          <div className="min-h-[200px] rounded-lg border-indigo-200 bg-white/50 backdrop-blur-sm transition-all focus-within:border-purple-500 focus-within:ring-purple-500">
                            <RichTextEditor
                              placeholder="Write down about your company here. Let the candidate know who we are..."
                              onChange={(draft) =>
                                field.onChange(draftToMarkdown(draft))
                              }
                              ref={field.ref}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FormSection>

                <FormSection
                  title="Compensation"
                  description="Salary information"
                  icon={<DollarSign className="h-6 w-6" />}
                >
                  <FormField
                    control={control}
                    name="salary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-indigo-700">
                          Salary
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="number"
                            className="border-indigo-200 bg-white/50 backdrop-blur-sm transition-all focus:border-purple-500 focus:ring-purple-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FormSection>

                <div className="flex justify-center">
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-white shadow-lg transition-all hover:shadow-purple-500/25"
                  >
                    Submit
                  </LoadingButton>
                </div>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </DotBackground>
  );
}
