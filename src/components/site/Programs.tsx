import { ArrowUpRight } from "lucide-react";
import { usePersona } from "./persona";

const programs = [
  { code: "01", title: "Interaction Design", degree: "BFA / MFA",
    desc: "Crafting seamless, human-centric digital experiences that bridge people and technology." },
  { code: "02", title: "Industrial & Product Design", degree: "BFA / MFA",
    desc: "Developing sustainable physical products that improve everyday life — from electronics to furniture." },
  { code: "03", title: "Visual Communication", degree: "BFA",
    desc: "Mastering typography, branding, and motion graphics to tell compelling visual stories." },
  { code: "04", title: "Architecture & Spatial", degree: "MFA",
    desc: "Reimagining the built environment through sustainable materials and human-centered urbanism." },
  { code: "05", title: "Design Research", degree: "MA / PhD",
    desc: "Investigating the social, ethical, and ecological dimensions of design practice and theory." },
  { code: "06", title: "Fashion & Textile", degree: "BFA",
    desc: "Building expressive, sustainable garments and material systems for a circular future." },
];

export const Programs = () => {
  const { copy } = usePersona();
  return (
    <section id="programs" className="py-24 lg:py-32 bg-secondary">
      <div className="container-academy">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">{copy.programsEyebrow}</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-[1.05]">
              {copy.programsHeadline}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">{copy.programsLede}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {programs.map((p) => (
            <article
              key={p.code}
              className="group relative bg-background p-8 lg:p-10 transition-colors duration-300 hover:bg-primary"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-xs font-mono text-primary/50 group-hover:text-primary-foreground/60 transition-colors">
                  {p.code} / {p.degree}
                </span>
                <ArrowUpRight className="h-5 w-5 text-primary/40 group-hover:text-primary-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3 className="text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-10 pt-6 border-t border-border group-hover:border-primary-foreground/20 transition-colors">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary group-hover:text-primary-foreground transition-colors">
                  {copy.programsCardCta}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
