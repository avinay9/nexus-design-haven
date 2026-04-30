import { usePersona } from "./persona";

export const About = () => {
  const { copy } = usePersona();
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container-academy grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-4">{copy.aboutEyebrow}</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-[1.05]">
            {copy.aboutHeadline}
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>{copy.aboutBody1}</p>
          <p>{copy.aboutBody2}</p>
        </div>
      </div>
    </section>
  );
};
