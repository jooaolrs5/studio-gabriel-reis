import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WA } from "@/lib/constants";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

const links = [
  ["#sobre", "Sobre"],
  ["#servicos", "Serviços"],
  ["#metodo", "Método"],
  ["#resultados", "Resultados"],
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img
            src="/images/logo-white.png"
            alt="Studio Gabriel Reis - Alta Performance e Prevenção de Lesões"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-secondary-foreground hover:text-primary transition-colors font-medium">
              {label}
            </a>
          ))}
          <WaButton><WaIcon /> Agendar Avaliação</WaButton>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden">
            <div className="container py-6 flex flex-col gap-1">
              {links.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium border-b border-border/40 text-secondary-foreground hover:text-primary transition-colors">
                  {label}
                </a>
              ))}
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
