import { createFileRoute } from "@tanstack/react-router";
import {
  Printer,
  Globe2,
  Smartphone,
  MonitorCog,
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

import heroShop from "@/assets/hero-shop.jpg";
import servicePrinting from "@/assets/service-printing.jpg";
import serviceEseva from "@/assets/service-eseva.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceAmc from "@/assets/service-amc.jpg";
import serviceInvitations from "@/assets/service-invitations.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Printing, e-Seva, Mobile & Computer AMC Services | Since 2019",
      },
      {
        name: "description",
        content:
          "Colour & B/W Xerox, e-Seva online services, mobile support, computer AMC and customized invitation printing — trusted service since 1st May 2019.",
      },
      {
        property: "og:title",
        content: "Printing, e-Seva, Mobile & Computer AMC Services",
      },
      {
        property: "og:description",
        content:
          "All your printing, online, mobile and computer service needs under one roof. Serving with trust and quality since 1st May 2019.",
      },
    ],
  }),
  component: Index,
});

const SHOP = {
  name: "[Your Shop Name]",
  address: "[Your Shop Address]",
  phone: "[Your Contact Number]",
  email: "[Your Email Address]",
  hours: "[Your Shop Timings]",
  maps: "#contact",
};

const services = [
  {
    icon: Printer,
    title: "Colour & Black and White Xerox / Printing",
    intro: "Fast, quality printing for personal, educational and business needs.",
    image: servicePrinting,
    alt: "Printer producing freshly printed documents",
    points: [
      "Colour Xerox and printing",
      "Black & white Xerox and printing",
      "Document printing",
      "Scanning and photocopying",
      "General document services",
    ],
  },
  {
    icon: Globe2,
    title: "Online Services & e-Seva",
    intro: "We assist you with online and digital service requirements.",
    image: serviceEseva,
    alt: "Assistance with an online application at a service counter",
    points: [
      "Online application assistance",
      "e-Seva services",
      "Government portal assistance",
      "Online form filling",
      "Document upload and download",
      "Digital document-related services",
    ],
    note: "Service availability depends on the relevant portal and requirements.",
  },
  {
    icon: Smartphone,
    title: "Mobile Services",
    intro: "Everyday smartphone help, handled with care.",
    image: serviceMobile,
    alt: "Technician setting up a smartphone",
    points: [
      "Mobile software and setup assistance",
      "Mobile accessories",
      "Data transfer assistance",
      "Mobile-related troubleshooting",
      "Other available mobile services",
    ],
  },
  {
    icon: MonitorCog,
    title: "System AMC & Maintenance",
    intro: "Keep your computers and systems running smoothly.",
    image: serviceAmc,
    alt: "Technician servicing a desktop computer",
    points: [
      "Desktop and computer maintenance",
      "System troubleshooting",
      "Software installation and support",
      "Hardware checking and assistance",
      "Regular system maintenance",
      "AMC support for computers and systems",
    ],
    note: "Contact us to discuss your maintenance requirements.",
  },
  {
    icon: Mail,
    title: "Customized Invitations & Printing",
    intro: "Beautifully designed invitations for your special occasions.",
    image: serviceInvitations,
    alt: "Custom printed invitation cards with gold detailing",
    points: [
      "Birthday celebrations",
      "Puberty ceremonies (Manjal Neerattu Vizha)",
      "Marriage and engagement",
      "Baby shower (Seemantham)",
      "Ear-piercing ceremonies",
      "Housewarming (Griha Pravesh)",
      "Anniversary celebrations",
      "Other special occasions",
    ],
    note: "Your occasion, your design, your invitation.",
  },
];

const reasons = [
  "Trusted service since 1st May 2019",
  "Multiple services under one roof",
  "Colour and black & white printing",
  "Convenient online service assistance",
  "Mobile and computer support",
  "Customized invitation printing",
  "Friendly and customer-focused service",
];

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  return (
    <div className="min-h-screen scroll-smooth">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck className="size-5 text-accent" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg text-foreground">{SHOP.name}</span>
              <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                Since 2019
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${SHOP.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-xs tracking-[0.2em] text-accent uppercase">
                Serving since 1st May 2019
              </p>
              <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Welcome to <span className="text-accent">Our Shop</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
                Your trusted partner for printing, digital services, mobile solutions, and computer
                maintenance since 1st May 2019.
              </p>
              <p className="mt-4 max-w-xl text-primary-foreground/70">
                We provide quality services for individuals, students, families and businesses — from
                colour and black &amp; white printing to e-Seva services, customized invitations,
                mobile services and system AMC.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-primary-foreground/35 px-7 py-3 font-semibold transition-colors hover:bg-primary-foreground/10"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-accent/25" aria-hidden />
              <img
                src={heroShop}
                alt="Our digital service shop counter with printers and computers"
                width={1600}
                height={1008}
                className="relative rounded-3xl object-cover shadow-lift"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">About Us</p>
            <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl">
              Your Trusted Service Partner Since 2019
            </h2>
            <div className="gold-rule mt-6 h-px w-40" />
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            <Reveal delay={80} className="lg:col-span-2">
              <div className="space-y-5 text-lg text-muted-foreground">
                <p>
                  Established on 1st May 2019, our shop is dedicated to providing reliable,
                  affordable and convenient digital and technical services to our customers.
                </p>
                <p>
                  We offer a wide range of services, including colour and black &amp; white Xerox,
                  online e-Seva services, mobile-related services, computer maintenance and
                  customized invitation printing.
                </p>
                <p>
                  Our goal is to deliver quality work, friendly service and customer satisfaction in
                  every service we provide.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="surface-card h-full p-8">
                <h3 className="font-display text-xl">Our Mission</h3>
                <div className="gold-rule mt-4 h-px w-16" />
                <p className="mt-4 text-muted-foreground">
                  To make everyday printing, digital and technical services accessible and
                  hassle-free for everyone.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-secondary/60 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
                Our Services
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Everything you need, under one roof</h2>
              <div className="gold-rule mt-6 h-px w-40" />
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {services.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={i * 70}
                  className={i === services.length - 1 ? "md:col-span-2" : ""}
                >
                  <article className="surface-card group h-full overflow-hidden hover:-translate-y-1 hover:shadow-lift">
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="p-8">
                      <div className="flex items-start gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                          <s.icon className="size-5" />
                        </span>
                        <div>
                          <h3 className="text-xl leading-snug">{s.title}</h3>
                          <p className="mt-2 text-muted-foreground">{s.intro}</p>
                        </div>
                      </div>
                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-sm">
                            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                            <span className="text-foreground/85">{p}</span>
                          </li>
                        ))}
                      </ul>
                      {s.note && (
                        <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground italic">
                          {s.note}
                        </p>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section id="why-us" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">Why Choose Us</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Quality work, friendly service</h2>
            <div className="gold-rule mt-6 h-px w-40" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r} delay={i * 60}>
                <div className="surface-card flex h-full items-start gap-4 p-6 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground">
                    <Check className="size-4" />
                  </span>
                  <p className="font-medium">{r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-primary py-20 text-primary-foreground md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs tracking-[0.25em] text-accent uppercase">Contact Us</p>
              <h2 className="mt-4 text-3xl sm:text-4xl">Need a Service? We're Here to Help!</h2>
              <div className="gold-rule mt-6 h-px w-40" />
              <p className="mt-6 max-w-lg text-primary-foreground/80">
                Whether you need a document printed, an online application assisted, a mobile
                service, computer maintenance or a beautiful invitation for your special occasion,
                visit our shop.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={`tel:${SHOP.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="size-4" /> Call Us
                </a>
                <a
                  href={`https://wa.me/${SHOP.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/35 px-7 py-3 font-semibold transition-colors hover:bg-primary-foreground/10"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
                <dl className="space-y-6">
                  {[
                    { icon: ShieldCheck, label: "Shop Name", value: SHOP.name },
                    { icon: MapPin, label: "Address", value: SHOP.address },
                    { icon: Phone, label: "Phone", value: SHOP.phone },
                    { icon: Mail, label: "Email", value: SHOP.email },
                    { icon: Clock, label: "Working Hours", value: SHOP.hours },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-4">
                      <row.icon className="mt-1 size-5 shrink-0 text-accent" />
                      <div>
                        <dt className="text-xs tracking-widest text-primary-foreground/60 uppercase">
                          {row.label}
                        </dt>
                        <dd className="mt-1 text-lg">{row.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <a
                  href={SHOP.maps}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  <MapPin className="size-4" /> View on Google Maps
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-10 text-center text-primary-foreground/70">
        <div className="mx-auto max-w-4xl px-5">
          <div className="gold-rule mx-auto mb-8 h-px w-48" />
          <p className="font-display text-lg text-primary-foreground">{SHOP.name}</p>
          <p className="mt-3 text-sm">
            Printing &middot; e-Seva &middot; Mobile Services &middot; System AMC &middot; Customized
            Invitations
          </p>
          <p className="mt-4 text-sm">Serving you with trust and quality since 1st May 2019.</p>
        </div>
      </footer>
    </div>
  );
}
