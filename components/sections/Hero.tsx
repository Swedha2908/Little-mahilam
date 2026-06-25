"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-b from-sky-100 via-white to-yellow-50">
      
      {/* Colorful Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/40 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 right-12 w-80 h-80 bg-yellow-400/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-10 left-1/2 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Colorful Top Badge */}
          <span className="inline-block py-2 px-6 rounded-full bg-white border-2 border-pink-200 text-pink-500 font-bold text-sm mb-6 shadow-sm">
            ✨ Welcome to Little Mahilam Preschool
          </span>
          
          {/* Vibrant Heading */}
          <h1 className="font-nunito text-5xl md:text-7xl font-extrabold text-gray-800 mb-6 leading-tight">
            Where Little <span className="text-blue-500">Dreams</span> Begin
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
            Nurturing your child's creativity, confidence, and curiosity in a safe, colorful, and warm environment.
          </p>
          
          {/* Fixed & Colorful Buttons */}
          {/* Working Redirect Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#admission"
              className="px-8 py-4 bg-blue-500 text-gray-900 font-extrabold rounded-full shadow-xl hover:bg-blue-600 hover:scale-105 transition-all cursor-pointer inline-block"
            >
              Book Admission
            </Link>
            
            <Link 
              href="#footer"
              className="px-8 py-4 bg-white text-blue-500 border-2 border-blue-500 font-extrabold rounded-full shadow-xl hover:bg-blue-50 hover:scale-105 transition-all cursor-pointer inline-block"
            >
              Schedule a Visit
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Premium Wave Shape Divider */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,192,109.52,238.16,101.46,283.47,78.29,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}