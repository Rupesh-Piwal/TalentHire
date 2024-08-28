import Image from "next/image";
import React from "react";
import Logo from "@/assets/briefcase-footer.svg";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-[60px] bg-[#18191C] px-[20px] md:px-[150px]">
      {/* Mobile View (up to md) */}
      <div className="flex flex-col items-center justify-center py-[30px] md:hidden">
        {/* Logo and Brand Name */}
        <div className="flex flex-row items-center gap-2">
          <Image alt="briefcase" src={Logo} width={40} height={40} />
          <h1 className="text-[24px] text-[#ffffff]">TalentHire</h1>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 flex flex-row items-center gap-4">
          <Link href="https://github.com/Rupesh-Piwal">
            <Github className="text-[#5E6670]" />
          </Link>
          <Link href="https://www.linkedin.com/in/rupesh-piwal21/">
            <Linkedin className="text-[#5E6670]" />
          </Link>
          <Link href="https://twitter.com/rpmarch21">
            <Twitter className="text-[#5E6670]" />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#5E6670] md:hidden"></div>

      {/* Copyright Text */}
      <div className="flex justify-center py-4 text-[14px] text-[#5E6670] md:hidden">
        &copy; {currentYear} TalentHire - Job Portal. All Rights Reserved.
      </div>

      {/* Larger View (md and above) */}
      <div className="hidden flex-row justify-between py-[50px] md:flex">
        {/* Logo and Brand Name */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-2">
            <Image alt="briefcase" src={Logo} width={40} height={40} />
            <h1 className="text-[24px] text-[#ffffff]">TalentHire</h1>
          </div>
          <div className="flex flex-col gap-3 text-[14px] text-[#5E6670]">
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

        {/* Quick Links Section */}
        <div className="flex flex-col gap-2 text-[14px] text-[#5E6670]">
          <h1 className="text-[20px] text-[#ffffff]">Quick Links</h1>
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

        {/* Candidate Section */}
        <div className="flex flex-col gap-2 text-[14px] text-[#5E6670]">
          <h1 className="text-[20px] text-[#ffffff]">Candidate</h1>
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

        {/* Employers Section */}
        <div className="flex flex-col gap-2 text-[14px] text-[#5E6670]">
          <h1 className="text-[20px] text-[#ffffff]">Employers</h1>
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

        {/* Support Section */}
        <div className="flex flex-col gap-2 text-[14px] text-[#5E6670]">
          <h1 className="text-[20px] text-[#ffffff]">Support</h1>
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

      {/* Footer Bottom Bar for Larger Screens */}
      <div className="hidden flex-row items-center justify-between py-6 text-[#5E6670] md:flex">
        <div className="text-[14px]">
          &copy; {currentYear} TalentHire - Job Portal. All Rights Reserved.
        </div>
        <div className="flex flex-row items-center gap-4">
          <Link href="https://github.com/Rupesh-Piwal">
            <Github className="text-[#5E6670]" />
          </Link>
          <Link href="https://www.linkedin.com/in/rupesh-piwal21/">
            <Linkedin className="text-[#5E6670]" />
          </Link>
          <Link href="https://twitter.com/rpmarch21">
            <Twitter className="text-[#5E6670]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
