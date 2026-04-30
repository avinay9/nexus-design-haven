import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type PersonaId = "ivy" | "tech" | "humanist";

export interface PersonaCopy {
  // Navigation / global
  brandTagline: string;
  ctaPrimary: string;          // "Apply Now" equivalent
  ctaSecondary: string;        // "Student Portal" equivalent

  // Hero
  heroEyebrow: string;
  heroHeadline: ReactNode;
  heroBody: string;
  heroCtaPrimary: string;      // "Start Your Journey"
  heroCtaSecondary: string;    // "Explore Programs"

  // About
  aboutEyebrow: string;
  aboutHeadline: string;
  aboutBody1: string;
  aboutBody2: string;

  // Programs
  programsEyebrow: string;
  programsHeadline: string;
  programsLede: string;
  programsCardCta: string;

  // Philosophy
  philosophyEyebrow: string;
  philosophyHeadline: string;

  // Admissions
  admissionsEyebrow: string;
  admissionsHeadline: string;
  admissionsBody: string;
  admissionsCta: string;

  // Footer / newsletter
  newsletterHeadline: string;
  newsletterBody: string;
  newsletterCta: string;

  // Voice Lab
  voiceLabEyebrow: string;
  voiceLabHeadline: string;
  voiceLabBody: string;
  voiceLabCta: string;
}

export interface PersonaDef {
  id: PersonaId;
  name: string;
  shortName: string;
  description: string;
  swatch: string; // tailwind classes for swatch preview
  copy: PersonaCopy;
}

export const PERSONAS: Record<PersonaId, PersonaDef> = {
  ivy: {
    id: "ivy",
    name: "The Ivy League",
    shortName: "Traditional",
    description: "Formal, academic, prestige. Serif type, navy & gold.",
    swatch: "bg-[hsl(214,100%,12%)] ring-[hsl(42,60%,55%)]",
    copy: {
      brandTagline: "Academy of Design",
      ctaPrimary: "Inquire for Prospectus",
      ctaSecondary: "Student Portal",

      heroEyebrow: "Established 1985 — Neo-Metropolis",
      heroHeadline: (
        <>
          A Considered<br />Pursuit of Design.
        </>
      ),
      heroBody:
        "For four decades, Nexus Academy has cultivated the discipline, discernment, and rigour required to shape enduring works of design. We welcome inquiries from prospective scholars worldwide.",
      heroCtaPrimary: "Inquire for Prospectus",
      heroCtaSecondary: "Examine Programmes",

      aboutEyebrow: "The Nexus Distinction",
      aboutHeadline:
        "Designers are the foremost stewards of the made world.",
      aboutBody1:
        "Our curriculum is rooted in the classical traditions of craft, theory, and critique. Each candidate is mentored within a small studio, in the conviction that excellence is cultivated through patient practice and rigorous discourse.",
      aboutBody2:
        "Scholars collaborate with faculty drawn from distinguished practice and the academy alike. We do not merely prepare graduates for the profession — we prepare them to advance its canon.",

      programsEyebrow: "Academic Programmes",
      programsHeadline: "Disciplines of enduring consequence.",
      programsLede:
        "Six considered programmes, united by a common pursuit of craft and intellectual rigour.",
      programsCardCta: "Read Prospectus →",

      philosophyEyebrow: "Pedagogical Philosophy",
      philosophyHeadline: "We think through making.",

      admissionsEyebrow: "Admissions",
      admissionsHeadline: "An invitation to scholarly practice.",
      admissionsBody:
        "We seek candidates of intellectual seriousness and demonstrated craft. Nexus Academy is test-optional; in excess of seventy-five per cent of admitted scholars receive financial assistance.",
      admissionsCta: "Request Application Materials",

      newsletterHeadline: "The Nexus Quarterly",
      newsletterBody: "A considered dispatch, posted four times a year.",
      newsletterCta: "Subscribe",

      voiceLabEyebrow: "Studio Atelier",
      voiceLabHeadline: "Editorial Voice Atelier",
      voiceLabBody:
        "Compose copy in the considered register of the Academy. All variations are produced in the currently selected institutional voice.",
      voiceLabCta: "Compose",
    },
  },

  tech: {
    id: "tech",
    name: "The Tech Disruptor",
    shortName: "Modern",
    description: "Punchy, direct. Mono type, neon green on dark.",
    swatch: "bg-[hsl(220,18%,7%)] ring-[hsl(140,95%,55%)]",
    copy: {
      brandTagline: "// design.school",
      ctaPrimary: "Get the Syllabus",
      ctaSecondary: "Login",

      heroEyebrow: "v4.0 // shipping since 1985",
      heroHeadline: (
        <>
          Ship design.<br />Break the rules.
        </>
      ),
      heroBody:
        "We don't teach design. We ship it. Build real products with real users, mentored by operators from Figma, Vercel, Linear, and Anthropic. No theory tax.",
      heroCtaPrimary: "Get the Syllabus",
      heroCtaSecondary: "$ ls programs/",

      aboutEyebrow: "// the edge",
      aboutHeadline: "Designers ship. Everyone else talks.",
      aboutBody1:
        "Crit is fast, brutal, and shipped. You'll work in cross-functional squads with engineers and PMs from day one. Push to main. Iterate. Repeat.",
      aboutBody2:
        "Faculty are operators, not academics. They've shipped at scale, raised rounds, and rebuilt their stacks. They expect the same from you.",

      programsEyebrow: "// programs",
      programsHeadline: "Six tracks. Zero filler.",
      programsLede:
        "Build interfaces, products, and systems. Pick a track or compile your own.",
      programsCardCta: "View Track →",

      philosophyEyebrow: "// principles",
      philosophyHeadline: "Make. Ship. Iterate.",

      admissionsEyebrow: "// admissions",
      admissionsHeadline: "Apply. We move fast.",
      admissionsBody:
        "Send work, not credentials. We read every portfolio in 48 hours. Test-optional. 75% get aid. No essays about overcoming adversity.",
      admissionsCta: "Start Application →",

      newsletterHeadline: "// changelog",
      newsletterBody: "Weekly drops from the studio. Unsubscribe anytime.",
      newsletterCta: "Subscribe",

      voiceLabEyebrow: "// tool",
      voiceLabHeadline: "voice_lab.exe",
      voiceLabBody:
        "Generate copy. Output is locked to the active brand persona. No fluff.",
      voiceLabCta: "$ generate",
    },
  },

  humanist: {
    id: "humanist",
    name: "The Humanist",
    shortName: "Warm",
    description: "Empathetic, inviting. Rounded sans, terracotta & sage.",
    swatch: "bg-[hsl(14,55%,48%)] ring-[hsl(95,25%,45%)]",
    copy: {
      brandTagline: "a community for makers",
      ctaPrimary: "Start your Journey",
      ctaSecondary: "Hello, friend",

      heroEyebrow: "since 1985 — a place to grow",
      heroHeadline: (
        <>
          Design with<br />heart and hands.
        </>
      ),
      heroBody:
        "Nexus is a warm, welcoming community of makers, dreamers, and quiet thinkers. Wherever you're starting from, there's a place for you here — and people who'll champion your growth.",
      heroCtaPrimary: "Start your Journey",
      heroCtaSecondary: "Wander our Programs",

      aboutEyebrow: "what makes us, us",
      aboutHeadline: "Good design begins with good listening.",
      aboutBody1:
        "We believe the most enduring work begins with empathy — for the people we make for, the materials we use, and the planet we share. Every studio is small, every voice is heard.",
      aboutBody2:
        "You'll learn alongside scientists, makers, and storytellers. Our faculty mentor with kindness and candour, because growth happens in safe, honest spaces.",

      programsEyebrow: "our programs",
      programsHeadline: "Find the path that feels like yours.",
      programsLede:
        "Six gentle but rigorous paths, each shaped by people who care deeply about the craft and about you.",
      programsCardCta: "Learn more, gently →",

      philosophyEyebrow: "what we believe",
      philosophyHeadline: "We grow by making, together.",

      admissionsEyebrow: "joining us",
      admissionsHeadline: "We'd love to hear your story.",
      admissionsBody:
        "There's no single right way to come to design. We welcome curiosity, kindness, and care above all. Test-optional, and more than 75% of our students receive support.",
      admissionsCta: "Say hello",

      newsletterHeadline: "Letters from the studio",
      newsletterBody: "A warm note from us, once a season. No noise.",
      newsletterCta: "Join us",

      voiceLabEyebrow: "a little tool",
      voiceLabHeadline: "Voice Garden",
      voiceLabBody:
        "Grow gentle, on-brand copy together. All suggestions stay within the persona you've chosen.",
      voiceLabCta: "Plant some words",
    },
  },
};

interface Ctx {
  persona: PersonaId;
  setPersona: (p: PersonaId) => void;
  def: PersonaDef;
  copy: PersonaCopy;
}

const PersonaContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "nexus.persona";

export const PersonaProvider = ({ children }: { children: ReactNode }) => {
  const [persona, setPersonaState] = useState<PersonaId>(() => {
    if (typeof window === "undefined") return "ivy";
    const saved = window.localStorage.getItem(STORAGE_KEY) as PersonaId | null;
    return saved && PERSONAS[saved] ? saved : "ivy";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-persona", persona);
    window.localStorage.setItem(STORAGE_KEY, persona);
  }, [persona]);

  const value: Ctx = {
    persona,
    setPersona: setPersonaState,
    def: PERSONAS[persona],
    copy: PERSONAS[persona].copy,
  };

  return (
    <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error("usePersona must be used inside <PersonaProvider>");
  return ctx;
};
