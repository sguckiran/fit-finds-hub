import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useMemo, useState, useEffect } from "react";

interface RawProduct {
	name: string;
	category: string;
	rating: number;
	reviews: string;
	basePrice: number;
	amazonUrl: string;
	description: string;
}

// New: runtime product shape used by the UI
interface Product {
	name: string;
	category: string;
	rating: number;
	reviews: string;
	price: string; // formatted with currency symbol
	amazonUrl: string;
	description: string;
}

// Default templates (used if products.txt can't be fetched or parsed)
const defaultBaseProducts: RawProduct[] = [
	{
		name: "Optimum Nutrition Gold Standard Whey",
		category: "Proteinpulver",
		rating: 4.8,
		reviews: "125K+",
		basePrice: 64.99,
		amazonUrl: "https://amazon.com",
		description: "Weltweit meistverkauftes Whey-Protein mit 24 g Protein pro Portion.",
	},
	{
		name: "Creatine Monohydrate",
		category: "Leistungssteigerung",
		rating: 4.9,
		reviews: "89K+",
		basePrice: 22.99,
		amazonUrl: "https://amazon.com",
		description: "Steigere Kraft und Leistungsfähigkeit mit reinem, mikronisiertem Kreatin.",
	},
	{
		name: "Pre-Workout Energy Formula",
		category: "Energie",
		rating: 4.7,
		reviews: "45K+",
		basePrice: 39.99,
		amazonUrl: "https://amazon.com",
		description: "Explosive Energie und Fokus für intensive Trainingseinheiten.",
	},
	{
		name: "Multivitamin Complex",
		category: "Gesundheit",
		rating: 4.6,
		reviews: "12K+",
		basePrice: 19.99,
		amazonUrl: "https://amazon.com",
		description: "Komplexes Tagesmultivitamin zur Unterstützung der allgemeinen Gesundheit.",
	},
	{
		name: "Whey Isolate Premium",
		category: "Protein",
		rating: 4.8,
		reviews: "34K+",
		basePrice: 79.99,
		amazonUrl: "https://amazon.com",
		description: "Schnell absorbierbares Whey-Isolat zur Erhaltung schlanker Muskulatur.",
	},
	{
		name: "Omega-3 Fish Oil",
		category: "Regeneration",
		rating: 4.5,
		reviews: "23K+",
		basePrice: 24.99,
		amazonUrl: "https://amazon.com",
		description: "Hochdosiertes EPA/DHA für Herz- und Gelenkgesundheit.",
	},
];

// Helper: generate a larger product list by cycling base templates
const generateProducts = (bases: RawProduct[], total = 36): Product[] => {
	return Array.from({ length: total }).map((_, i) => {
		const base = bases[i % bases.length];
		const copyIndex = Math.floor(i / bases.length) + 1;
		const price = (base.basePrice + (i % 7) * 2).toFixed(2);
		return {
			name: `${base.name} ${copyIndex}`,
			category: base.category,
			rating: +(base.rating - (i % 3) * 0.05).toFixed(2),
			reviews: base.reviews,
			price: `€${price}`,
			amazonUrl: base.amazonUrl,
			description: base.description,
		};
	});
};

const parseProductsTxt = (text: string): RawProduct[] => {
	const lines = text.split(/\r?\n/);
	const products: RawProduct[] = [];
	for (const raw of lines) {
		const line = raw.trim();
		if (!line || line.startsWith("#")) continue; // ignore comments/empty
		// Expect pipe-separated fields: name|category|rating|reviews|basePrice|amazonUrl|description
		const parts = line.split("|");
		if (parts.length < 7) continue; // skip malformed
		const [name, category, ratingStr, reviews, basePriceStr, amazonUrl, ...descParts] = parts;
		const description = descParts.join("|").trim();
		const rating = parseFloat(ratingStr) || 0;
		const basePrice = parseFloat(basePriceStr) || 0;
		products.push({ name: name.trim(), category: category.trim(), rating, reviews: reviews.trim(), basePrice, amazonUrl: amazonUrl.trim(), description });
	}
	return products;
};

const ProductsSection = () => {
	const [query, setQuery] = useState("");
	// typed to Product[] instead of implicit any
	const [products, setProducts] = useState<Product[]>(() => generateProducts(defaultBaseProducts));
	const [loading, setLoading] = useState(false);
	const [source, setSource] = useState<"file" | "default">("default");
	// new: category filter state
	const [categoryFilter, setCategoryFilter] = useState<string>("");

	// compute available categories from loaded products (including "Unbekannt")
	const categories = useMemo(() => {
		const set = new Set(products.map((p) => p.category || "Unbekannt"));
		return ["", ...Array.from(set).sort()]; // "" will mean all categories
	}, [products]);

	// Load products from products.txt with fallback to defaults
	const loadProducts = async () => {
		setLoading(true);
		try {
			const res = await fetch("/products.txt");
			if (!res.ok) throw new Error("Failed to fetch products.txt");
			const text = await res.text();
			const parsed = parseProductsTxt(text);
			if (parsed.length === 0) {
				setSource("default");
				setProducts(generateProducts(defaultBaseProducts));
				console.warn("ProductsSection: products.txt parsed to empty list; using defaults.");
			} else {
				// Map parsed entries to a fixed list of 36 products. If an index is missing, fill with placeholder.
				setSource("file");
				const total = 36;
				const finalProducts: Product[] = Array.from({ length: total }).map((_, i) => {
					const p = parsed[i];
					if (p) {
						return {
							name: p.name,
							category: p.category,
							rating: p.rating,
							reviews: p.reviews,
							price: `€${p.basePrice.toFixed(2)}`,
							amazonUrl: p.amazonUrl,
							description: p.description,
						};
					}
					// Placeholder for missing entries
					return {
						name: `Unknown Product ${i + 1}`,
						category: "Unbekannt",
						rating: 0,
						reviews: "0",
						price: "€0.00",
						amazonUrl: "#",
						description: "Keine Daten vorhanden.",
					};
				});
				setProducts(finalProducts);
			}
		} catch (err) {
			const message = err instanceof Error ? err.message : String(err);
			console.warn("ProductsSection: could not load products.txt, using defaults.", message);
			setSource("default");
			setProducts(generateProducts(defaultBaseProducts));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		let mounted = true;
		loadProducts();
		return () => {
			mounted = false;
		};
	}, []);

	const filteredProducts = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q && !categoryFilter) return products;
		return products.filter((p) => {
			const matchesQuery = q
				? p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
				: true;
			const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
			return matchesQuery && matchesCategory;
		});
	}, [query, products, categoryFilter]);

	return (
		<section id="products" className="py-20 md:py-32 bg-secondary/50">
			<div className="container px-4">
				<div className="text-center mb-16">
					<span className="text-primary font-semibold uppercase tracking-widest text-sm">Empfohlen</span>
					<h2 className="font-display text-4xl md:text-6xl text-foreground mt-3 mb-4">TOP NAHRUNGSERGÄNZUNGSMITTEL</h2>
					<p className="text-muted-foreground max-w-xl mx-auto">Persönlich getestet und empfohlene Supplements zur Unterstützung deines Trainings.</p>
					<p className="text-primary text-sm mt-3">Ich biete allen Kundinnen und Kunden, die ein Produkt auf meiner Website kaufen, eine kostenlose Supplement‑Beratung an, melde dich.</p>
				</div>

				{/* Search bar + controls */}
				<div className="max-w-2xl mx-auto mb-8">
					<div className="flex gap-2 flex-col sm:flex-row">
						<div className="flex gap-2 w-full">
							<Input placeholder="Produkte, Kategorien oder Beschreibungen durchsuchen..." value={query} onChange={(e) => setQuery(e.target.value)} />
							{/* Category select */}
							<select
								aria-label="Kategorie auswählen"
								className="rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
								value={categoryFilter}
								onChange={(e) => setCategoryFilter(e.target.value)}
							>
								{categories.map((c) => (
									<option key={c} value={c}>
										{c === "" ? "Alle Kategorien" : c}
									</option>
								))}
							</select>
						</div>
						{query ? (
							<Button variant="outline" size="sm" onClick={() => setQuery("")}>Löschen</Button>
						) : (
							<Button variant="default" size="sm" onClick={() => setQuery("")}>Alle</Button>
						)}

						{/* Reload products.txt at runtime */}
						<Button variant="ghost" size="sm" onClick={loadProducts} disabled={loading}>
							{loading ? "Lädt..." : "Neu laden"}
						</Button>
					</div>
					<p className="text-muted-foreground text-sm mt-2">Zeige {filteredProducts.length} von {products.length} Produkten · Quelle: {source === "file" ? "products.txt" : "Standarddaten"}</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{filteredProducts.map((product) => (
						<div key={product.name} className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow">
							{/* Product Image Placeholder */}
							<div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
								<span className="text-6xl opacity-30">💪</span>
							</div>

							<div className="p-6">
								<span className="text-primary text-sm font-medium uppercase tracking-wider">{product.category}</span>
								<h3 className="font-display text-xl text-foreground mt-2 mb-2 leading-tight">{product.name}</h3>
								<p className="text-muted-foreground text-sm mb-4">{product.description}</p>

								<div className="flex items-center gap-2 mb-4">
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-foreground fill-foreground" : "text-muted"}`} />
										))}
									</div>
									<span className="text-muted-foreground text-sm">{product.rating} ({product.reviews} Bewertungen)</span>
								</div>

								<div className="flex items-center justify-between">
									<span className="font-display text-2xl text-foreground">{product.price}</span>
									<Button variant="default" size="sm" asChild>
										<a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">Bei Amazon ansehen<ExternalLink className="w-4 h-4" /></a>
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>

				<p className="text-center text-muted-foreground text-sm mt-8">*Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.</p>
			</div>
		</section>
	);
};

export default ProductsSection;

const FC = "/assets/ali-BNq1UIHG.png";

type AvatarProps = { fixed?: boolean; className?: string; alt?: string };

const Yg = ({ fixed = true, className = "", alt = "Ali" }: AvatarProps) => {
	const img = (
		<img
			src={FC}
			alt={alt}
			className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-white/80 shadow-lg mx-auto md:mx-0 ${className}`}
		/>
	);

	// fixed avatar (top-left) for md+ screens
	if (fixed) return <div className="hidden md:block fixed top-4 left-4 z-[9999]">{img}</div>;

	// non-fixed avatar (used in About section) — center on mobile, left-align on md+
	return <div className="w-full flex justify-center md:justify-start">{img}</div>;
};
