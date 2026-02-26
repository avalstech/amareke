import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, CheckCircle2, Globe2, Layers3, Link2, ShieldCheck, Users, Wand2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pillars = [
  {
    icon: Layers3,
    title: "Creator Studio",
    points: [
      "Briefs, research, brand voice, and reusable templates",
      "Content calendar built for repurposing",
      "Approval workflows for teams and clients",
    ],
  },
  {
    icon: Link2,
    title: "Smart Links + Campaigns",
    points: [
      "Track performance by platform, creator, and campaign",
      "Attribution ready link structure",
      "UTM presets and clean reporting",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    points: [
      "Top posts, top formats, and top distribution channels",
      "Recommendations for next content to ship",
      "Exportable reports for brands and agencies",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Trust Layer",
    points: [
      "Creator verification and deliverables",
      "Brand approvals and audit trails",
      "Clear accountability across collaborations",
    ],
  },
];

const useCases = [
  {
    icon: Users,
    title: "Creators",
    desc: "Move faster with calendars, templates, and a workflow that keeps you consistent.",
  },
  {
    icon: Globe2,
    title: "Brands",
    desc: "Run creator campaigns with approvals, reporting, and outcomes you can defend.",
  },
  {
    icon: Wand2,
    title: "Agencies",
    desc: "Standardize execution and scale your delivery across multiple clients and creators.",
  },
];

export default function Product() {
  return (
    <div className="container-edge py-10">
      <div className="flex flex-col gap-2">
        <Badge className="w-fit">Product</Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to distribute at scale</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Amareke is built around a simple idea: creators win when distribution is operationalized. The product is organized into four pillars.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {pillars.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-secondary">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>Built for speed and trust</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {p.points.map((pt) => (
                <div key={pt} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{pt}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {useCases.map((u) => (
          <Card key={u.title} className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-secondary">
                  <u.icon className="h-5 w-5" />
                </div>
                <div className="font-semibold">{u.title}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{u.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Want a tailored walkthrough</CardTitle>
          <CardDescription>
            Tell us your use case and we will map the right workflow for creators, brands, or agencies.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contact#request-demo">
              Request demo <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/demo">Try live demo</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
