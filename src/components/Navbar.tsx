// filepath: /Users/sinan/Documents/GitHub/fit-finds-hub/src/components/Navbar.tsx
import React, { useState } from "react";
import logo from "@/assets/logo.png";

const whatsappLink = "https://wa.link/i0jtrk";

interface NavLinkItem {
  href: string;
  label: string;
  external?: boolean;
}

const links: NavLinkItem[] = [
  { href: "about", label: "Über mich" },
  { href: "services", label: "Leistungen" },
  { href: "tips", label: "Trainingstipps" },
  { href: "products", label: "Produkte" },
  { href: whatsappLink, label: "Kontakt", external: true },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = `#${id}`;
    }
    setOpen(false); // close mobile menu after navigation
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between bg-black/90 text-white rounded-full py-2 px-4 shadow">
          <a href="/#top" onClick={(e) => handleNavClick(e, "top")} className="flex items-center gap-3">
            <img src={logo} alt="AS Protein" className="h-8 md:h-10" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4">
            {links.map((l) => {
              if (l.external) {
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/90 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                );
              }

              return (
                <a
                  key={l.href}
                  href={`/#${l.href}`}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="text-sm font-medium text-white/90 hover:text-white"
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile menu dropdown (fit between left-4 and right-4 to avoid overflow) */}
          <div className={`absolute top-full left-4 right-4 mt-3 w-auto bg-black/95 rounded-lg p-3 shadow-lg transform transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <nav className="flex flex-col gap-2">
              {links.map((l) => {
                if (l.external) {
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:bg-white/5"
                    >
                      {l.label}
                    </a>
                  );
                }

                return (
                  <a
                    key={l.href}
                    href={`/#${l.href}`}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
