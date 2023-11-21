"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background text-Charcoal p-4 shadow-md shadow-black/40 rounded-b-md z-[999] sticky top-0">
      <div className="container mx-auto flex justify-around items-center text-sm">
        <Link
          href={"/"}
          className="font-bold text-3xl tracking-wider hover:text-gray-900/70 drop-shadow-md shadow-red-700"
        >
          <h1>Yadutsav</h1>
        </Link>

        <div className="hidden md:flex space-x-4 font-semibold items-center gap-3">
          <Link href={"/"} className="hover:text-gray-900/60">
            Home
          </Link>
          <Link href={"Services"} className="hover:text-gray-900/60">
            Services
          </Link>
          <Link
            href={"Contact"}
            className="hover:text-gray-900/60 px-1 py-1 border-secondary border-2 w-fit capitalize rounded-md"
          >
            let's connect
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-text">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-backgrounds shadow-black/10 shadow-md my-2 mx-4 p-4 font-semibold text-sm rounded-xl tracking-wider flex-col flex gap-2">
          <Link href={"/"} className=" block">
            Home
          </Link>
          <Link href={"Services"} className="block">
            Services
          </Link>
          <Link
            href={"Contact"}
            className="block px-1 py-1 border-secondary border-2 w-fit capitalize rounded-md"
          >
            let's connect
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
