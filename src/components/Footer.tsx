import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="py-12 border-t border-border bg-background">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="AS Protein" className="h-12" />
            <span className="text-muted-foreground">
              Entfalte dein Potenzial
            </span>
          </div>
          
          <nav className="flex gap-8">
            <a href="/#tips" className="text-muted-foreground hover:text-primary transition-colors">
              Tipps
            </a>
            <a href="/#products" className="text-muted-foreground hover:text-primary transition-colors">
              Produkte
            </a>
          </nav>
          
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              {/* Instagram inline SVG */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="YouTube"
            >
              {/* YouTube inline SVG */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
              </svg>
            </a>
            <a
              href="mailto:contact@asprotein.com"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="E-Mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} AS Protein. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
