import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Link2, ShieldCheck, Sparkles, Wand2, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "Creator Studio",
    desc: "Plan content, generate variations, and keep your brand voice consistent across channels.",
  },
  {
    icon: Link2,
    title: "Smart links",
    desc: "One link for every campaign. Track clicks, conversions, and audience sources.",
  },
  {
    icon: BarChart3,
    title: "Performance analytics",
    desc: "Understand what works, why it works, and what to ship next with confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Trust layer",
    desc: "Verification, deliverables, approvals, and audit trails for creator and brand collaboration.",
  },
  {
    icon: Wand2,
    title: "AI assistance",
    desc: "Captions, hooks, ad copy, scripts, and content calendars, designed for speed.",
  },
  {
    icon: Zap,
    title: "Distribution workflows",
    desc: "Publish checklists, repurpose pipelines, and handoffs for teams and agencies.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 overflow-hidden">
            <CardHeader>
              <CardTitle>What Amareke is</CardTitle>
              <CardDescription>
                A modern operating system for creators, brands, and agencies to ship content that grows.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <KPI title="Faster production" value="2×" note="by turning research into reusable assets" />
                <KPI title="Cleaner execution" value="1 place" note="for briefs, approvals, and deliverables" />
                <KPI title="Better distribution" value="Multi" note="platform scheduling and repurposing" />
                <KPI title="Measurable ROI" value="Track" note="clicks, conversions, and audience sources" />
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge>Creators</Badge>
                <Badge>Brands</Badge>
                <Badge>Agencies</Badge>
                <Badge>Communities</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>Try the live demo</CardTitle>
              <CardDescription>Experience the Creator Studio flow with realistic UI.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl border border-border bg-secondary/60 p-4 text-sm">
                Generate captions
                <br />
                Get hashtags
                <br />
                Score a post
                <br />
                Build a 7 day calendar
              </div>
              <Button asChild className="w-full">
                <Link to="/demo">
                  Open live demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact#request-demo">Request a real demo</Link>
              </Button>
            </CardContent>

            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/25 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Built for distribution, not just creation</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Creators win when content is shipped consistently and measured honestly.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/product">See full product</Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-secondary text-foreground">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold">{f.title}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <CTA />
      </Section>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="container-edge py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge className="bg-primary/15 text-foreground border-primary/25">Creator Distribution Infrastructure</Badge>

            <motion.h1
              className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ship content that grows
              <span className="text-primary"> with an operating system built for creators.</span>
            </motion.h1>

            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Amareke helps you plan, publish, distribute, and measure content with clarity. From creator studios to smart links and campaign analytics, everything is designed for speed and trust.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact#request-demo">
                  Request demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/demo">Try live demo</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <MiniStat label="Planning" value="Briefs → calendar" />
              <MiniStat label="Publishing" value="Multi platform" />
              <MiniStat label="Measurement" value="Clicks → ROI" />
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="glass rounded-3xl p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">Creator Studio</div>
                <Badge>Preview</Badge>
              </div>

              <div className="mt-4 grid gap-3">
                <DemoLine label="Hook" value="Stop scrolling if you want growth without guesswork." />
                <DemoLine label="Caption" value="Today we’re launching a creator distribution stack built for speed." />
                <DemoLine label="Hashtags" value="#creatoreconomy #contentstrategy #growth" />
                <div className="rounded-2xl border border-border bg-secondary/60 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Post score</div>
                    <div className="text-sm font-semibold text-primary">86</div>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-border">
                    <div className="h-full w-[86%] rounded-full bg-primary" />
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Strong hook. Add one concrete metric and a clearer CTA for better conversion.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge className="bg-gold/15 border-gold/25">Distribution</Badge>
                <Badge className="bg-primary/15 border-primary/25">Analytics</Badge>
                <Badge className="bg-secondary/70">Workflow</Badge>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/25 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-gold/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="container-edge py-12 sm:py-14">{children}</section>;
}

function KPI({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/50 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{note}</div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary/50 p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function DemoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <div className="text-xs font-semibold text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}

function CTA() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Ready to build your distribution engine</CardTitle>
        <CardDescription>
          If you want consistency, clarity, and measurable growth, Amareke is built for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">
        <Button asChild size="lg">
          <Link to="/contact#request-demo">
            Request demo <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/pricing">View pricing</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link to="/docs">Read docs</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
