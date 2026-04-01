import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { WA, IG, MAPS, ADDRESS_FULL, PHONE_DISPLAY, HOURS } from "@/lib/constants";

const navLinks = [
  ["#sobre", "Sobre o Studio"],
  ["#servicos", "Serviços"],
  ["#metodo", "Método"],
  ["#resultados", "Resultados"],
  ["#localizacao", "Localização"],
];

export function FooterSection() {
  return (
    <footer className="border-t border-border py-14 bg-secondary/20">
      <div className="container grid md:grid-cols-4 gap-10 mb-10">

        {/* Marca */}
        <div className="md:col-span-2 space-y-4">
          <img
            src="/images/logo-white.png"
            alt="Studio Gabriel Reis - Alta Performance e Prevenção de Lesões"
            className="h-20 w-auto object-contain"
          />
          <p className="text-secondary-foreground text-sm leading-relaxed max-w-xs">
            Studio Gabriel Reis - Alta Performance e Prevenção de Lesões. Centro especializado em São Luís, MA.
          </p>
          <a href={IG} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-secondary-foreground hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" /> @studiogabrielreis
          </a>
        </div>

        {/* Navegação */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-wide">Navegação</h4>
          <ul className="space-y-2.5 text-sm text-secondary-foreground">
            {navLinks.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-primary transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-wide">Contato</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground">
            <li>
              <a href={MAPS} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{ADDRESS_FULL}</span>
              </a>
            </li>
            <li>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" />
              {HOURS}
            </li>
          </ul>
        </div>
      </div>

      <div className="container border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-muted-foreground">© 2026 Studio Gabriel Reis – Alta Performance e Prevenção de Lesões. Todos os direitos reservados.</p>
        <p className="text-xs text-muted-foreground">Cohama, São Luís – MA</p>
      </div>
    </footer>
  );
}
