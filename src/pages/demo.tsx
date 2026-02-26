import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { clamp, sleep } from "@/lib/utils";
import { Copy, Sparkles, Wand2 } from "lucide-react";

type Platform = "Instagram" | "TikTok" | "YouTube" | "X" | "LinkedIn";

const platformHashtags: Record<Platform, string[]> = {
  Instagram: ["#creator", "#contentcreator", "#reels", "#marketing", "#growth"],
  TikTok: ["#fyp", "#creator", "#contenttips", "#storytelling", "#marketing"],
  YouTube: ["#youtube", "#shorts", "#creator", "#contentstrategy", "#growth"],
  X: ["#buildinpublic", "#marketing", "#creatoreconomy", "#growth", "#founder"],
  LinkedIn: ["#product", "#marketing", "#creatoreconomy", "#startup", "#growth"],
};

const tones = ["Bold", "Calm", "Friendly", "Direct", "Premium"] as const;

export default function Demo() {
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [tone, setTone] = useState<(typeof tones)[number]>("Bold");
  const [topic, setTopic] = useState("Creator distribution infrastructure");
  const [valueProp, setValueProp] = useState("Plan, publish, distribute, and measure content with measurable growth.");
  const [cta, setCta] = useState("Try the live demo");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);

  const hashtags = useMemo(() => suggestHashtags(platform, topic), [platform, topic]);
  const score = useMemo(() => scorePost({ draft, cta }), [draft, cta]);
  const calendar = useMemo(() => buildCalendar(topic, platform), [topic, platform]);

  const generate = async () => {
    setBusy(true);
    await sleep(350);
    setDraft(makeCaption({ platform, tone, topic, valueProp, cta }));
    setBusy(false);
  };

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  };

  return (
    <div className="container-edge py-10">
      <Badge className="w-fit">Live demo</Badge>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Creator Studio simulator</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        This is a lightweight demo that mimics how Amareke feels. No backend required. Use it to test workflows and UI.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="h-5 w-5" />
              Generate a caption
            </CardTitle>
            <CardDescription>Choose a platform, tone, and topic.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">Platform</label>
                <select
                  className="mt-1 h-10 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm shadow-black/5"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value as Platform)}
                >
                  {Object.keys(platformHashtags).map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Tone</label>
                <select
                  className="mt-1 h-10 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-sm shadow-black/5"
                  value={tone}
                  onChange={(e) => setTone(e.target.value as any)}
                >
                  {tones.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Topic</label>
              <Input value={topic} onChange={(e) => setTopic(e.target.value)} />
            </div>

            <div>
              <label className="text-sm font-semibold">Value proposition</label>
              <Textarea value={valueProp} onChange={(e) => setValueProp(e.target.value)} />
            </div>

            <div>
              <label className="text-sm font-semibold">CTA</label>
              <Input value={cta} onChange={(e) => setCta(e.target.value)} />
            </div>

            <Button onClick={generate} className="w-full" size="lg" disabled={busy}>
              <Sparkles className="h-4 w-4" />
              {busy ? "Generating..." : "Generate caption"}
            </Button>

            <div>
              <label className="text-sm font-semibold">Draft</label>
              <Textarea value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Your draft will appear here" />
              <div className="mt-2 flex gap-2">
                <Button type="button" variant="secondary" onClick={() => copy(draft)} disabled={!draft}>
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hashtags</CardTitle>
              <CardDescription>Suggested tags for the selected platform and topic</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {hashtags.map((h) => (
                <button
                  key={h}
                  type="button"
                  className="rounded-full border border-border bg-secondary/60 px-3 py-2 text-xs font-semibold hover:bg-secondary"
                  onClick={() => copy(h)}
                >
                  {h}
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Post score</CardTitle>
              <CardDescription>Heuristic scoring for clarity, structure, and CTA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Score</div>
                <div className="text-sm font-semibold text-primary">{score.total}</div>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full rounded-full bg-primary" style={{ width: `${score.total}%` }} />
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <ScorePill label="Hook" value={score.hook} />
                <ScorePill label="Clarity" value={score.clarity} />
                <ScorePill label="Structure" value={score.structure} />
                <ScorePill label="CTA" value={score.cta} />
              </div>
              <p className="text-sm text-muted-foreground">{score.note}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7 day calendar</CardTitle>
              <CardDescription>Suggested posts you can repurpose</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {calendar.map((c) => (
                <div key={c.day} className="rounded-2xl border border-border bg-secondary/50 p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{c.day}</div>
                    <Badge>{c.format}</Badge>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.idea}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>How this demo relates to the real product</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="a">
                <AccordionTrigger>Is this connected to a real backend</AccordionTrigger>
                <AccordionContent>
                  Not yet. This page is a front end simulator that demonstrates UX, flows, and the kinds of outputs Amareke will generate.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>Can I use this content commercially</AccordionTrigger>
                <AccordionContent>
                  You can use it as inspiration. For production usage, the platform will provide versioning, approvals, and workspace history.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionTrigger>How do I get early access</AccordionTrigger>
                <AccordionContent>
                  Use the Request demo button in the header or send an email to hello@amareke.com with your use case and platforms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function suggestHashtags(platform: Platform, topic: string) {
  const base = platformHashtags[platform];
  const words = topic
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 4);

  const topical = words.map((w) => `#${w.replace(/[^a-z0-9]/g, "")}`).filter((h) => h.length > 2);
  const combined = Array.from(new Set([...base, ...topical]));
  return combined.slice(0, 12);
}

function scorePost({ draft, cta }: { draft: string; cta: string }) {
  const text = (draft || "").trim();
  const len = text.length;
  const lines = text.split(/\n+/).filter(Boolean);

  const hook = clamp(Math.round((lines[0]?.length ? 40 : 10) + Math.min(20, (lines[0]?.length || 0) / 6)), 0, 100);
  const clarity = clamp(Math.round(30 + Math.min(40, len / 8)), 0, 100);
  const structure = clamp(Math.round(20 + Math.min(40, lines.length * 8)), 0, 100);

  const ctaPresent = cta && text.toLowerCase().includes(cta.toLowerCase().slice(0, 6));
  const ctaScore = clamp((ctaPresent ? 70 : 35) + Math.min(30, (cta?.length || 0) * 2), 0, 100);

  const total = clamp(Math.round((hook * 0.25 + clarity * 0.25 + structure * 0.25 + ctaScore * 0.25)), 0, 100);

  const note =
    total >= 85
      ? "Strong draft. Add one concrete metric (time saved, clicks, revenue) to increase conversion."
      : total >= 65
      ? "Good foundation. Make the first line punchier and tighten the CTA to one action."
      : "Draft needs a clearer hook and a stronger call to action. Try shorter sentences and one concrete promise.";

  return { hook, clarity, structure, cta: ctaScore, total, note };
}

function makeCaption({
  platform,
  tone,
  topic,
  valueProp,
  cta,
}: {
  platform: Platform;
  tone: (typeof tones)[number];
  topic: string;
  valueProp: string;
  cta: string;
}) {
  const t = topic.trim() || "your topic";
  const vp = valueProp.trim() || "a clear value proposition";
  const call = cta.trim() || "Take action";

  const openers: Record<(typeof tones)[number], string[]> = {
    Bold: [
      `Stop guessing. ${t} should feel predictable.`,
      `If you want results, treat ${t} like infrastructure.`,
      `Creators who win do one thing: they ship distribution, not vibes.`,
    ],
    Calm: [
      `A simple way to think about ${t}.`,
      `Here is a practical approach to ${t}.`,
      `If you feel overwhelmed, this helps:`,
    ],
    Friendly: [
      `Quick tip on ${t} 👇`,
      `Sharing what is working for ${t}.`,
      `If you are building ${t}, this will help.`,
    ],
    Direct: [
      `Problem: inconsistent output. Fix: ${t}.`,
      `What you measure improves. ${t} is the system.`,
      `Build the workflow. Then publish.`,
    ],
    Premium: [
      `Distribution is a compounding asset.`,
      `High performers operationalize ${t}.`,
      `Consistency is designed, not hoped for.`,
    ],
  };

  const formats: Record<Platform, string> = {
    Instagram: "Keep it short. Use punchy lines. End with a clear CTA.",
    TikTok: "Hook fast. Use one promise. Add a direct CTA.",
    YouTube: "Set context. Promise payoff. Invite people to watch or subscribe.",
    X: "Write like a thread starter. Make it quotable.",
    LinkedIn: "Make it strategic. Add a lesson and a concrete takeaway.",
  };

  const opener = pick(openers[tone]);
  const body = [
    opener,
    "",
    vp,
    "",
    `Platform note: ${formats[platform]}`,
    "",
    `CTA: ${call}`,
  ].join("\n");

  return body.trim();
}

function buildCalendar(topic: string, platform: Platform) {
  const t = topic.trim() || "your topic";
  const formats: Record<Platform, string[]> = {
    Instagram: ["Reel", "Carousel", "Story", "Reel", "Carousel", "Story", "Reel"],
    TikTok: ["Video", "Video", "Live", "Video", "Video", "Duet", "Video"],
    YouTube: ["Short", "Short", "Community", "Short", "Long form", "Short", "Short"],
    X: ["Post", "Thread", "Post", "Thread", "Post", "Post", "Thread"],
    LinkedIn: ["Post", "Carousel", "Post", "Post", "Carousel", "Post", "Post"],
  };

  const ideas = [
    `Define ${t} in one sentence and why it matters.`,
    `Three common mistakes people make with ${t}.`,
    `A simple checklist you can reuse for ${t}.`,
    `A short case study showing outcomes from ${t}.`,
    `Your framework: inputs, process, outputs for ${t}.`,
    `Behind the scenes: how you execute ${t} weekly.`,
    `One contrarian take about ${t} and your evidence.`,
  ];

  return Array.from({ length: 7 }).map((_, i) => ({
    day: `Day ${i + 1}`,
    format: formats[platform][i],
    idea: ideas[i],
  }));
}

function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function ScorePill({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/50 p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
