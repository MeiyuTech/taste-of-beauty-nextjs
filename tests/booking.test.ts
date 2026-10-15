import test from "node:test";
import assert from "node:assert/strict";
import {
  restaurantToday,
  dateError,
  nextOpenDate,
  bookingUrl,
  menuUrl,
} from "../src/lib/booking.ts";
test("restaurant date uses Los Angeles rather than the visitor timezone", () => {
  assert.equal(restaurantToday(new Date("2026-10-16T01:00:00Z")), "2026-10-15");
});
test("reject past, invalid and closed-day dates", () => {
  assert.ok(dateError("2026-10-14", "2026-10-15"));
  assert.ok(dateError("2026-10-19", "2026-10-15"));
  assert.ok(dateError("2026-02-30", "2026-01-01"));
  assert.equal(dateError("2026-10-20", "2026-10-15"), "");
  assert.equal(nextOpenDate("2026-10-19"), "2026-10-20");
});
test("booking handoff includes date, time and guests, without claiming a menu booking", () => {
  const url = new URL(bookingUrl("2026-10-20", "18:30", "4"));
  assert.equal(url.hostname, "www.opentable.com");
  assert.equal(url.searchParams.get("dateTime"), "2026-10-20T18:30");
  assert.equal(url.searchParams.get("covers"), "4");
  assert.equal(url.searchParams.get("restref"), "1466308");
  assert.equal(url.searchParams.has("menu"), false);
});
test("menu selection preserves campaign parameters and anchor", () => {
  const url = menuUrl(
    "https://example.com/?utm_source=instagram&fbclid=abc&menu=59#menus",
    "99",
  );
  assert.equal(url.searchParams.get("utm_source"), "instagram");
  assert.equal(url.searchParams.get("fbclid"), "abc");
  assert.equal(url.searchParams.get("menu"), "99");
  assert.equal(url.hash, "#menus");
});
