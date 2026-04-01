import { Instagram, MapPin, Phone } from "lucide-react";
import { WA, IG, MAPS } from "@/lib/constants";

const navLinks = [
  ["#sobre", "Sobre o Studio"],
  ["#servicos", "Serviços"],
  ["#metodo", "Método"],
  ["#resultados", "Resultados"],
];

export function FooterSection() {
  return (
    <footer className="border-t border-border py-14 bg-secondary/20">
      <div className="container grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-black">Studio <span className="text-primary">Gabriel Reis</span></h3>
          <p className="text-secondary-foreground text-sm leading-relaxed max-w-xs">
            Centro especializado em alta performance, reabilitação e retreinamento de lesões em São Luís, MA.
          </p>
          <a href={IG} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-secondary-foreground hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" /> @studiogabrielreis
          </a>
        </div>

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

        <div className="space-y-4">
          <h4 className="font-bold text-sm tracking-wide">Contato</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground">
            <li>
              <a href={MAPS} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Calhau, São Luís — MA</span>
              </a>
            </li>
            <li>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" /> WhatsApp
              </a>
            </li>
          </ul>
          <div className="text-xs text-secondary-foreground pt-1">
            <strong className="text-foreground block mb-1">Horário</strong>
            Seg–Sex: 06h–22h<br />Sábado: 07h–12h
          </div>
        </div>
      </div>

      <div className="container border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-muted-foreground">© 2026 Studio Gabriel Reis. Todos os direitos reservados.</p>
        <p className="text-xs text-muted-foreground">São Luís, Maranhão</p>
      </div>
    </footer>
  );
}
