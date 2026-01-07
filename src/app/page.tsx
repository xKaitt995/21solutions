import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import FoundersTeam from "@/components/FoundersTeam";
import ServicePackages from "@/components/ServicePackages";
import RoadmapWidget from "@/components/RoadmapWidget";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-accent-cyber selection:text-black">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <FoundersTeam />
      <ServicePackages />
      <RoadmapWidget />
      <ContactFooter />
    </main>
  );
}
