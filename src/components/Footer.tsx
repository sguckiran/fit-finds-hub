import { Instagram, Youtube, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="AS Protein" className="h-12" />
            <span className="text-muted-foreground">
              Fuel Your Potential
            </span>
          </div>
          
          <nav className="flex gap-8">
            <a href="#tips" className="text-muted-foreground hover:text-primary transition-colors">
              Tips
            </a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </a>
          </nav>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@asprotein.com"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} AS Protein. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
