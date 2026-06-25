"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  { q: "What is the teacher-to-student ratio?", a: "We maintain a strict 1:10 ratio to ensure every child gets the individual attention they deserve." },
  { q: "Do you provide meals?", a: "Yes! We provide healthy, nutritious, and child-friendly meals and snacks prepared daily in our hygienic kitchen." },
  { q: "Is there CCTV access for parents?", a: "Yes, we ensure 100% transparency. Parents have secure app access to view our common play areas and classrooms." },
  { q: "What are the timing for Day Care?", a: "Our extended day care runs from 8:30 AM to 6:30 PM, Monday to Friday." },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-bg" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-nunito text-4xl font-extrabold text-center text-gray-900 mb-12">
          Frequently Asked <span className="text-secondary">Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={false}
              className="border-2 border-white rounded-[2rem] overflow-hidden shadow-sm bg-white"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-full flex justify-between items-center p-6 transition-all duration-300 text-left font-bold text-gray-800 cursor-pointer ${
                  activeIndex === index ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
              >
                {faq.q}
                <span className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-primary" : "text-gray-400"}`}>
                  <FaChevronDown />
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-blue-50/50"
                  >
                    <div className="p-6 text-gray-600 border-t border-blue-100 italic">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}