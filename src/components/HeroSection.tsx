import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient (now grey) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400" />

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/60" />

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <div className="animate-fade-up">

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 tracking-wide">
            ENTFALTE DEIN <span className="text-gradient">POTENZIAL</span>
          </h1>
          
          <p className="text-black text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Fachkundige Fitness-Anleitung und top-bewertete Nahrungsergänzungsmittel, die dir helfen, deine Ziele zu erreichen. Verwandle deinen Körper, verwandle dein Leben.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="#products">Empfohlene Produkte</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#tips">Trainingstipps</a>
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
