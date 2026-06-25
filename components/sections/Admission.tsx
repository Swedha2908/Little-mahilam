"use client";
import { motion } from "framer-motion";
import { FaBuilding, FaChalkboardTeacher, FaFileSignature, FaUserCheck } from "react-icons/fa";

const steps = [
  { icon: <FaBuilding />, title: "Visit Campus", desc: "Take a tour and feel the warmth of our environment." },
  { icon: <FaChalkboardTeacher />, title: "Meet Teachers", desc: "Discuss your child's unique needs with our experts." },
  { icon: <FaFileSignature />, title: "Apply", desc: "Fill out our simple application form." },
  { icon: <FaUserCheck />, title: "Enroll", desc: "Welcome to the Little Mahilam family!" }
];

export default function Admission() {
  return (
    <section id="admission" className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <h2 className="font-nunito text-4xl font-extrabold text-center text-gray-900 mb-16">
          Simple <span className="text-accent">Admission</span> Process
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start relative gap-8 md:gap-4">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-6 rounded-3xl shadow-xl flex-1 text-center relative z-10 w-full"
            >
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4 border-4 border-white shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}