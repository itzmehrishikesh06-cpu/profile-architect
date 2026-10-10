export const business = {
  name: "Thozha Ventures",
  tagline: "Your neighbourhood digital partner",
  phone: "+91 87782 18342",
  phoneRaw: "8778218342",
  whatsapp: "918778218342",
  email: "thozhaventures@gmail.com",
  address: "18-B, Srinivasapuram, Pattinapakkam, Chennai – 600028",
  cscId: "214177460014",
  esevaId: "TNSPVCHN0111-01",
  maps: "https://share.google/GbP3maVMfWyCJmoJB",
  started: "1st May 2017",
  years: new Date().getFullYear() - 2017,
  hours: {
    weekdays: "9:30 AM – 10:00 PM",
    sunday: "Closed (Full Holiday)",
    display: "Mon–Sat 9:30 AM – 10:00 PM · Sunday Closed",
  },
  startingPrices: {
    xerox: "₹2",
    colour: "₹20",
    idCard: "₹100",
    lamination: "₹30",
    photoPrint: "₹100",
  },
  social: {
    instagram: "https://instagram.com/thozha_ventures",
    handle: "@thozha_ventures",
  },
};

export function enquiryUrl(service: string, name = "", details = "") {
  const message = [
    "Hello Thozha Ventures!",
    name.trim() ? `I'm ${name.trim()}.` : "",
    `I'd like to enquire about ${service}.`,
    details.trim(),
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
