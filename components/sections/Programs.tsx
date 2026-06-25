"use client";
import { motion } from "framer-motion";
import { FaBaby, FaShapes, FaChild, FaBookReader, FaBed } from "react-icons/fa";

const programs = [
    { title: "Play Group", age: "1.5–2.5 Years", icon: <FaBaby />, color: "text-pink-500 bg-pink-100", outcomes: "Sensory play, social interaction" },
    { title: "Nursery", age: "2.5–3.5 Years", icon: <FaShapes />, color: "text-blue-500 bg-blue-100", outcomes: "Language, pre-math concepts" },
    { title: "Junior KG", age: "3.5–4.5 Years", icon: <FaChild />, color: "text-green-500 bg-green-100", outcomes: "Phonics, writing readiness" },
    { title: "Senior KG", age: "4.5–5.5 Years", icon: <FaBookReader />, color: "text-yellow-500 bg-yellow-100", outcomes: "Reading, school readiness" },
    { title: "Day Care", age: "6 Mo – 8 Years", icon: <FaBed />, color: "text-purple-500 bg-purple-100", outcomes: "Safe nurturing environment" },
];

export default function Programs() {
    return (
        <section id="programs" className="py-24 relative z-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-nunito text-4xl font-extrabold text-gray-900 mb-4">
                        Our <span className="text-secondary">Programs</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Age-appropriate curriculums to foster holistic development.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {programs.map((prog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            // Add a max-width to ensure they don't stretch too wide on desktop
                            className="glass-panel p-8 rounded-3xl w-full sm:w-[45%] lg:w-[30%] max-w-sm"
                        >
                            <div>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${prog.color}`}>
                                    {prog.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{prog.title}</h3>
                                <p className="text-accent font-semibold text-sm mb-4">{prog.age}</p>
                                <p className="text-gray-600 text-sm">{prog.outcomes}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}