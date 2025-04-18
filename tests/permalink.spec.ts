import { test, expect } from "@playwright/test";
import getSpeciesPermalink from "../src/scripts/permalink";

test("Species permalink is correct", () => {
  const taxonId = 12345;
  const permalink = getSpeciesPermalink(taxonId);
  expect(permalink).toBe("https://www.mammaldiversity.org/taxon/12345");
});
