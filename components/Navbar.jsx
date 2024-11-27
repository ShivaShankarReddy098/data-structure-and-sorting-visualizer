import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-white border-2 rounded-lg text-black py-6 px-6 flex justify-between items-center fixed w-full z-50">
      <Link href="/" className="lg:text-2xl text-lg font-bold">
        <div className="flex gap-1">
          <Image src={logo} alt="logo" width={50} height={50} />
          <p className="pt-1">DSAfoxy</p>
        </div>
      </Link>
      <div className="  lg:flex md:flex">
        <Link href="/Problems" className="mx-4 hover:text-gray-400">
          Problems
        </Link>
        <Link href="/sorting" className="mx-4 hover:text-gray-400">
          Sorting Visualizer
        </Link>
        <Link href="/data-structures" className="mx-4 hover:text-gray-400">
          Data Structures
        </Link>
      </div>
      {/* <div className="lg:hidden md:hidden">
        <button className=" text-gray-800 font-bold">➡️</button>
      </div> */}
    </nav>
  );
};

export default Navbar;
