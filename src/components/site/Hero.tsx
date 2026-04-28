import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pt-20 overflow-hidden bg-primary">
      <img
        src={heroImage}
        alt="Students working in a Nexus Academy design studio"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />

      <div className="container-academy relative z-10 pb-20 lg:pb-32 text-primary-foreground">
        <div className="max-w-4xl">
          <p className="eyebrow text-primary-foreground/70 mb-6">Est. 1985 — Neo-Metropolis</p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Master the<br />Future of Design.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
            We don't just teach aesthetic principles; we engineer the interfaces,
            products, and systems of tomorrow. Join a global community of makers,
            thinkers, and disruptors.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="group">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Explore Programs
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-primary-foreground/20 pt-10">
          {[
            { n: "40+", l: "Years of Excellence" },
            { n: "50", l: "Countries Represented" },
            { n: "98%", l: "Graduate Placement" },
            { n: "75%", l: "Receive Aid" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl font-bold">{s.n}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mt-2">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
