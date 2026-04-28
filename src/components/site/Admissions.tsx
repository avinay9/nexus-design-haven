import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  { n: "01", title: "Online Application", text: "Submit our portal application with your educational history and intended major." },
  { n: "02", title: "Portfolio Review", text: "10–15 pieces showing your creative process — sketches, prototypes, experiments." },
  { n: "03", title: "Personal Statement", text: "500–800 words. Why design? What problems will you solve? Be bold and authentic." },
  { n: "04", title: "Interview & Decision", text: "Selected applicants meet our faculty panel. Decisions released within 6 weeks." },
];

export const Admissions = () => {
  return (
    <section id="admissions" className="py-24 lg:py-32 bg-background">
      <div className="container-academy">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Admissions</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-[1.05]">
              Join the next generation of makers.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We seek restless curiosity, a passion for problem-solving, and a relentless drive
              to make impact. Nexus Academy is entirely test-optional — over 75% of our students
              receive financial assistance.
            </p>
            <Button className="mt-8 group">
              Begin Application
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8">
              <div className="text-sm font-mono text-primary/50 mb-6">{s.n}</div>
              <h3 className="font-bold text-primary mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
