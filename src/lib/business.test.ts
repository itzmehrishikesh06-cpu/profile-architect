import { describe, expect, test } from "bun:test";
import { business, enquiryUrl } from "./business";

describe("business enquiries", () => {
  test("uses the phone number on the supplied posters", () => {
    expect(business.whatsapp).toBe("918778218342");
    expect(new URL(enquiryUrl("Printing")).pathname).toBe("/918778218342");
  });
  test("preserves the customer's actual enquiry when encoded", () => {
    const url = new URL(enquiryUrl("Colour printing", "Anu", "50 copies & binding"));
    expect(url.searchParams.get("text")).toBe("Hello Thozha Ventures!\nI'm Anu.\nI'd like to enquire about Colour printing.\n50 copies & binding");
  });
});