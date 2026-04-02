import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WA } from "@/lib/constants";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

const links = [
  { label: "Sobre", href: "#sobre" },
  {
    label: "O Método",
    children: [
      { label: "Diferenciais", href: "#metodo" },
      { label: "Como Funciona", href: "#processo" },
    ],
  },
  { label: "Depoimentos", href: "#resultados" },
  { label: "Planos", href: "#planos" },
  { label: "Localização", href: "#localizacao" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(null);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0">
          <img
            src="/images/logo-white.png"
            alt="Studio Gabriel Reis"
            className="h-10 md:h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
          {links.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-secondary-foreground hover:text-primary transition-colors font-medium rounded-lg hover:bg-white/5"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown === link.label ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {dropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setDropdown(null)}
                          className="block px-4 py-3 text-sm text-secondary-foreground hover:text-primary hover:bg-secondary/40 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-secondary-foreground hover:text-primary transition-colors font-medium rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            )
          )}

          <div className="ml-3">
            <WaButton><WaIcon /> Agendar Avaliação</WaButton>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="container py-5 flex flex-col gap-1">
              {links.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-2 pt-3 pb-1 text-xs font-bold tracking-widest text-primary/60 uppercase">{link.label}</p>
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:text-primary transition-colors rounded-lg hover:bg-white/5"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-2 py-3 text-base font-medium border-b border-border/30 text-secondary-foreground hover:text-primary transition-colors last:border-0"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="mt-4">
                <WaButton full><WaIcon /> Agendar Avaliação</WaButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
