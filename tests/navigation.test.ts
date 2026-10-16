import test from "node:test";
import assert from "node:assert/strict";
import { internalUrl, legacySections } from "../src/lib/navigation.ts";
test("menu-to-reservation navigation carries campaign and dining preference", () => {
  const url = new URL(
    internalUrl(
      "/reservations",
      "https://example.com/menus?menu=lunch&utm_source=instagram&gclid=123",
    ),
    "https://example.com",
  );
  assert.equal(url.pathname, "/reservations");
  assert.equal(url.searchParams.get("menu"), "lunch");
  assert.equal(url.searchParams.get("utm_source"), "instagram");
  assert.equal(url.searchParams.get("gclid"), "123");
});
test("explicit menu links win over previous choices, unrelated parameters stay behind", () => {
  const url = internalUrl(
    "/menus?menu=99",
    "https://example.com/?menu=59&utm_source=qa&unrelated=secret",
  );
  assert.equal(url, "/menus?menu=99&utm_source=qa");
  assert.equal(
    internalUrl("/our-story", "https://example.com/menus?menu=lunch"),
    "/our-story",
  );
});
test("old source section bookmarks map to standalone pages", () => {
  assert.equal(legacySections["#story"], "/our-story");
  assert.equal(legacySections["#gather"], "/gatherings");
  assert.equal(legacySections["#booking"], "/reservations");
  assert.equal(legacySections["#main"], undefined);
});
