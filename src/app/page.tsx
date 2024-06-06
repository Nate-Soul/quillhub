import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "@/components/sections/Stats";
import JoinCommunityCTA from "@/components/sections/JoinCommunityCTA";

export default function Home() {
  return (
    <>
    <Hero/>
    <HowItWorks/>
    <AboutSection/>
    <WhyChooseUs/>
    <Stats/>
    <JoinCommunityCTA/>
    </>
  );
}