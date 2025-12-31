import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import FitnessTips from "@/components/FitnessTips";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AS Protein | Fitness Tips & Recommended Supplements</title>
        <meta 
          name="description" 
          content="Expert fitness guidance and top-rated supplements to fuel your potential. Get science-backed training tips and product recommendations from a certified personal trainer." 
        />
        <meta name="keywords" content="fitness, supplements, protein, workout tips, personal trainer, gym, nutrition" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <HeroSection />
        <FitnessTips />
        <ProductsSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
