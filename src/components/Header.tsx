import Link from "next/link";
import Logo from "@/assets/briefcase 1.svg";
import Image from "next/image";
import PulsatingButton from "./magicui/pulsating-button";

const Header = () => {
  return (
    <div className="w-scren flex h-[78px] items-center justify-between px-[18px] shadow-md  md:px-[150px]">
      <div className="flex items-center gap-4">
        <div className="flex flex-row items-center justify-between md:min-w-[375px]">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="talenthire-logo" width={36} height={36} />
            <div className="text-[14px] font-semibold text-[#18191C] md:text-2xl">
              TalentHire
            </div>
          </Link>
        </div>
      </div>
      <div className=" flex gap-3">
        <PulsatingButton>
          <Link
            href="https://drive.google.com/file/d/1xvJMhNfpH3jzZaXXPClHjaATno0PRefg/view?usp=sharing"
            target="_blank"
          >
            Hire Me
          </Link>
        </PulsatingButton>
        <Link
          href="/jobs/new"
          className="rounded-sm border border-[#0A65CC] px-[4px] py-2 text-center text-[15px] font-semibold text-[#0A65CC] hover:bg-[#0A65CC]/90 md:px-4"
        >
          Post Jobs
        </Link>
      </div>
    </div>
  );
};

export default Header;
