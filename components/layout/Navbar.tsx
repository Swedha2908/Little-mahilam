"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Playful & Attractive Logo */}
        <Link href="/" className="font-nunito text-3xl font-extrabold tracking-tight">
          <span className="text-blue-500">Little </span>
          <span className="text-pink-500">Mahilam</span>
        </Link>
        
        {/* Colorful Navigation Links */}
        <div className="hidden md:flex gap-8 font-bold text-gray-600">
          <Link href="#about" className="hover:text-pink-500 hover:-translate-y-1 transition-all">About</Link>
          <Link href="#programs" className="hover:text-blue-500 hover:-translate-y-1 transition-all">Programs</Link>
          <Link href="#facilities" className="hover:text-yellow-500 hover:-translate-y-1 transition-all">Facilities</Link>
          <Link href="#admission" className="hover:text-green-500 hover:-translate-y-1 transition-all">Admission</Link>
        </div>

        {/* Working & Visible Contact Redirect Button */}
        <Link 
          href="#footer"
          className="hidden md:block bg-pink-500 text-white px-8 py-3 rounded-full font-extrabold hover:bg-pink-600 hover:scale-105 transition-all shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}