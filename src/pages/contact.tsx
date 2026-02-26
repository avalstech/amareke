import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Amareke demo request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\nMessage:\n${message}`
    );
    return `mailto:hello@amareke.com?subject=${subject}&body=${body}`;
  }, [name, email, role, message]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 450));
    window.location.href = mailto;
    setStatus("sent");
  };

  return (
    <div className="container-edge py-10" id="request-demo">
      <Badge className="w-fit">Contact</Badge>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Request a demo</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Share your use case and we will map the right workflow. This form opens your email client with a prefilled message.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>We reply within 24 to 48 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-3" onSubmit={onSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold">Name</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
                </div>
                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" type="email" required />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">Role</label>
                <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Creator, Brand, Agency, Community" />
              </div>

              <div>
                <label className="text-sm font-semibold">Message</label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you want to build or measure." required />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Opening email..." : "Request demo"}
                <ArrowRight className="h-4 w-4" />
              </Button>

              <a
                href="mailto:hello@amareke.com"
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm font-semibold hover:bg-secondary"
              >
                <Mail className="h-4 w-4" />
                Email hello@amareke.com
              </a>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>So we can respond precisely</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <Line text="Your audience and primary platforms" />
            <Line text="Your publishing cadence and team size" />
            <Line text="What you want to measure (leads, sales, installs)" />
            <Line text="Any existing tools you use today" />
            <Line text="If you need brand approvals and deliverables" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Line({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
      <span>{text}</span>
    </div>
  );
}
