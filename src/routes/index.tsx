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
