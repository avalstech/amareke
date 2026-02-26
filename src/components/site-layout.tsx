import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube, MessageCircle, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/product", label: "Product" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
  { to: "/demo", label: "Live demo" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/company/amareke", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/amareke", label: "X", icon: Twitter },
  { href: "https://www.instagram.com/amareke", label: "Instagram", icon: Instagram },
  { href: "https://www.youtube.com/@amareke", label: "YouTube", icon: Youtube },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-50 dark:opacity-30" />
      <Header />
      <main className={cn("pb-20", isHome ? "" : "pt-6")}>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur">
      <div className="container-edge flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm shadow-black/10">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Amareke</div>
            <div className="hidden text-xs text-muted-foreground sm:block">
              Creator Distribution Infrastructure
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn(
                  "rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                  isActive && "bg-secondary text-foreground"
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="/contact#request-demo">
              Request demo <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="sm" variant="outline" className="lg:hidden">
            <a href="#menu">Menu</a>
          </Button>
        </div>
      </div>

      <MobileMenu />
    </header>
  );
}

function MobileMenu() {
  return (
    <div id="menu" className="lg:hidden border-t border-border">
      <div className="container-edge py-3 flex flex-wrap gap-2">
        {nav.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            className={({ isActive }) =>
              cn(
                "rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                isActive && "bg-secondary text-foreground"
              )
            }
          >
            {n.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-edge py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="text-base font-semibold">Amareke</div>
            <p className="text-sm text-muted-foreground">
              Infrastructure for creators and brands to plan, publish, distribute, and measure content that actually grows.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm">
                <Link to="/demo">
                  Try live demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/docs">Read docs</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="text-sm font-semibold">Product</div>
              <FooterLink to="/product" label="Features" />
              <FooterLink to="/pricing" label="Pricing" />
              <FooterLink to="/docs" label="API & docs" />
              <FooterLink to="/demo" label="Live demo" />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold">Company</div>
              <FooterLink to="/about" label="About" />
              <FooterLink to="/contact" label="Contact" />
              <a className="block text-sm text-muted-foreground hover:text-foreground" href="mailto:hello@amareke.com">
                hello@amareke.com
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Social</div>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-3 py-2 text-sm text-foreground hover:bg-secondary"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Amareke. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <Link className="block text-sm text-muted-foreground hover:text-foreground" to={to}>
      {label}
    </Link>
  );
}

function FloatingWhatsApp() {
  const phone = "2340000000000";
  const msg = encodeURIComponent("Hi Amareke team, I want to learn more about Amareke.");
  const wa = `https://wa.me/${phone}?text=${msg}`;

  return (
    <motion.a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-black/20"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35 }}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </motion.a>
  );
}
