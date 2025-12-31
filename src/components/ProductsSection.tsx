import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

const products = [
  {
    name: "Optimum Nutrition Gold Standard Whey",
    category: "Protein Powder",
    rating: 4.8,
    reviews: "125K+",
    price: "$64.99",
    amazonUrl: "https://amazon.com",
    description: "The world's best-selling whey protein with 24g protein per serving.",
  },
  {
    name: "Creatine Monohydrate",
    category: "Performance",
    rating: 4.9,
    reviews: "89K+",
    price: "$22.99",
    amazonUrl: "https://amazon.com",
    description: "Increase strength and power output with pure micronized creatine.",
  },
  {
    name: "Pre-Workout Energy Formula",
    category: "Energy",
    rating: 4.7,
    reviews: "45K+",
    price: "$39.99",
    amazonUrl: "https://amazon.com",
    description: "Explosive energy and focus for intense training sessions.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Recommended
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-3 mb-4">
            TOP SUPPLEMENTS
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Personally tested and recommended supplements to support your training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              {/* Product Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <span className="text-6xl opacity-30">💪</span>
              </div>
              
              <div className="p-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-display text-xl text-foreground mt-2 mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-foreground fill-foreground" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl text-foreground">
                    {product.price}
                  </span>
                  <Button variant="default" size="sm" asChild>
                    <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                      View on Amazon
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground text-sm mt-8">
          *As an Amazon Associate, I earn from qualifying purchases.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
