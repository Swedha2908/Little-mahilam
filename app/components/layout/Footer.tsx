import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
     <footer id="footer" className="bg-gray-900 text-gray-300 pt-20 pb-10 rounded-t-[3rem] mt-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div>
                        <h3 className="font-nunito text-3xl font-extrabold text-white mb-6">
                            Little <span className="text-primary">Mahilam</span>
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                            Providing a nurturing, safe, and highly creative environment where your child's early dreams take flight.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><FaFacebookF /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"><FaInstagram /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"><FaYoutube /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#programs" className="hover:text-primary transition-colors">Our Programs</Link></li>
                            <li><Link href="#admission" className="hover:text-primary transition-colors">Admission Process</Link></li>
                            <li><Link href="#faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-white font-bold text-xl mb-6">Programs</h4>
                        <ul className="space-y-3 text-sm">
                            <li>Play Group</li>
                            <li>Montessori Nursery</li>
                            <li>Junior KG & Senior KG</li>
                            <li>After School Day Care</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-xl mb-6">Contact Us</h4>

                        {/* --- PASTE THE NEW CODE RIGHT HERE --- */}
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 flex-shrink-0">
                                    <FaMapMarkerAlt />
                                </span>
                                <span>Kangeyam Road,Valliammai nagar,Tiruppur,Tamilnadu 641604</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary flex-shrink-0">
                                    <FaPhoneAlt />
                                </span>
                                <span>+91 9500489592</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary flex-shrink-0">
                                    <FaEnvelope />
                                </span>
                                <span>littlemahilampreschool@gmail.com</span>
                            </li>
                        </ul>
                        {/* ------------------------------------- */}

                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} Little Mahilam Preschool. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}