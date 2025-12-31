import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-personal.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/80" />
      
      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <div className="animate-fade-up">
          {/* Prominent Logo */}
          <div className="bg-foreground/90 px-8 py-4 rounded-xl inline-block mb-10 shadow-lg">
            <img 
              src={logo} 
              alt="AS Protein Logo" 
              className="h-16 md:h-20 lg:h-24 animate-float invert"
            />
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 tracking-wide">
            FUEL YOUR <span className="text-gradient">POTENTIAL</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Expert fitness guidance and top-rated supplements to help you achieve your goals. 
            Transform your body, transform your life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#products">Shop Recommended</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#tips">Fitness Tips</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
