import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
// import HowItWorks from "@/components/sections/HowItWorks";
import AboutSection2 from "@/components/sections/AboutSection2";
// import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import JoinCommunityCTA from "@/components/sections/JoinCommunityCTA";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import HowItWorks2 from "@/components/sections/HowItWorks2";

export default function Home() {
  return (
    <>
    <Hero/>
    <WhyChooseUs/>
    {/* <HowItWorks/> */}
    <AboutSection2/>
    <Clients/>
    <HowItWorks2/>
    {/* <Stats/> */}
    <JoinCommunityCTA/>
    <Testimonials/>
    <FAQ/>
    </>
  );
}