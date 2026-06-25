"use client";
import { motion } from "framer-motion";
import { FaHeart, FaEye, FaBullseye } from "react-icons/fa";

export default function AboutUs() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="font-nunito text-4xl font-extrabold text-gray-900 mb-6">
                            The Story of <span className="text-primary">Little Mahilam</span>
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We believe that every child is a unique individual with limitless potential. Our Montessori-inspired approach creates a safe, nurturing, and highly interactive environment where your child can naturally discover the joy of learning.
                        </p>
                        <div className="flex flex-col gap-4 mt-8">
                            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                                <span className="text-3xl text-secondary flex-shrink-0 mt-1">
                                    <FaBullseye />
                                </span>
                                <div>
                                    <h4 className="font-bold text-gray-800">Our Mission</h4>
                                    <p className="text-sm text-gray-600">To foster independence, critical thinking, and a lifelong love for learning through play-based education.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-2xl">
                                <span className="text-3xl text-pink-400 flex-shrink-0 mt-1">
                                    <FaEye />
                                </span>
                                <div>
                                    <h4 className="font-bold text-gray-800">Our Vision</h4>
                                    <p className="text-sm text-gray-600">To be the most trusted early-childhood foundation empowering tomorrow's leaders and innovators.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Image Placeholder */}
                    {/* Real Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="aspect-square rounded-[3rem] rotate-3 overflow-hidden shadow-2xl">
                            <img
                                src="/about-kids.jpg"
                                alt="Happy children at Little Mahilam"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}