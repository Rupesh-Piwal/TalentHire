import Link from "next/link";
import Logo from "@/assets/talenthire-logo.svg";
import Image from "next/image";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="w-scren flex h-[78px] items-center justify-between px-[20px] shadow-md  md:px-[100px]">
      <div className="flex items-center gap-8">
        <div className="flex min-w-[375px] flex-row items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="talenthire-logo" width={36} height={36} />
            <div className="text-2xl font-semibold">TalentHire</div>
          </Link>
          <Menu size={20} className="md:hidden" />
        </div>

        <div className="hidden gap-4 md:flex">
          <Link className="hover:text-[#4640DE]" href="/jobs">
            Find Jobs
          </Link>
          <Link href="/companies">Browse Companies</Link>
        </div>
      </div>
      <div className="hidden gap-4 md:flex">
        <button className="rounded bg-gray-100 px-4 py-2 font-semibold text-[#4640DE] shadow-sm hover:bg-gray-200">
          Login
        </button>
        <button className="rounded bg-[#4640DE] px-4 py-2 font-semibold text-white hover:bg-[#4640DE]/90">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
