import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-academy py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-primary-foreground text-primary grid place-items-center font-bold">
                N
              </div>
              <div className="leading-tight">
                <div className="font-bold tracking-tight">NEXUS ACADEMY</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">of Design</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              100 Innovation Drive<br />
              Neo-Metropolis, ND 10001<br />
              <a href="tel:+18005553376" className="hover:text-primary-foreground">+1 800-555-DESN</a><br />
              <a href="mailto:hello@nexusacademy.edu" className="hover:text-primary-foreground">hello@nexusacademy.edu</a>
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-foreground/60 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Programs</a></li>
              <li><a href="#" className="hover:underline">Admissions</a></li>
              <li><a href="#" className="hover:underline">Showcase</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-foreground/60 mb-5">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:underline">Press & Media</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Campus Map</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary-foreground/60 mb-5">Newsletter</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Quarterly dispatches from the studio.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40"
              />
              <Button variant="secondary" type="submit">Join</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6 text-xs text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground">Privacy</a>
            <a href="#" className="hover:text-primary-foreground">Terms</a>
            <a href="#" className="hover:text-primary-foreground">Accessibility</a>
            <a href="#" className="hover:text-primary-foreground">Title IX</a>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary-foreground"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-primary-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="X" className="text-primary-foreground/70 hover:text-primary-foreground"><Twitter className="h-5 w-5" /></a>
          </div>
          <div className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Nexus Academy of Design
          </div>
        </div>
      </div>
    </footer>
  );
};
