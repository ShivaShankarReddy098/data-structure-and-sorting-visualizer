"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-2 rounded-lg text-black py-4 px-6 flex justify-between items-center fixed w-full z-50 shadow-md">
      {/* Logo */}
      <Link href="/" className="lg:text-2xl text-lg font-bold">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="logo" width={50} height={50} />
          <p className="pt-1">DSAfoxy</p>
        </div>
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden md:hidden block text-gray-600 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div className="hidden lg:flex md:flex gap-6">
        <Link href="/Problems" className="hover:text-gray-500">
          Problems
        </Link>
        <Link href="/sorting" className="hover:text-gray-500">
          Sorting Visualizer
        </Link>
        <Link href="/data-structures" className="hover:text-gray-500">
          Data Structures
        </Link>
      </div>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 right-0 w-64 bg-white h-full z-50 shadow-md p-6">
            <button
              className="text-gray-600 mb-6 focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              href="/Problems"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
              onClick={toggleSidebar}
            >
              Problems
            </Link>
            <Link
              href="/sorting"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
              onClick={toggleSidebar}
            >
              Sorting Visualizer
            </Link>
            <Link
              href="/data-structures"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
              onClick={toggleSidebar}
            >
              Data Structures
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
