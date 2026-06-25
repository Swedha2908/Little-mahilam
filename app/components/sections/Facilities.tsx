"use client";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaPuzzlePiece, FaTree, FaVideo, FaBus, FaUtensils, FaSnowflake, FaComments } from "react-icons/fa";

const facilities = [
  { name: "Smart Classrooms", icon: <FaChalkboardTeacher />, color: "text-blue-500", bg: "bg-blue-50", hover: "hover:border-blue-300 hover:shadow-blue-100" },
  { name: "Montessori Learning", icon: <FaPuzzlePiece />, color: "text-pink-500", bg: "bg-pink-50", hover: "hover:border-pink-300 hover:shadow-pink-100" },
  { name: "Outdoor Playground", icon: <FaTree />, color: "text-green-500", bg: "bg-green-50", hover: "hover:border-green-300 hover:shadow-green-100" },
  { name: "CCTV Security", icon: <FaVideo />, color: "text-red-500", bg: "bg-red-50", hover: "hover:border-red-300 hover:shadow-red-100" },
  { name: "School Transport", icon: <FaBus />, color: "text-yellow-500", bg: "bg-yellow-50", hover: "hover:border-yellow-300 hover:shadow-yellow-100" },
  { name: "Healthy Meals", icon: <FaUtensils />, color: "text-orange-500", bg: "bg-orange-50", hover: "hover:border-orange-300 hover:shadow-orange-100" },
  { name: "AC Classrooms", icon: <FaSnowflake />, color: "text-cyan-500", bg: "bg-cyan-50", hover: "hover:border-cyan-300 hover:shadow-cyan-100" },
  { name: "Parent Communication", icon: <FaComments />, color: "text-purple-500", bg: "bg-purple-50", hover: "hover:border-purple-300 hover:shadow-purple-100" },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-200 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-nunito text-4xl font-extrabold text-center text-gray-900 mb-16">
          Premium <span className="text-green-500">Facilities</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facilities.map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`flex flex-col items-center justify-center p-8 border-2 border-transparent rounded-[2rem] transition-all duration-300 cursor-pointer ${fac.bg} ${fac.hover} hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Colorful Icon Container */}
              <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm mb-4 ${fac.color} transition-transform group-hover:scale-110`}>
                {fac.icon}
              </div>
              <h4 className="font-bold text-gray-800 text-center text-sm md:text-base">{fac.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}