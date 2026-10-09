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
      { property: "og:description", content: "Printing, online applications and everyday tech support at 18-B Srinivasapuram, Pattinapakkam, Chennai. Serving you since 2019." },
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
  { q: "Which documents do I need for an online application?", a: "Requirements vary by application and government portal. Tell us which service you need and we’ll help you understand what to bring. Approval and availability are determined by the relevant authority." },
  { q: "Do you handle bulk printing and custom invitations?", a: "Yes. Contact us with your quantity, paper preferences and occasion to discuss the design, price and expected completion time." },
  { q: "Can you maintain computers for my office?", a: "We offer computer maintenance and system AMC support. Contact us with your device count and requirements so we can discuss suitable support." },
  { q: "Where is your shop located?", a: "Visit us at 18-B, Srinivasapuram, Pattinapakkam, Chennai – 600028. Call 87782 18342 to confirm availability before your visit." },
];
const nav = [{ label: "Services", href: "#services" }, { label: "Our story", href: "#about" }, { label: "FAQs", href: "#faq" }, { label: "Visit us", href: "#contact" }];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All services");
  const [selectedService, setSelectedService] = useState(services[0].title);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(enquiryUrl(selectedService, name, details), "_blank", "noopener,noreferrer");
  }
  return (
    <div id="top">
      <div className="bg-ink text-ink-foreground">
        <div className="site-container flex min-h-9 items-center justify-between gap-4 text-[11px] sm:text-xs">
          <p className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" /> Your neighbourhood digital partner · Since 2019</p>
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
            <p className="eyebrow mb-6 text-primary">Local service. Lasting trust.</p>
            <h1 className="hero-title">Thozha Ventures<span className="block">Everyday needs.<br />Expert hands.</span></h1>
            <p className="mt-6 max-w-[450px] text-base leading-relaxed text-muted-foreground sm:text-lg">From your first print to your next application. Printing, digital services and tech support, all at your neighbourhood shop.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12 px-6"><a href="#services">Explore our services <ArrowUpRight /></a></Button><Button asChild size="lg" variant="outline" className="h-12 px-6"><a href={enquiryUrl("your services")} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us</a></Button></div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> CSC & e-Sevai centre</span><span className="flex items-center gap-2"><MapPin className="size-4 text-primary" /> Pattinapakkam, Chennai</span></div>
          </div>
        </section>
        <section className="border-y bg-secondary" aria-label="Our service specialities"><div className="site-container grid grid-cols-2 gap-5 py-6 md:grid-cols-4">{[{ icon: Printer, title: "Print & create", sub: "Documents to invitations" }, { icon: Globe2, title: "Apply & connect", sub: "e-Sevai & online services" }, { icon: MonitorCog, title: "Repair & maintain", sub: "Computers, laptops & mobiles" }, { icon: HeartHandshake, title: "Personal assistance", sub: "A familiar face. Real support." }].map(s => <div key={s.title} className="flex items-center gap-3"><s.icon className="size-6 shrink-0 text-primary" /><div><p className="text-sm font-semibold">{s.title}</p><p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">{s.sub}</p></div></div>)}</div></section>

        <section id="services" className="section-space"><div className="site-container">
          <Reveal><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow text-primary">What we do</p><h2 className="section-title mt-4">One shop. So many solutions.</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">For students, families and local businesses. The services you need, with the care you deserve.</p></div></Reveal>
          <div className="my-8 flex flex-wrap gap-2" aria-label="Filter services">{categories.map(c => <Button key={c} variant={category === c ? "default" : "outline"} aria-pressed={category === c} onClick={() => setCategory(c)} className="h-9 rounded-md px-4 text-xs">{c}</Button>)}</div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.filter(s => category === "All services" || s.category === category).map((s, i) => <Reveal key={s.title} delay={i * 45}><article className="service-item flex h-full flex-col"><div className="relative"><img src={s.image} alt={s.alt} width={1024} height={768} loading="lazy" decoding="async" className="service-image" /><span className="absolute bottom-3 left-3 rounded bg-background/95 px-3 py-1.5 text-[10px] font-semibold">{s.category}</span></div><div className="flex flex-1 flex-col p-6"><div className="mb-3 flex items-center gap-3"><s.icon className="size-5 shrink-0 text-primary" /><h3 className="text-lg font-bold leading-snug">{s.title}</h3></div><p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p><ul className="mb-5 mt-5 space-y-2.5">{s.points.map(p => <li key={p} className="flex items-start gap-2 text-xs leading-relaxed"><Check className="mt-0.5 size-3.5 shrink-0 text-primary" />{p}</li>)}</ul><Button asChild variant="link" className="mt-auto w-fit px-0 font-semibold"><a href={enquiryUrl(s.title)} target="_blank" rel="noreferrer">Enquire about this service <ArrowUpRight /></a></Button></div></article></Reveal>)}</div>
          <p className="mt-6 text-xs text-muted-foreground">Government service availability and approvals depend on the relevant portal and authority. Contact us for requirements and current pricing.</p>
        </div></section>

        <section id="about" className="section-space bg-secondary"><div className="site-container grid items-center gap-12 lg:grid-cols-2"><Reveal><div className="relative"><img src={shop.url} alt="Visit our real Thozha Ventures shop and accessories counter" width={652} height={844} loading="lazy" decoding="async" className="h-[420px] w-full rounded-lg object-cover object-center" /><div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-md bg-background p-5"><div><p className="text-xs text-muted-foreground">Your local digital partner</p><p className="mt-1 font-display text-lg font-bold">Right here in Chennai.</p></div><MapPin className="size-6 text-primary" /></div></div></Reveal><Reveal delay={100}><p className="eyebrow text-primary">A little about us</p><h2 className="section-title mt-4">Big on service.<br />Close to home.</h2><p className="mt-6 text-base leading-relaxed text-muted-foreground">Since 1st May 2019, Thozha Ventures has brought everyday printing, digital and technical services together in one place. We’re here for the student with an application, the family planning a celebration, and the business keeping its systems running.</p><p className="mt-4 text-base leading-relaxed text-muted-foreground">No complicated conversations. Just friendly help, careful work and someone you can talk to.</p><div className="mt-7 grid gap-4 sm:grid-cols-2">{["Personal, one-to-one assistance", "Multiple services in one place", "Support for home & business", "Care with your documents"].map(t => <p key={t} className="flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />{t}</p>)}</div><Button asChild variant="link" className="mt-6 px-0"><a href="#contact">Come say hello <ArrowRight /></a></Button></Reveal></div></section>

        <section className="bg-ink py-12 text-ink-foreground"><div className="site-container grid gap-8 md:grid-cols-3">{[{ icon: ShieldCheck, title: "Common Services Centre", value: `CSC ID · ${business.cscId}` }, { icon: FileCheck2, title: "Tamil Nadu e-Sevai centre", value: `Centre ID · ${business.esevaId}` }, { icon: HeartHandshake, title: "Serving our community", value: "Established 1st May 2019" }].map(t => <div key={t.title} className="flex gap-4"><t.icon className="size-7 shrink-0 text-accent" /><div><h3 className="text-sm font-semibold">{t.title}</h3><p className="mt-2 text-xs text-ink-foreground/60">{t.value}</p></div></div>)}</div></section>

        <section id="faq" className="section-space"><div className="site-container grid gap-10 lg:grid-cols-[1fr_1.4fr]"><Reveal><p className="eyebrow text-primary">Good to know</p><h2 className="section-title mt-4">A few answers.<br />Before you visit.</h2><p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">Have something else in mind? We’re just a message away.</p><Button asChild variant="link" className="mt-4 px-0"><a href={enquiryUrl("a question I have")} target="_blank" rel="noreferrer">Ask us on WhatsApp <ArrowUpRight /></a></Button></Reveal><div>{faqs.map(f => <details key={f.q} className="group border-b py-5 first:border-t"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold [&::-webkit-details-marker]:hidden">{f.q}<Plus className="size-4 shrink-0 text-primary transition-transform group-open:rotate-45" /></summary><p className="mt-4 max-w-xl pr-7 text-sm leading-relaxed text-muted-foreground">{f.a}</p></details>)}</div></div></section>

        <section id="contact" className="section-space border-t bg-brand-soft"><div className="site-container grid gap-12 lg:grid-cols-2"><Reveal><p className="eyebrow text-primary">Let's make it happen</p><h2 className="section-title mt-4">Tell us what you need.<br />We’ll take it from here.</h2><p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">Send an enquiry or drop by our shop. Call ahead to confirm availability and discuss your requirements.</p><div className="mt-8 space-y-6"><div className="flex gap-4"><MapPin className="mt-1 size-5 text-primary" /><div><p className="text-xs text-muted-foreground">Visit Thozha Ventures</p><p className="mt-1 max-w-xs text-sm font-medium">{business.address}</p><Button asChild variant="link" className="mt-1 h-8 px-0 text-xs"><a href={business.maps} target="_blank" rel="noreferrer">Get directions <ArrowUpRight /></a></Button></div></div><div className="flex gap-4"><Phone className="size-5 text-primary" /><div><p className="text-xs text-muted-foreground">Call or WhatsApp</p><a className="mt-1 block font-display text-xl font-bold" href={`tel:${business.phone}`}>{business.phone}</a></div></div></div></Reveal><Reveal delay={100}><form onSubmit={submitEnquiry} className="rounded-lg border bg-background p-6 sm:p-8"><h3 className="text-xl font-bold">How can we help?</h3><div className="mt-6 space-y-5"><div><label htmlFor="name" className="mb-2 block text-xs font-semibold">Your name <span className="font-normal text-muted-foreground">(optional)</span></label><input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" autoComplete="name" maxLength={100} className="enquiry-input" /></div><div><label htmlFor="service" className="mb-2 block text-xs font-semibold">I’m interested in</label><select id="service" value={selectedService} onChange={e => setSelectedService(e.target.value)} className="enquiry-input">{services.map(s => <option key={s.title}>{s.title}</option>)}<option>Something else</option></select></div><div><label htmlFor="details" className="mb-2 block text-xs font-semibold">Your message</label><textarea id="details" required value={details} onChange={e => setDetails(e.target.value)} placeholder="Tell us what you need…" maxLength={2000} rows={3} className="enquiry-input resize-y" /></div><Button type="submit" className="h-12 w-full"><MessageCircle /> Send enquiry on WhatsApp <ArrowUpRight className="ml-auto" /></Button><p className="text-center text-[11px] text-muted-foreground">Continue the conversation directly with our team.</p></div></form></Reveal></div></section>
      </main>
      <footer className="bg-ink pb-6 pt-12 text-ink-foreground"><div className="site-container"><div className="flex flex-col justify-between gap-8 sm:flex-row"><div><p className="font-display text-2xl font-extrabold">THOZHA<span className="text-accent">.</span> <span className="text-sm font-medium">Ventures</span></p><p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-foreground/60">Your everyday digital needs.<br />Our everyday commitment.</p></div><div className="flex flex-wrap gap-x-8 gap-y-3">{nav.map(n => <Button asChild key={n.href} variant="link" className="h-8 px-0 text-ink-foreground/80"><a href={n.href}>{n.label}</a></Button>)}</div><Button asChild variant="secondary" className="w-fit bg-accent"><a href={`tel:${business.phone}`}><Phone /> {business.phone}</a></Button></div><div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-ink-foreground/15 pt-6 text-[11px] text-ink-foreground/50"><p>© {new Date().getFullYear()} Thozha Ventures. All rights reserved.</p><p>Pattinapakkam, Chennai · Serving since 2019</p><a href="#top" className="text-ink-foreground/80">Back to top ↑</a></div></div></footer>
      <Button asChild size="icon" className="fixed bottom-5 right-5 z-30 size-12 rounded-full border-4 border-background shadow-lg"><a href={enquiryUrl("your services")} target="_blank" rel="noreferrer" aria-label="Chat with Thozha Ventures on WhatsApp" title="Chat on WhatsApp"><MessageCircle className="size-5" /></a></Button>
    </div>
  );
}
