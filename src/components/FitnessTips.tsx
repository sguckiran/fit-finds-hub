import { Dumbbell, Apple, Moon, Zap } from "lucide-react";

const tips = [
  {
    icon: Dumbbell,
    title: "Consistency Over Intensity",
    description: "Show up every day, even when motivation is low. Small consistent efforts beat occasional intense workouts. Aim for at least 3-4 sessions per week.",
  },
  {
    icon: Apple,
    title: "Prioritize Protein",
    description: "Consume 1.6-2.2g of protein per kg of body weight daily. Space your intake across 4-5 meals for optimal muscle protein synthesis.",
  },
  {
    icon: Moon,
    title: "Sleep Is Recovery",
    description: "Aim for 7-9 hours of quality sleep. Your muscles grow during rest, not in the gym. Poor sleep can reduce gains by up to 60%.",
  },
  {
    icon: Zap,
    title: "Progressive Overload",
    description: "Gradually increase weight, reps, or sets over time. Track your workouts and aim to beat your previous performance each week.",
  },
];

const FitnessTips = () => {
  return (
    <section id="tips" className="py-20 md:py-32 gradient-hero">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Expert Advice
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-3 mb-4">
            FITNESS TIPS
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Science-backed principles to accelerate your fitness journey and maximize results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <div
              key={tip.title}
              className="group gradient-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="gradient-accent w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <tip.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {tip.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessTips;
