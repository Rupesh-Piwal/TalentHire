"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Building2, Users, FileText } from "lucide-react";
import BannerImage from "@/assets/portal.png";
import Image from "next/image";
import DotBackground from "./DotBackground";

interface TextGradientProps {
  children: ReactNode;
}

const TextGradient: React.FC<TextGradientProps> = ({ children }) => (
  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
    {children}
  </span>
);

const Banner: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stats = [
    { icon: Briefcase, label: "Live Jobs", count: "100+" },
    { icon: Building2, label: "Companies", count: "50+" },
    { icon: Users, label: "Candidates", count: "500+" },
    { icon: FileText, label: "New Jobs", count: "200+" },
  ];

  return (
    <DotBackground>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
          <motion.div
            variants={itemVariants}
            className="max-w-2xl text-center lg:text-left"
          >
            <motion.h1
              className="text-[32px] font-bold tracking-tight text-[#18191C] md:text-6xl"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text px-2 font-bold text-transparent">
                Find a job
              </span>
              that suits your
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text px-2 font-bold text-transparent">
                skills
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-[#515B6F]"
              variants={itemVariants}
            >
              Find your next career at companies like HubSpot, Nike, <br /> and
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text px-2 font-bold text-transparent">
                Dropbox
              </span>
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-[400px] w-full max-w-lg lg:h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-600 opacity-20 blur-3xl" />
            <Image
              className="px-8 py-4"
              alt="Banner-Image"
              src={BannerImage}
              height={360}
              width={452}
            ></Image>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="group"
            >
              <Card className="relative overflow-hidden bg-white/80 p-6 backdrop-blur-sm transition-all hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-3 text-white group-hover:bg-white group-hover:bg-opacity-20">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 group-hover:text-white">
                      {stat.count}
                    </p>
                    <p className="text-gray-600 group-hover:text-white/90">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </DotBackground>
  );
};

export default Banner;
