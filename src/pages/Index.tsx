import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Philosophy } from "@/components/site/Philosophy";
import { Admissions } from "@/components/site/Admissions";
import { MicroCopy } from "@/components/site/MicroCopy";
import { Footer } from "@/components/site/Footer";
import { PersonaProvider } from "@/components/site/persona";
import { BrandController } from "@/components/site/BrandController";

const Index = () => {
  return (
    <PersonaProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <MicroCopy />
          <About />
          <Programs />
          <Philosophy />
          <Admissions />
        </main>
        <Footer />
        <BrandController />
      </div>
    </PersonaProvider>
  );
};

export default Index;
