import Link from "next/link";
import { BiBell } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="h-16 w-full bg-transparant flex items-center justify-between px-4">
      <div>
        <h1 className="text-xl font-bold text-primary">KerjaYuk!</h1>
      </div>
      <button>
        <Link href={"/notification"} className="relative"><div className="w-1.5 h-1.5 outline-2 outline-white rounded-full bg-red-500 absolute top-1 right-1 "></div><BiBell fontSize={24} /></Link>
      </button>
    </nav>
  );
};

export default Navbar;
