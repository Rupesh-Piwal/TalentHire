import Image from "next/image";
import React from "react";
import Logo from "@/assets/briefcase-footer.svg";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-[60px] bg-indigo-600 px-[20px] md:px-[150px]">
      <div className="flex flex-col items-center justify-center py-[30px] md:hidden">
        <div className="flex flex-row items-center gap-2">
          <Image alt="briefcase" src={Logo} width={40} height={40} />
          <h1 className="text-[24px] text-[#ffffff]">TalentHire</h1>
        </div>

        <div className="mt-4 flex flex-row items-center gap-4">
          <Link href="https://github.com/Rupesh-Piwal">
            <Github className="text-[#ffffff]" />
          </Link>
          <Link href="https://www.linkedin.com/in/rupesh-piwal21/">
            <Linkedin className="text-[#ffffff]" />
          </Link>
          <Link href="https://twitter.com/rpmarch21">
            <Twitter className="text-[#ffffff]" />
          </Link>
        </div>
      </div>

      <div className="border-t border-[#ffffff] md:hidden"></div>

      <div className="flex justify-center py-4 text-[14px] text-[#ffffff] md:hidden">
        &copy; {currentYear} TalentHire - Job Portal. All Rights Reserved.
      </div>

      <div className="hidden flex-row justify-between py-[50px] md:flex">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-2">
            <Image alt="briefcase" src={Logo} width={40} height={40} />
            <h1 className="text-[24px] text-[#ffffff]">TalentHire</h1>
          </div>
          <div className="flex flex-col gap-3 text-[14px] text-[#ffffff]">
            <p>
              Call now: <span className="text-[#ffffff]">(319) 555-0115</span>
            </p>
            <p>
              6391 Elgin St. Celina, Delaware 10299,
              <br />
              New York, United States of America
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-[14px] text-[#ffffff]">
          <h1 className="text-[20px]">Quick Links</h1>
          <Link className="hover:text-[#0A65CC]" href="#">
            About
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Contact
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Pricing
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Blog
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-[14px] text-[#ffffff]">
          <h1 className="text-[20px]">Candidate</h1>
          <Link className="hover:text-[#0A65CC]" href="#">
            Browse Jobs
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Browse Employers
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Candidate Dashboard
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Saved Jobs
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-[14px] text-[#ffffff]">
          <h1 className="text-[20px]">Employers</h1>
          <Link className="hover:text-[#0A65CC]" href="#">
            Post a Job
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Browse Candidates
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Employers Dashboard
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Applications
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-[14px] text-[#ffffff]">
          <h1 className="text-[20px]">Support</h1>
          <Link className="hover:text-[#0A65CC]" href="#">
            Faqs
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:text-[#0A65CC]" href="#">
            Terms & Conditions
          </Link>
        </div>
      </div>

      <div className="hidden flex-row items-center justify-between py-6 text-[#ffffff] md:flex">
        <div className="text-[14px]">
          &copy; {currentYear} TalentHire - Job Portal. All Rights Reserved.
        </div>
        <div className="flex flex-row items-center gap-4">
          <Link href="https://github.com/Rupesh-Piwal">
            <Github className="text-[#ffffff]" />
          </Link>
          <Link href="https://www.linkedin.com/in/rupesh-piwal21/">
            <Linkedin className="text-[#ffffff]" />
          </Link>
          <Link href="https://twitter.com/rpmarch21">
            <Twitter className="text-[#ffffff]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
