import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowRight, Printer, Globe2, Smartphone, MonitorCog, Mail, Phone, MapPin, Check, ShieldCheck, MessageCircle, Menu, X, Plus, Wrench, FileCheck2, HeartHandshake } from "lucide-react";
import printing from "@/assets/service-printing.jpg?format=webp&quality=80";
import eseva from "@/assets/service-eseva.jpg?format=webp&quality=80";
import mobile from "@/assets/service-mobile.jpg?format=webp&quality=80";
import amc from "@/assets/service-amc.jpg?format=webp&quality=80";
import invitations from "@/assets/service-invitations.jpg?format=webp&quality=80";
import shop from "@/assets/thozha-shop.jpeg.asset.json";
import logo from "@/assets/thozha-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { business, enquiryUrl } from "@/lib/business";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "preload", as: "image", href: shop.url, fetchPriority: "high" }],
    meta: [
      { title: "Thozha Ventures | Printing, e-Sevai & Computer Services in Chennai" },
      { name: "description", content: "Your neighbourhood digital partner in Pattinapakkam, Chennai. Printing, e-Sevai applications, mobile and computer repairs, accessories and custom invitations. Call 87782 18342." },
      { property: "og:title", content: "Thozha Ventures — Local service. Lasting trust." },
      { property: "og:description", content: "Printing, online applications and everyday tech support at 18-B Srinivasapuram, Pattinapakkam, Chennai. Serving you since 2017." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Printing & document services", category: "Print & design", icon: Printer, image: printing, alt: "Document printing equipment", description: "From a single copy to your next big project. Crisp prints, carefully finished.", points: ["Colour & black-and-white Xerox", "Printouts, scanning & lamination", "Spiral binding & ID cards" ] },
  { title: "e-Sevai & online applications", category: "Digital services", icon: Globe2, image: eseva, alt: "Digital application assistance", description: "A helping hand with your applications, documents and everyday online needs.", points: ["Birth & death certificate applications", "PAN card, passport & voter ID assistance", "Government portals & online forms"] },
  { title: "Mobile service & accessories", category: "Tech & repairs", icon: Smartphone, image: mobile, alt: "Mobile phone service", description: "Keep your everyday essentials connected, working and ready to go.", points: ["Mobile service & recharge", "Setup & data transfer assistance", "Mobile & computer accessories"] },
  { title: "Computer, laptop & AMC", category: "Tech & repairs", icon: MonitorCog, image: amc, alt: "Computer maintenance and repair", description: "Reliable support for the devices you depend on, at home or at work.", points: ["Computer & laptop servicing", "System assembly, software & OS installation", "Data recovery & maintenance support"] },
  { title: "Invitations & custom printing", category: "Print & design", icon: Mail, image: invitations, alt: "Printed celebration invitations", description: "Make your special moments feel personal. Your occasion, your invitation.", points: ["Weddings, engagements & birthdays", "Housewarming & family ceremonies", "Personalised designs & printing"] },
  { title: "Printer service & office essentials", category: "Tech & repairs", icon: Wrench, image: printing, alt: "Printer and office document services", description: "Practical solutions for your workspace, studies and everyday business.", points: ["Printer servicing & toner refilling", "School, college & office stationery", "Vehicle insurance application assistance"] },
];
const categories = ["All services", "Print & design", "Digital services", "Tech & repairs"];
const faqs = [
  { q: "Can I send my documents before visiting?", a: "Message us on WhatsApp with the service you need. We can confirm the document requirements and discuss your printing or application request before you visit." },
  { q: "Which documents do I need for e-Sevai services?", a: "Requirements vary by application. Share what you need on WhatsApp and we will tell you the exact documents to bring." },
  { q: "Do you offer same-day printing?", a: "Most standard printing jobs are completed while you wait or the same day. Larger or custom orders may need a little more time." },
  { q: "What are your opening hours?", a: "We are open Monday to Saturday from 9:30 AM to 10:00 PM. Sunday is a full holiday." },
];
const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0].title);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [filter, setFilter] = useState("All services");

  const filtered = filter === "All services" ? services : services.filter(s => s.category === filter);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.open(enquiryUrl(selectedService, name, details), "_blank", "noreferrer");
  }

  return (
    <div id="top">
      <div className="bg-ink text-ink-foreground">
        <div className="site-container flex min-h-9 items-center justify-between gap-4 text-[11px] sm:text-xs">
          <p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" /> Your neighbourhood digital partner · Since 2017</p>
          <a href={`tel:${business.phone}`} className="hidden items-center gap-2 sm:flex"><Phone className="size-3" /> {business.phone}</a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-md">
        <div className="site-container flex h-20 items-center justify-between gap-4">
          <a href="#top" aria-label="Thozha Ventures home" className="flex items-center gap-3">
            <img src={logo.url} alt="Thozha Ventures logo" width={48} height={34} className="h-9 w-12 object-contain" />
            <span><span className="block font-display text-lg font-extrabold sm:text-xl">THOZHA<span className="text-primary">.</span></span><span className="block text-[10px] font-medium text-muted-foreground">VENTURES · CHENNAI</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">{nav.map(n => <Button asChild variant="link" key={n.href} className="px-0 text-foreground no-underline hover:text-primary hover:no-underline"><a href={n.href}>{n.label}</a></Button>)}</nav>
          <div className="flex items-center gap-2"><Button asChild className="hidden h-10 sm:inline-flex"><a href={enquiryUrl("your services")} target="_blank" rel="noreferrer"><MessageCircle /> Let's talk <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
        </div>
        {menuOpen && <nav id="mobile-nav" aria-label="Mobile navigation" className="site-container flex flex-col border-t py-3 lg:hidden">{nav.map(n => <Button asChild variant="ghost" key={n.href} className="justify-start" onClick={() => setMenuOpen(false)}><a href={n.href}>{n.label}<ArrowUpRight className="ml-auto" /></a></Button>)}</nav>}
      </header>
      <main>
        <section className="hero">
          <img src={shop.url} alt="The Thozha Ventures storefront in Pattinapakkam, Chennai" width={652} height={844} fetchPriority="high" decoding="async" className="hero-photo" />
          <div className="hero-wash" />
          <div className="site-container hero-content">
            <Reveal>
              <p className="eyebrow text-primary">Pattinapakkam · Chennai</p>
              <h1 className="hero-title mt-5">Local service.<br /><span>Lasting trust.</span></h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">Printing, e-Sevai, mobile & computer support and custom invitations — all under one roof since 2017.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href={enquiryUrl("your services")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us <ArrowUpRight /></a></Button>
                <Button asChild variant="outline" size="lg"><a href="#services">View services <ArrowRight /></a></Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="section-space">
          <div className="site-container">
            <Reveal><p className="eyebrow text-primary">What we do</p><h2 className="section-title mt-4">Everything you need,<br />close to home.</h2></Reveal>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map(c => (
                <Button key={c} variant={filter === c ? "default" : "outline"} size="sm" onClick={() => setFilter(c)}>{c}</Button>
              ))}
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s, i) => (
                <Reveal key={s.title} delay={i * 50}>
                  <article className="service-item">
                    <img src={s.image} alt={s.alt} className="service-image" loading="lazy" decoding="async" />
                    <div className="p-5">
                      <div className="flex items-center gap-2"><s.icon className="size-4 text-primary" /><span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.category}</span></div>
                      <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                      <ul className="mt-4 space-y-1.5">{s.points.map(p => <li key={p} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 size-3.5 shrink-0 text-primary" />{p}</li>)}</ul>
                      <Button asChild variant="link" className="mt-4 px-0"><a href={enquiryUrl(s.title)} target="_blank" rel="noreferrer">Enquire on WhatsApp <ArrowUpRight /></a></Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space bg-secondary"><div className="site-container grid items-center gap-12 lg:grid-cols-2"><Reveal><div className="relative"><img src={shop.url} alt="Visit our real Thozha Ventures shop and accessories counter" width={652} height={844} loading="lazy" decoding="async" className="h-[420px] w-full rounded-lg object-cover object-center" /><div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-md bg-background p-5"><div><p className="text-xs text-muted-foreground">Your local digital partner</p><p className="mt-1 font-display text-lg font-bold">Right here in Chennai.</p></div><MapPin className="size-6 text-primary" /></div></div></Reveal><Reveal delay={100}><p className="eyebrow text-primary">A little about us</p><h2 className="section-title mt-4">Big on service.<br />Close to home.</h2><p className="mt-6 text-base leading-relaxed text-muted-foreground">Since 1st May 2017, Thozha Ventures has brought everyday printing, digital and technical services together in one place. We’re here for the student with an application, the family planning a celebration, and the business keeping its systems running.</p><p className="mt-4 text-base leading-relaxed text-muted-foreground">No complicated conversations. Just friendly help, careful work and someone you can talk to.</p><div className="mt-7 grid gap-4 sm:grid-cols-2">{["Personal, one-to-one assistance", "Multiple services in one place", "Support for home & business", "Care with your documents"].map(t => <p key={t} className="flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />{t}</p>)}</div><Button asChild variant="link" className="mt-6 px-0"><a href="#contact">Come say hello <ArrowRight /></a></Button></Reveal></div></section>

        <section className="bg-ink py-12 text-ink-foreground"><div className="site-container grid gap-8 md:grid-cols-3">{[{ icon: ShieldCheck, title: "Common Services Centre", value: `CSC ID · ${business.cscId}` }, { icon: FileCheck2, title: "Tamil Nadu e-Sevai centre", value: `Centre ID · ${business.esevaId}` }, { icon: HeartHandshake, title: "Serving our community", value: "Established 1st May 2017" }].map(t => <div key={t.title} className="flex gap-4"><t.icon className="size-7 shrink-0 text-accent" /><div><h3 className="text-sm font-semibold">{t.title}</h3><p className="mt-2 text-xs text-ink-foreground/60">{t.value}</p></div></div>)}</div></section>

        <section id="faq" className="section-space"><div className="site-container max-w-3xl"><Reveal><p className="eyebrow text-primary">FAQ</p><h2 className="section-title mt-4">Common questions</h2></Reveal><div className="mt-10 space-y-4">{faqs.map((f, i) => <Reveal key={f.q} delay={i * 40}><details className="group rounded-lg border bg-card p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{f.q}<Plus className="size-4 shrink-0 transition group-open:rotate-45" /></summary><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p></details></Reveal>)}</div></div></section>

        <section id="contact" className="section-space bg-secondary"><div className="site-container grid gap-12 lg:grid-cols-2"><Reveal><p className="eyebrow text-primary">Get in touch</p><h2 className="section-title mt-4">Visit us or<br />message us.</h2><div className="mt-8 space-y-5"><p className="flex items-start gap-3 text-sm"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" /><span>{business.address}<br /><a href={business.maps} target="_blank" rel="noreferrer" className="text-primary underline-offset-2 hover:underline">Open in Google Maps</a></span></p><p className="flex items-center gap-3 text-sm"><Phone className="size-5 shrink-0 text-primary" /><a href={`tel:${business.phone}`}>{business.phone}</a></p><p className="flex items-center gap-3 text-sm"><Mail className="size-5 shrink-0 text-primary" /><a href={`mailto:${business.email}`}>{business.email}</a></p><p className="text-sm text-muted-foreground">{business.hours.display}</p></div></Reveal><Reveal delay={80}><form onSubmit={onSubmit} className="rounded-xl border bg-card p-6 shadow-soft"><h3 className="font-display text-lg font-bold">Send a quick enquiry</h3><p className="mt-1 text-sm text-muted-foreground">We’ll continue on WhatsApp.</p><div className="mt-6 space-y-4"><div><label htmlFor="name" className="mb-2 block text-xs font-semibold">Your name</label><input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" autoComplete="name" maxLength={100} className="enquiry-input" /></div><div><label htmlFor="service" className="mb-2 block text-xs font-semibold">I’m interested in</label><select id="service" value={selectedService} onChange={e => setSelectedService(e.target.value)} className="enquiry-input">{services.map(s => <option key={s.title}>{s.title}</option>)}<option>Something else</option></select></div><div><label htmlFor="details" className="mb-2 block text-xs font-semibold">Your message</label><textarea id="details" required value={details} onChange={e => setDetails(e.target.value)} placeholder="Tell us what you need…" maxLength={2000} rows={3} className="enquiry-input resize-y" /></div><Button type="submit" className="h-12 w-full"><MessageCircle /> Send enquiry on WhatsApp <ArrowUpRight className="ml-auto" /></Button><p className="text-center text-[11px] text-muted-foreground">Continue the conversation directly with our team.</p></div></form></Reveal></div></section>
      </main>
      <footer className="bg-ink pb-6 pt-12 text-ink-foreground"><div className="site-container"><div className="flex flex-col justify-between gap-8 sm:flex-row"><div><p className="font-display text-2xl font-extrabold">THOZHA<span className="text-accent">.</span> <span className="text-sm font-medium">Ventures</span></p><p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-foreground/60">Your everyday digital needs.<br />Our everyday commitment.</p></div><div className="flex flex-wrap gap-x-8 gap-y-3">{nav.map(n => <Button asChild key={n.href} variant="link" className="h-8 px-0 text-ink-foreground/80"><a href={n.href}>{n.label}</a></Button>)}</div><Button asChild variant="secondary" className="w-fit bg-accent"><a href={`tel:${business.phone}`}><Phone /> {business.phone}</a></Button></div><div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-ink-foreground/15 pt-6 text-[11px] text-ink-foreground/50"><p>© {new Date().getFullYear()} Thozha Ventures. All rights reserved.</p><p>Pattinapakkam, Chennai · Serving since 2017</p><a href="#top" className="text-ink-foreground/80">Back to top ↑</a></div></div></footer>
      <Button asChild size="icon" className="fixed bottom-5 right-5 z-30 size-12 rounded-full border-4 border-background shadow-lg"><a href={enquiryUrl("your services")} target="_blank" rel="noreferrer" aria-label="Chat with Thozha Ventures on WhatsApp" title="Chat on WhatsApp"><MessageCircle className="size-5" /></a></Button>
    </div>
  );
}
