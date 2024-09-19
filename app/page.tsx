import CTA from "./components/CTA";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ValueProposition from "./components/ValueProposition";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Destination />
      <WhyChooseUs />
      <ValueProposition />
      <HowItWorks />
      <CTA />
    </>
  );
}
