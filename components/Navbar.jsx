import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white text-black py-6 px-6 flex justify-between items-center fixed w-full z-50">
      <Link href="/" className="text-2xl font-bold">
        My Visualizer
      </Link>
      <div>
        <Link href="/Problems" className="mx-4 hover:text-gray-400">
          Problems
        </Link>
        <Link href="/sorting" className="mx-4 hover:text-gray-400">
          Sorting Visualizer
        </Link>
        <Link href="/data-structures" className="mx-4 hover:text-gray-400">
          Data Structures
        </Link>
        <Link href="/Practice" className="mx-4 hover:text-gray-400">
          Practice
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
