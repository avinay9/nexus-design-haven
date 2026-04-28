export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container-academy grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-4">The Nexus Advantage</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-[1.05]">
            Designers are the ultimate problem‑solvers.
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            The world is changing at an unprecedented pace. In this complex
            landscape, design is no longer just about making things look beautiful;
            it is about solving critical human problems. Our curriculum is built
            on a foundation of empathy, technical rigor, and unrestrained imagination.
          </p>
          <p>
            You will collaborate with engineering students, business strategists,
            and environmental scientists. You will be challenged to defend your
            creative decisions, and supported by a faculty of actively practicing
            industry leaders. We don't just prepare you for the design industry —
            we prepare you to lead it.
          </p>
        </div>
      </div>
    </section>
  );
};
