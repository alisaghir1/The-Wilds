"use client";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {


  return (
    <nav className="w-[90%] mx-20 hidden absolute xl:flex items-center justify-between py-8 border-b border-black z-50">
      {/* Logo */}
      <Link href={"/"} className="text-xl">
        <Image width={150} height={100} src="/logo.svg" alt="logo" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {/* Left Section */}
        <ul className="flex items-center gap-6 text-sm font-medium text-black">
          <li className="relative group">
            <Link
              href="/"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              OVERVIEW
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/amenities"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              AMENITIES
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/payment-plan"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              PAYMENT PLAN
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/floor-plans"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              FLOOR PLANS
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/location"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              LOCATION
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/master-plan"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              MASTER PLAN
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="/gallery"
              className="hover:text-black transition-all duration-200 ease-in-out"
            >
              GALLERY
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-amber-900">
        {/* Email */}
        <Link
          href="mailto:hello@capitalassociation.com"
          className="relative text-sm font-medium hover:text-black transition-all duration-200 ease-in-out group"
        >
          hello@capitalassociation.com
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        {/* Phone Number */}
        <Link
          href="tel:+971521211520"
          className="relative text-sm font-medium hover:text-black transition-all duration-200 ease-in-out group"
        >
          +971 52 121 1520
        </Link>

      </div>
    </nav>
  );
}
