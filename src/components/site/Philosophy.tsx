import { usePersona } from "./persona";

const pillars = [
  { n: "I.", title: "Studio-First Pedagogy",
    text: "The studio is the beating heart of our academic experience — a vibrant, collaborative space where ideas are tested, broken, and rebuilt." },
  { n: "II.", title: "Interdisciplinary DNA",
    text: "A sculptor works alongside a software engineer; a typographer collaborates with an industrial manufacturer. Innovation lives at the intersection." },
  { n: "III.", title: "Ethical & Sustainable",
    text: "We train designers to consider the entire lifecycle — from raw material sourcing to inclusive, accessible, end-of-life responsible products." },
];

export const Philosophy = () => {
  const { copy } = usePersona();
  return (
    <section id="campus" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container-academy">
        <p className="eyebrow text-primary-foreground/70 mb-4">{copy.philosophyEyebrow}</p>
        <h2 className="text-4xl lg:text-5xl font-bold max-w-3xl leading-[1.05] mb-16">
          {copy.philosophyHeadline}
        </h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((p) => (
            <div key={p.n} className="border-t border-primary-foreground/20 pt-6">
              <div className="text-sm font-mono text-primary-foreground/50 mb-4">{p.n}</div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
