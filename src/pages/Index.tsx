import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Philosophy } from "@/components/site/Philosophy";
import { Admissions } from "@/components/site/Admissions";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Philosophy />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
