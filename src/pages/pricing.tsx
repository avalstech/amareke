import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  priceMonthly: number;
  priceYearly: number;
  desc: string;
  bullets: string[];
  cta: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    priceMonthly: 0,
    priceYearly: 0,
    desc: "For creators testing the workflow.",
    bullets: ["Creator Studio preview", "Smart link tracking (limited)", "Basic analytics", "Community support"],
    cta: "Start free",
  },
  {
    name: "Creator Pro",
    priceMonthly: 19,
    priceYearly: 190,
    desc: "For creators publishing weekly and building a real engine.",
    bullets: ["Full Creator Studio", "Unlimited smart links", "Content calendar + templates", "Performance insights", "Exports"],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Teams",
    priceMonthly: 79,
    priceYearly: 790,
    desc: "For brands and agencies running campaigns.",
    bullets: ["Team workspace", "Approvals + audit trail", "Campaign reporting", "Creator collaboration", "Priority support"],
    cta: "Talk to sales",
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const displayed = useMemo(
    () =>
      plans.map((p) => ({
        ...p,
        price: billing === "monthly" ? p.priceMonthly : p.priceYearly,
      })),
    [billing]
  );

  return (
    <div className="container-edge py-10">
      <Badge className="w-fit">Pricing</Badge>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Simple plans for creators and teams</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Start free, then upgrade as your distribution system matures. Yearly billing includes a discount.
      </p>

      <div className="mt-6 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setBilling("monthly")}
          className={cn(
            "rounded-xl border border-border px-4 py-2 text-sm font-semibold",
            billing === "monthly" ? "bg-primary text-primary-foreground" : "bg-secondary/60 hover:bg-secondary"
          )}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => setBilling("yearly")}
          className={cn(
            "rounded-xl border border-border px-4 py-2 text-sm font-semibold",
            billing === "yearly" ? "bg-primary text-primary-foreground" : "bg-secondary/60 hover:bg-secondary"
          )}
        >
          Yearly
        </button>
        <Badge className="ml-2 bg-gold/15 border-gold/25">Save ~2 months</Badge>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {displayed.map((p) => (
          <Card key={p.name} className={cn("h-full", p.highlight && "ring-2 ring-primary")}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{p.name}</span>
                {p.highlight ? <Badge className="bg-primary/15 border-primary/25">Most popular</Badge> : null}
              </CardTitle>
              <CardDescription>{p.desc}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-end gap-2">
                <div className="text-4xl font-semibold tracking-tight">
                  {p.price === 0 ? "Free" : `$${p.price}`}
                </div>
                {p.price !== 0 ? (
                  <div className="pb-1 text-sm text-muted-foreground">/{billing}</div>
                ) : null}
              </div>

              <div className="space-y-2">
                {p.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-3">
              <Button asChild className="w-full" variant={p.highlight ? "primary" : "secondary"}>
                <Link to="/contact#request-demo">
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Need enterprise pricing</CardTitle>
          <CardDescription>
            If you need SSO, custom reporting, SLAs, or white label workflows, we can package it.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contact#request-demo">
              Contact sales <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/docs">Read docs</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
