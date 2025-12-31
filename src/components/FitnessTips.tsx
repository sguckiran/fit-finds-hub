import { Dumbbell, Apple, Moon, Zap } from "lucide-react";

const tips = [
	{
		icon: Dumbbell,
		title: "Konstanz statt Intensität",
		description:
			"Sei regelmäßig aktiv, auch wenn die Motivation gering ist. Kleine, konstante Anstrengungen schlagen gelegentliche intensive Workouts. Ziel: mindestens 3–4 Einheiten pro Woche.",
	},
	{
		icon: Apple,
		title: "Protein priorisieren",
		description:
			"Nimm täglich 1,6–2,2 g Protein pro kg Körpergewicht zu dir. Verteile die Aufnahme über 4–5 Mahlzeiten für optimale Muskelproteinsynthese.",
	},
	{
		icon: Moon,
		title: "Schlaf ist Erholung",
		description:
			"Strebe 7–9 Stunden qualitativ hochwertigen Schlaf an. Muskeln wachsen in der Erholung, nicht im Gym. Schlechter Schlaf kann Fortschritte deutlich reduzieren.",
	},
	{
		icon: Zap,
		title: "Progressive Überlastung",
		description:
			"Erhöhe schrittweise Gewicht, Wiederholungen oder Sätze über die Zeit. Verfolge deine Workouts und versuche, jede Woche etwas besser zu werden.",
	},
];

const FitnessTips = () => {
	return (
		<section id="tips" className="py-20 md:py-32 bg-background">
			<div className="container px-4">
				<div className="text-center mb-16">
					<span className="text-primary font-semibold uppercase tracking-widest text-sm">
						Expertenrat
					</span>
					<h2 className="font-display text-4xl md:text-6xl text-foreground mt-3 mb-4">
						TRAININGSTIPPS
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto">
						Wissenschaftlich fundierte Grundsätze, um deine Fitness-Reise zu
						beschleunigen und Ergebnisse zu maximieren.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
					{tips.map((tip, index) => (
						<div
							key={tip.title}
							className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
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
