import { useState } from "react";
import { Sparkles, Copy, Check } from "lucide-react";
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

type Tone = "Professional" | "Playful" | "Urgent" | "Friendly" | "Minimal";
type Context =
  | "404 Page"
  | "Newsletter Signup"
  | "CTA Button"
  | "Empty State"
  | "Loading State"
  | "Section Header";

const COPY_BANK: Record<Context, Record<Tone, string[]>> = {
  "404 Page": {
    Professional: [
      "Page Not Found",
      "The requested resource is unavailable.",
      "Return to homepage",
    ],
    Playful: [
      "Whoops, wrong turn!",
      "This page took a sabbatical.",
      "Let's get you back on track →",
    ],
    Urgent: [
      "404 — Page Missing",
      "We couldn't locate this page.",
      "Go back now",
    ],
    Friendly: [
      "Hmm, we can't find that page",
      "But hey, no worries — happens to the best of us.",
      "Take me home",
    ],
    Minimal: ["404", "Not found.", "Home"],
  },
  "Newsletter Signup": {
    Professional: [
      "Subscribe to our newsletter",
      "Receive industry insights, delivered weekly.",
      "Subscribe",
    ],
    Playful: [
      "Inbox, meet your new favorite read",
      "Smart takes. Zero fluff. Unsubscribe anytime.",
      "Sign me up!",
    ],
    Urgent: [
      "Don't miss the next drop",
      "Join 12,000+ readers before the next issue ships.",
      "Get on the list",
    ],
    Friendly: [
      "Stay in the loop",
      "A thoughtful email, every Tuesday morning.",
      "Join us",
    ],
    Minimal: ["Subscribe", "Weekly. No spam.", "Join"],
  },
  "CTA Button": {
    Professional: ["Get Started", "Request a Demo", "Learn More"],
    Playful: ["Let's Go!", "Take it for a spin", "Show me the magic"],
    Urgent: ["Start Now — Free", "Claim Your Spot", "Try It Today"],
    Friendly: ["Come on in", "Give it a try", "See how it works"],
    Minimal: ["Start", "Try", "Begin"],
  },
  "Empty State": {
    Professional: [
      "No items to display",
      "Once you add data, it will appear here.",
      "Add new item",
    ],
    Playful: [
      "It's quiet in here…",
      "Like, tumbleweed quiet. Add something!",
      "Create your first one",
    ],
    Urgent: [
      "Nothing here yet",
      "Add your first entry to get started.",
      "Create now",
    ],
    Friendly: [
      "Nothing to see — yet",
      "When you add something, we'll show it here.",
      "Add one",
    ],
    Minimal: ["Empty.", "Add to begin.", "New"],
  },
  "Loading State": {
    Professional: [
      "Loading…",
      "Please wait while we retrieve your data.",
      "This won't take long",
    ],
    Playful: [
      "Hold tight, magic in progress…",
      "Polishing the pixels…",
      "Almost there!",
    ],
    Urgent: [
      "Loading — please wait",
      "Fetching the latest results now.",
      "Just a moment",
    ],
    Friendly: [
      "Just a sec…",
      "We're getting things ready for you.",
      "Almost done",
    ],
    Minimal: ["Loading.", "One moment.", "…"],
  },
  "Section Header": {
    Professional: [
      "Our Services",
      "Comprehensive solutions for modern teams.",
      "Explore our offerings",
    ],
    Playful: [
      "The good stuff",
      "Everything we do, in one tidy spot.",
      "Have a look around",
    ],
    Urgent: [
      "What We Do — At a Glance",
      "Built for teams who can't afford to wait.",
      "See it in action",
    ],
    Friendly: [
      "Here's what we offer",
      "A quick look at how we can help.",
      "Browse services",
    ],
    Minimal: ["Services.", "What we do.", "Explore"],
  },
};

const TONES: Tone[] = ["Professional", "Playful", "Urgent", "Friendly", "Minimal"];
const CONTEXTS: Context[] = [
  "404 Page",
  "Newsletter Signup",
  "CTA Button",
  "Empty State",
  "Loading State",
  "Section Header",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const MicroCopy = () => {
  const [tone, setTone] = useState<Tone>("Professional");
  const [context, setContext] = useState<Context>("CTA Button");
  const [results, setResults] = useState<string[]>([]);
  const [spinning, setSpinning] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const generate = () => {
    setSpinning(true);
    setCopiedIdx(null);
    // brief shuffle effect
    let ticks = 0;
    const interval = setInterval(() => {
      setResults(shuffle(COPY_BANK[context][tone]));
      ticks++;
      if (ticks > 6) {
        clearInterval(interval);
        setResults(shuffle(COPY_BANK[context][tone]));
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
          <p className="eyebrow mb-3">Studio Tool</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            UX Micro-Copy Randomizer
          </h2>
          <p className="text-muted-foreground">
            Pick a tone and a context, then generate three on-brand copy
            variations for buttons, headers, and more.
          </p>
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
              {spinning ? "Spinning…" : "Generate"}
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
                      {tone}
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
          <div className="text-center py-12 border border-dashed border-border rounded-md text-muted-foreground text-sm">
            Click <span className="font-semibold text-primary">Generate</span> to
            see three copy variations.
          </div>
        )}
      </div>
    </section>
  );
};
