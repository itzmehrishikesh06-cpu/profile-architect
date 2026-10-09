export const business = {
  name: "Thozha Ventures",
  phone: "+91 87782 18342",
  whatsapp: "918778218342",
  address: "18-B, Srinivasapuram, Pattinapakkam, Chennai – 600028",
  cscId: "214177460014",
  esevaId: "TNSPVCHN0111-01",
  maps: "https://www.google.com/maps/search/?api=1&query=18-B%20Srinivasapuram%20Pattinapakkam%20Chennai%20600028",
};

export function enquiryUrl(service: string, name = "", details = "") {
  const message = ["Hello Thozha Ventures!", name.trim() ? `I'm ${name.trim()}.` : "", `I'd like to enquire about ${service}.`, details.trim()].filter(Boolean).join("\n");
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}