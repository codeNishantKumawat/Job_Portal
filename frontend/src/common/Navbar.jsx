import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  // Function to handle scroll and set background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true); // Change background after 100px scroll
      } else {
        setScroll(false); // Transparent background
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-10 p-4 transition-all duration-300  ${
        scroll ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">JobWorld</div>

        {/* Hamburger Menu (for Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
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
            ) : (
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
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen
              ? "block absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:relative md:flex md:bg-transparent"
              : "hidden md:flex"
          } space-y-4 md:space-y-0 md:space-x-6 md:flex-row items-center`}
        >
          <li className="text-center">
            <a
              href="#home"
              className="text-blue-500 font-medium hover:text-blue-700"
            >
              Home
            </a>
          </li>
          <li className="text-center">
            <a
              href="#about"
              className="text-black font-medium hover:text-gray-500"
            >
              About
            </a>
          </li>
          <li className="text-center">
            <a
              href="#blog"
              className="text-black font-medium hover:text-gray-500"
            >
              Blog
            </a>
          </li>
          <li className="text-center">
            <a
              href="#contact"
              className="text-black font-medium hover:text-gray-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div
          className={`${
            isOpen ? "block text-center" : "hidden md:flex"
          } md:space-x-4`}
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Post a Job
          </button>
          <button className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800">
            Want a Job
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
