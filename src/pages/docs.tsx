import { Link } from "react-router-dom";
import { ArrowRight, Braces, KeyRound, Link2, Webhook } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Docs() {
  return (
    <div className="container-edge py-10">
      <Badge className="w-fit">Docs</Badge>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Docs that help you ship</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        This site is a marketing build with a realistic live demo. When the platform is connected, these docs become the developer portal and onboarding guide.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <DocCard
          icon={KeyRound}
          title="Authentication"
          desc="SSO, workspace roles, and secure token exchange."
          bullets={["Workspace memberships", "Roles and permissions", "API tokens"]}
        />
        <DocCard
          icon={Link2}
          title="Smart links"
          desc="Create links, set campaign metadata, and track outcomes."
          bullets={["Link structure", "UTM presets", "Attribution fields"]}
        />
        <DocCard
          icon={Webhook}
          title="Webhooks"
          desc="Receive events for approvals, publishing, and campaign milestones."
          bullets={["Event types", "Retries and signatures", "Idempotency"]}
        />
        <DocCard
          icon={Braces}
          title="API reference"
          desc="Routes, payloads, and pagination patterns."
          bullets={["REST resources", "Error codes", "Rate limits"]}
        />
      </div>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Want the platform API spec</CardTitle>
          <CardDescription>
            Tell us what you are building. We will share the right integration docs and a reference implementation.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/contact#request-demo">
              Request access <ArrowRight className="h-4 w-4" />
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

function DocCard({
  icon: Icon,
  title,
  desc,
  bullets,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-secondary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {bullets.map((b) => (
          <div key={b} className="text-sm text-muted-foreground">
            • {b}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
