"use client";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { RiMenuFoldFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function NavMobile() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to manage navbar visibility

  // Function to toggle the navbar visibility
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleClick = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div className="xl:hidden">
      {/* Logo always visible */}
      <div className="absolute bg-yellow-700 text-white flex justify-between items-center px-5 py-2 top-0 left-0 right-0 z-50">
        {/* Email with mailto link */}
        <Link
          href="mailto:hello@hi5properties.com"
          className="text-sm font-medium transition-colors duration-300 ease-in-out hover:text-black"
        >
          hello@hi5properties.com
        </Link>

        {/* Phone number with tel link */}
        <Link
          href="tel:+971521211520"
          className="text-sm font-medium transition-colors duration-300 ease-in-out hover:text-black"
        >
          +971 54 562 0057
        </Link>
      </div>
      <Link href={'/'}>
      <div className=" absolute top-10 left-4 z-50 p-2">
        <Image width={130} height={100} src="/logo.svg" alt="logo" />
      </div>
      </Link>

      {/* Button to open the sidebar */}
      <button
        onClick={toggleNavbar}
        className="absolute text-4xl text-center mt-4 top-10 right-4 z-50 p-2 hover:scale-110 text-white transition-all duration-300 ease-in-out rounded-full xl:hidden"
      >
        {isNavbarOpen ? <RiCloseFill /> : <RiMenuFoldFill />}{" "}
        {/* Toggle between '☰' and 'Close' */}
      </button>

      {/* Mobile Navbar */}
      <div
        className={`fixed inset-0 bg-customBg z-40 p-6 shadow-lg flex flex-col items-center transform transition-transform duration-300 ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        <ul className="flex flex-col gap-8 text-lg text-white font-medium mt-32">
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              OVERVIEW
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/amenities"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              AMENITIES
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/payment-plan"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              PAYMENT PLAN
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/floor-plans"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              FLOOR PLANS
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/location"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              LOCATION
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/master-plan"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              MASTER PLAN
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              onClick={handleClick}
              href="/gallery"
              className="hover:text-black transition-colors duration-300 ease-in-out"
            >
              GALLERY
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>

      </div>
    </div>
  );
}
