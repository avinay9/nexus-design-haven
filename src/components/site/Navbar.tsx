import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#admissions" },
  { label: "Showcase", href: "#showcase" },
  { label: "Campus Life", href: "#campus" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-academy flex h-16 lg:h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 bg-primary text-primary-foreground grid place-items-center font-bold text-sm">
            N
          </div>
          <div className="leading-tight">
            <div className="font-bold text-primary text-sm tracking-tight">NEXUS ACADEMY</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">of Design</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-primary/70 hover:text-primary">
            Student Portal
          </a>
          <Button>Apply Now</Button>
        </div>

        <button
          className="lg:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-academy py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-primary/80"
              >
                {l.label}
              </a>
            ))}
            <Button className="w-full">Apply Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};
