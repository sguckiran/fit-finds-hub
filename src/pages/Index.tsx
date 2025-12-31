import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import FitnessTips from "@/components/FitnessTips";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import TopLeftAvatar from "@/components/TopLeftAvatar";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AS Protein | Fitness-Tipps & Empfohlene Nahrungsergänzungsmittel</title>
        <meta
          name="description" 
          content="Fachkundige Fitness-Anleitung und top-bewertete Nahrungsergänzungsmittel, um dein Potenzial zu unterstützen. Wissenschaftlich fundierte Trainingstipps und Produktempfehlungen von einem zertifizierten Personal Trainer."
        />
        <meta name="keywords" content="Fitness, Nahrungsergänzung, Protein, Workouts, Personal Trainer, Gym, Ernährung" />
      </Helmet>
      
      <main className="min-h-screen bg-background overflow-x-hidden">
        <TopLeftAvatar />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FitnessTips />
        <ProductsSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
