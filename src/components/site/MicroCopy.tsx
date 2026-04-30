import { useState } from "react";
import { Sparkles, Copy, Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PersonaId, usePersona } from "./persona";

type Context =
  | "404 Page"
  | "Newsletter Signup"
  | "CTA Button"
  | "Empty State"
  | "Loading State"
  | "Section Header";

type Tone = "Headline" | "Body" | "Button";

// Persona-locked copy bank: outputs are restricted to the active brand persona.
const COPY_BANK: Record<PersonaId, Record<Context, Record<Tone, string[]>>> = {
  ivy: {
    "404 Page": {
      Headline: ["Page Not Found", "The Requested Page is Unavailable", "An Unexpected Detour"],
      Body: [
        "The resource you sought could not be located in our archives.",
        "Kindly accept our apologies; this page is no longer in residence.",
        "Pray return to the main hall and resume your enquiry.",
      ],
      Button: ["Return Home", "Resume Browsing", "Contact the Registrar"],
    },
    "Newsletter Signup": {
      Headline: ["The Nexus Quarterly", "Subscribe to Our Dispatches", "Letters from the Academy"],
      Body: [
        "A considered quarterly journal, posted to scholars worldwide.",
        "Receive correspondence from the studio four times per annum.",
        "Reflective writing on craft, theory, and the academic life.",
      ],
      Button: ["Subscribe", "Request Subscription", "Enrol"],
    },
    "CTA Button": {
      Headline: ["Inquire for Prospectus", "Request Application Materials", "Begin Correspondence"],
      Body: [
        "We invite prospective scholars to make a formal enquiry.",
        "Our admissions office welcomes thoughtful correspondence.",
        "Kindly furnish your particulars to receive the prospectus.",
      ],
      Button: ["Inquire", "Request Prospectus", "Submit Enquiry"],
    },
    "Empty State": {
      Headline: ["No Entries on Record", "The Ledger is Empty", "Nothing yet Catalogued"],
      Body: [
        "When entries are filed, they shall appear in this register.",
        "This section awaits its first considered contribution.",
        "Kindly add an item to commence the record.",
      ],
      Button: ["Compose Entry", "Open the Ledger", "Add to Record"],
    },
    "Loading State": {
      Headline: ["Retrieving from Archive", "One Moment, Please", "Consulting the Records"],
      Body: [
        "Your request is being attended to with all due diligence.",
        "Pray excuse the brief delay; the records are being consulted.",
        "We are in the process of preparing your materials.",
      ],
      Button: ["Please Wait", "Stand By", "Retrieving"],
    },
    "Section Header": {
      Headline: ["Our Disciplines", "Programmes of Study", "Faculty & Curriculum"],
      Body: [
        "A considered survey of the disciplines on offer.",
        "Six rigorous programmes, united by a common pursuit of craft.",
        "An invitation to acquaint oneself with our scholarly offerings.",
      ],
      Button: ["Examine Programmes", "Read Prospectus", "Browse Faculty"],
    },
  },
  tech: {
    "404 Page": {
      Headline: ["404 // not found", "page.exe missing", "GET / → null"],
      Body: [
        "Route doesn't exist. Probably never did.",
        "Dead link. Push fix to main.",
        "/* TODO: ship this page */",
      ],
      Button: ["$ cd ~", "Restart", "Open issue"],
    },
    "Newsletter Signup": {
      Headline: ["// changelog", "subscribe()", "Weekly drops"],
      Body: [
        "One email a week. Real builds, real lessons. Unsubscribe anytime.",
        "No fluff. No 'thought leadership.' Just what we shipped.",
        "Join 12k operators reading the Friday drop.",
      ],
      Button: ["Subscribe", "$ ./subscribe", "Get the drop"],
    },
    "CTA Button": {
      Headline: ["Get the Syllabus", "Ship with us", "Apply → fast"],
      Body: [
        "Skip the brochure. Read the actual syllabus.",
        "We answer in 48 hours. Always.",
        "Send work, not credentials.",
      ],
      Button: ["Get Syllabus", "Apply →", "Run it"],
    },
    "Empty State": {
      Headline: ["// nothing here", "0 results", "void"],
      Body: [
        "Empty array. Push something.",
        "No data yet. Time to build.",
        "Ship the first one. We dare you.",
      ],
      Button: ["+ new", "Create", "$ init"],
    },
    "Loading State": {
      Headline: ["loading…", "compiling", "fetching"],
      Body: [
        "Building your view. Should be ~200ms.",
        "Hot reload incoming.",
        "Streaming response…",
      ],
      Button: ["…", "wait()", "stand by"],
    },
    "Section Header": {
      Headline: ["// programs", "Tracks", "What we ship"],
      Body: [
        "Six tracks. Zero filler. Fork your own.",
        "Pick a stack. Ship every week.",
        "Track output, not attendance.",
      ],
      Button: ["View tracks", "$ ls /", "Open repo"],
    },
  },
  humanist: {
    "404 Page": {
      Headline: ["Hmm, that page wandered off", "Looks like a wrong turn", "Let's find our way back"],
      Body: [
        "No worries — these things happen. We'll help you find your way home.",
        "The page you were looking for isn't here, but lots of others are.",
        "Take a breath. We've got you.",
      ],
      Button: ["Take me home", "Wander back", "Start fresh"],
    },
    "Newsletter Signup": {
      Headline: ["Letters from the studio", "Stay in touch with us", "A gentle hello, once a season"],
      Body: [
        "A warm note from us, once a season. No noise, no pressure.",
        "Quiet stories from the people who make Nexus what it is.",
        "We share what we're learning — and we'd love you along.",
      ],
      Button: ["Join us", "Sign me up", "Yes, please"],
    },
    "CTA Button": {
      Headline: ["Start your Journey", "Come and say hello", "Walk with us a while"],
      Body: [
        "Wherever you're starting from, you're welcome here.",
        "Take the first step — we'll meet you there.",
        "There's no rush. Begin when it feels right.",
      ],
      Button: ["Begin", "Say hello", "Walk with us"],
    },
    "Empty State": {
      Headline: ["Nothing here, yet", "A quiet little space", "Room to grow"],
      Body: [
        "Add your first thing whenever you're ready — no pressure.",
        "This is your space. Make it yours.",
        "When you're ready, we'll be here.",
      ],
      Button: ["Add gently", "Start small", "Plant something"],
    },
    "Loading State": {
      Headline: ["Just a moment…", "Tending to your request", "Almost ready"],
      Body: [
        "Thanks for your patience — we'll be right with you.",
        "We're getting things ready, with care.",
        "Slow and steady. Almost there.",
      ],
      Button: ["One sec", "With you soon", "Almost"],
    },
    "Section Header": {
      Headline: ["What we offer", "Paths you might love", "Find your way in"],
      Body: [
        "Six gentle paths, each shaped by people who care.",
        "Browse a little. There's no wrong door.",
        "We made these with you in mind.",
      ],
      Button: ["Explore softly", "Have a look", "Wander in"],
    },
  },
};

const CONTEXTS: Context[] = [
  "404 Page",
  "Newsletter Signup",
  "CTA Button",
  "Empty State",
  "Loading State",
  "Section Header",
];
const TONES: Tone[] = ["Headline", "Body", "Button"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const MicroCopy = () => {
  const { persona, def, copy } = usePersona();
  const [tone, setTone] = useState<Tone>("Button");
  const [context, setContext] = useState<Context>("CTA Button");
  const [results, setResults] = useState<string[]>([]);
  const [spinning, setSpinning] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const generate = () => {
    setSpinning(true);
    setCopiedIdx(null);
    let ticks = 0;
    const interval = setInterval(() => {
      const pool = COPY_BANK[persona][context][tone];
      setResults(shuffle(pool).slice(0, 3));
      ticks++;
      if (ticks > 6) {
        clearInterval(interval);
        setResults(shuffle(COPY_BANK[persona][context][tone]).slice(0, 3));
        setSpinning(false);
      }
    }, 70);
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <section id="microcopy" className="py-20 bg-secondary/40 border-y border-border">
      <div className="container-academy">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-3">{copy.voiceLabEyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            {copy.voiceLabHeadline}
          </h2>
          <p className="text-muted-foreground">{copy.voiceLabBody}</p>
        </div>

        {/* Persona lock indicator */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-2 bg-primary/5 border border-primary/20 rounded-[var(--radius)] text-xs">
          <Lock className="h-3.5 w-3.5 text-primary" />
          <span className="text-muted-foreground">Voice locked to active persona:</span>
          <span className="font-semibold text-primary">{def.name}</span>
        </div>

        <Card className="mb-8 border-border shadow-sm">
          <CardContent className="p-6 grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <div className="space-y-2">
              <Label htmlFor="tone" className="text-primary font-medium">
                Tone
              </Label>
              <Select value={tone} onValueChange={(v) => setTone(v as Tone)}>
                <SelectTrigger id="tone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TONES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="context" className="text-primary font-medium">
                Context
              </Label>
              <Select
                value={context}
                onValueChange={(v) => setContext(v as Context)}
              >
                <SelectTrigger id="context">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CONTEXTS.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={generate}
              disabled={spinning}
              size="lg"
              className="md:w-auto w-full"
            >
              <Sparkles className="h-4 w-4" />
              {spinning ? "Spinning…" : copy.voiceLabCta}
            </Button>
          </CardContent>
        </Card>

        {results.length > 0 && (
          <div className="grid gap-4 md:grid-cols-3">
            {results.map((text, idx) => (
              <Card
                key={idx}
                className={`border-border transition-all duration-200 ${
                  spinning ? "opacity-70" : "hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="eyebrow">Option {idx + 1}</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {def.shortName}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-primary leading-snug flex-1">
                    {text}
                  </p>
                  <button
                    onClick={() => handleCopy(text, idx)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors self-start"
                  >
                    {copiedIdx === idx ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {results.length === 0 && (
          <div className="text-center py-12 border border-dashed border-border rounded-[var(--radius)] text-muted-foreground text-sm">
            Click <span className="font-semibold text-primary">{copy.voiceLabCta}</span> to
            see three on-persona variations.
          </div>
        )}
      </div>
    </section>
  );
};
