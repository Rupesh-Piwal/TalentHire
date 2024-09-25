import Link from "next/link";
import Logo from "@/assets/briefcase 1.svg";
import Image from "next/image";
import PulsatingButton from "./magicui/pulsating-button";

const Header = () => {
  return (
    <div className="w-scren flex h-[78px] items-center justify-between px-[20px] shadow-md  md:px-[150px]">
      <div className="flex items-center gap-8">
        <div className="flex flex-row items-center justify-between md:min-w-[375px]">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="talenthire-logo" width={36} height={36} />
            <div className="text-xl font-semibold text-[#18191C] md:text-2xl">
              TalentHire
            </div>
          </Link>
        </div>
      </div>
      <div className=" flex gap-4">
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
          className="rounded border border-[#0A65CC] px-4 py-2 font-semibold text-[#0A65CC] hover:bg-[#0A65CC]/90"
        >
          Post Jobs
        </Link>
      </div>
    </div>
  );
};

export default Header;
