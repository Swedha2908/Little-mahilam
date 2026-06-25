import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import Programs from "../components/sections/Programs";
import Facilities from "../components/sections/Facilities";
import Admission from "../components/sections/Admission";
import FAQ from "../components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <AboutUs />
        <Programs />
        <Facilities />
        <Admission />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}