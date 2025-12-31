// filepath: /Users/sinan/Documents/GitHub/fit-finds-hub/src/components/ServicesSection.tsx
import { Button } from "@/components/ui/button";

const services = [
	{
		title: "Personal Training",
		subtitle: "Einzelcoaching",
		description:
			"Individuelle Trainingsprogramme, Technik-Coaching und Fortschrittsverfolgung, zugeschnitten auf deine Ziele.",
		icon: "💪",
	},
	{
		title: "Ernährungspläne",
		subtitle: "Mahlzeitenplanung & Makros",
		description:
			"Personalisierte Ernährungspläne und Makronährstoffziele zur Unterstützung von Leistung und Erholung.",
		icon: "🥗",
	},
	{
		title: "Online-Coaching",
		subtitle: "Fernbetreuung",
		description:
			"Flexibles Online-Coaching mit Verantwortlichkeit, wöchentlichen Check-ins und Programmaktualisierungen.",
		icon: "🌐",
	},
	{
		title: "Beratung zu Supplements",
		subtitle: "Wissenschaftlich fundierte Beratung",
		description:
			"Individuelle Empfehlungen zu Nahrungsergänzungsmitteln basierend auf Bedürfnissen, Zielen und aktuellen Produkten.",
		icon: "🧪",
	},
];

const ServicesSection = () => {
	// Using the provided short WhatsApp link directly for the CTA
	const whatsappLink = "https://wa.link/i0jtrk";

	return (
		<section id="services" aria-labelledby="services-heading" className="py-12 md:py-20 bg-background/50">
			<div className="container px-4">
				<div className="text-center mb-8 md:mb-12">
					<span className="text-primary font-semibold uppercase tracking-widest text-xs md:text-sm">
						Leistungen
					</span>
					<h2 id="services-heading" className="font-display text-2xl md:text-4xl text-foreground mt-3 mb-3">
						WAS ICH ANBIETE
					</h2>
					<p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
						Maßgeschneidertes Coaching und fachkundige Begleitung, damit du Kraft aufbaust, Fett verlierst und dich beim Training wohlfühlst.
					</p>
				</div>

				{/* Responsive grid: 1 column on mobile, 2 on md, 4 on lg */}
				<div role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-6 md:mb-8">
					{services.map((s, idx) => (
						<article
							role="listitem"
							key={s.title}
							aria-labelledby={`service-title-${idx}`}
							aria-describedby={`service-desc-${idx}`}
							tabIndex={0}
							className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow p-6 md:p-6 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 min-h-[6rem]"
						>
							<h3 id={`service-title-${idx}`} className="font-display text-base md:text-xl text-foreground mt-0 mb-1 leading-tight">
								{s.title}
							</h3>
							<span className="text-primary text-xs md:text-sm font-medium uppercase tracking-wider">
								{s.subtitle}
							</span>
							<p id={`service-desc-${idx}`} className="text-muted-foreground text-sm md:text-sm mt-3">
								{s.description}
							</p>
						</article>
					))}
				</div>

				<div className="text-center">
					{/* WhatsApp CTA button: full width on mobile */}
					<div className="max-w-xs mx-auto w-full">
						<Button variant="hero" size="lg" asChild>
							<a
								href={whatsappLink}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Kontakt über WhatsApp"
								className="inline-flex items-center justify-center gap-3 w-full py-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-5 h-5"
								>
									<path d="M20.52 3.478A11.87 11.87 0 0012 .25C5.73.25.99 4.99.99 11.25c0 1.988.52 3.834 1.5 5.486L.01 23.75l7.275-1.85A11.933 11.933 0 0012 22.5c6.27 0 11.01-4.74 11.01-10.5 0-2.792-1.02-5.39-2.49-7.522zM12 20.5c-1.266 0-2.5-.33-3.59-.95l-.26-.15-4.32 1.1 1.15-3.86-.17-.27A8.01 8.01 0 014 11.25 8.75 8.75 0 1119.75 12c0 2.13-.8 4.1-2.26 5.58A7.64 7.64 0 0112 20.5z" />
									<path d="M17.1 14.1c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5-.17 0-.36 0-.55 0-.2 0-.53.07-.8.37-.27.3-1.02.99-1.02 2.42 0 1.43 1.05 2.81 1.2 3 .15.2 2.08 3.2 5.04 4.49 2.96 1.3 2.96.87 3.5.81.54-.06 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.08-.13-.27-.2-.57-.35z" />
								</svg>
								Kontakt über WhatsApp
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
