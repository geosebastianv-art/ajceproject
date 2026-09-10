import Achievements from "@/components/sections/Achievements";
import About from "@/components/sections/About";
import Campus from "@/components/sections/Campus";
import Contact from "@/components/sections/Contact";
import Innovation from "@/components/sections/Innovation";
import Navbar from "@/components/layout/Navbar";
import Programs from "@/components/sections/Programs";
import Admissions from "@/components/sections/Admissions";
import Placements from "@/components/sections/Placements";
import StudentLife from "@/components/sections/StudentLife";
import Hero from "@/components/sections/Hero";
import WhyChooseAjce from "@/components/sections/WhyChooseAjce";

export default function HomePage() {
  return (
    <main id="top" className="bg-[#030814]">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseAjce />
      <Programs />
      <Campus />
      <Achievements />
      <StudentLife />
      <Innovation />
      <Placements />
      <Admissions />
      <Contact />
    </main>
  );
}
