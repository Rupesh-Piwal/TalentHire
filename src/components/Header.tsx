"use client";
import Link from "next/link";
import Logo from "@/assets/briefcase 1.svg";
import Image from "next/image";
import PulsatingButton from "./magicui/pulsating-button";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-[150px]">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg transition-all group-hover:shadow-indigo-500/25">
              <Image
                src={Logo}
                alt="talenthire-logo"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </div>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-[19px] font-bold text-transparent md:text-2xl">
              TalentHire
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="flex gap-3">
            <PulsatingButton>
              <Link
                href="https://drive.google.com/file/d/196oEqzqVt_zX5Wj4nyYTqSDRBeAvAFKS/view?usp=sharing"
                target="_blank"
              >
                Hire Me
              </Link>
            </PulsatingButton>

            <Link
              href="/jobs/new"
              className=" rounded-sm border border-indigo-600 bg-transparent from-indigo-500 to-purple-500 px-2 py-2 text-[12px] font-semibold text-indigo-600 transition-all hover:bg-gradient-to-r hover:text-white md:text-[15px]"
            >
              Post Jobs
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
