import { describe, it as test } from "node:test";
import { strict as assert } from "node:assert";
import { business, enquiryUrl } from "./business";

describe("business enquiries", () => {
  test("uses the phone number on the supplied posters", () => {
    assert.equal(business.whatsapp, "918778218342");
    assert.equal(new URL(enquiryUrl("Printing")).pathname, "/918778218342");
  });
  test("preserves the customer's actual enquiry when encoded", () => {
    const url = new URL(enquiryUrl("Colour printing", "Anu", "50 copies & binding"));
    assert.equal(url.searchParams.get("text"), "Hello Thozha Ventures!\nI'm Anu.\nI'd like to enquire about Colour printing.\n50 copies & binding");
  });
});