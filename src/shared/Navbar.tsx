"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/80 dark:bg-black/50 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Left */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-extrabold text-violet-600 dark:text-violet-400 tracking-wide"
            >
              Refabry
            </Link>
          </div>

          {/* Nav Links Middle */}
          <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${
                  item.toLowerCase() === "home" ? "" : item.toLowerCase()
                }`}
                className="relative text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-violet-600 dark:hover:text-violet-400"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side: Theme Toggle + Sign In */}
          <div className="flex items-center space-x-3">
            <ModeToggle />
            <Link href="/signin">
              <button className="px-4 py-1.5 bg-violet-600 hover:bg-violet-700 transition rounded-md text-white text-sm shadow-md">
                Sign In
              </button>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 dark:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-4 space-y-3 shadow-md">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className="block text-gray-800 dark:text-gray-200 font-medium hover:text-violet-600 dark:hover:text-violet-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
