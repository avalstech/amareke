import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container-edge py-10">
      <Badge className="w-fit">About</Badge>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Why Amareke exists</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Most creator tools focus on making content. Amareke focuses on distribution and measurable outcomes. The goal is simple: help creators and brands build repeatable growth systems.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Speed</CardTitle>
            <CardDescription>Workflows that reduce time from idea to publish.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Templates, calendars, and AI assistance help you ship consistently without burning out.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trust</CardTitle>
            <CardDescription>Accountability across collaborations.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Clear approvals, deliverables, and reporting for creators, brands, and agencies.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Outcomes</CardTitle>
            <CardDescription>Metrics tied to growth, not vanity.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Smart links and campaign reporting make it easy to see what converts and why.
          </CardContent>
        </Card>
      </div>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Company statement</CardTitle>
          <CardDescription>Short boilerplate you can reuse</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Amareke is a creator distribution infrastructure platform that helps creators, brands, and agencies plan, publish, and measure content performance across channels. Amareke combines a Creator Studio, smart links, campaign workflows, and analytics to turn content into repeatable growth.
        </CardContent>
      </Card>
    </div>
  );
}
