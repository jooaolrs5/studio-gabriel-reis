"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { WA } from "@/lib/constants";
import { WaIcon } from "@/components/shared/WaButton";

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

  // Fechar menu mobile ao redimensionar para desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20 gap-4">

        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="Studio Gabriel Reis"
            width={128}
            height={64}
            className="h-14 md:h-20 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1 flex-1 justify-end" ref={dropdownRef}>
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {links.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                    className="flex items-center gap-1 px-3 lg:px-4 py-2 text-xs lg:text-sm text-secondary-foreground hover:text-primary transition-colors font-medium rounded-lg hover:bg-white/5 whitespace-nowrap"
                  >
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${dropdown === link.label ? "rotate-180" : ""}`} />
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
                  className="px-3 lg:px-4 py-2 text-xs lg:text-sm text-secondary-foreground hover:text-primary transition-colors font-medium rounded-lg hover:bg-white/5 whitespace-nowrap"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="ml-2 lg:ml-3 flex-shrink-0">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 lg:h-11 px-4 lg:px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg inline-flex items-center justify-center gap-1.5 transition-all text-xs lg:text-sm shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              <WaIcon size={4} />
              <span className="hidden lg:inline">Agendar Aula Diagnóstica</span>
              <span className="lg:hidden">Agendar</span>
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors flex-shrink-0"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
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
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg inline-flex items-center justify-center gap-2 transition-all text-base shadow-lg shadow-primary/20"
                >
                  <WaIcon /> Agendar Aula Diagnóstica
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
