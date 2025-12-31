import TopLeftAvatar from "@/components/TopLeftAvatar";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background/80">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <TopLeftAvatar fixed={false} className="w-32 h-32 md:w-48 md:h-48" alt="Ali" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Über mich</h2>

              <p className="text-muted-foreground mb-4">
                Ich komme aus Düsseldorf und bin seit vielen Jahren leidenschaftlicher Kraftsportler. In dieser Zeit habe ich umfangreiche Erfahrungen in den Bereichen Krafttraining, Ausdauer, Medical Fitness, funktionelles Training sowie Sporternährung gesammelt. Seit mehreren Jahren arbeite ich zudem aktiv als Trainer und unterstütze Menschen dabei, ihre sportlichen und gesundheitlichen Ziele zu erreichen.
              </p>

              <p className="text-muted-foreground">
                Ich bin Diplom-Sport- und Fitnesstrainer, Diplom-Medical-Fitness-Coach sowie Diplom-Gesundheitsbetriebswirt. Mit diesem Wissen kombiniere ich sportwissenschaftliche Expertise mit einem ganzheitlichen Gesundheitsansatz – für nachhaltige Ergebnisse, gesunde Bewegung und ein starkes Körpergefühl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

