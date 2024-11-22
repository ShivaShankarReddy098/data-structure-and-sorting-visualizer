import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-6 px-6 flex justify-between items-center fixed w-full">
      <h1 className="text-2xl font-bold">My Visualizer</h1>
      <div>
        <Link href="/sorting" className="mx-4 hover:text-gray-400">
          Sorting Visualizer
        </Link>
        <Link href="/data-structures" className="mx-4 hover:text-gray-400">
          Data Structures
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;