export const BOOKING_URL =
  "https://www.opentable.com/r/taste-of-beauty-restaurant-tob-west-hollywood-reservations-west-hollywood?restref=1466308&lang=en-US&ot_source=Restaurant+website";
export const ORDER_URL =
  "https://www.ubereats.com/store/tob-vegan-kitchen-616-n-robertson-blvd/ZX301TfMQO2EqEOCgYbAUA";
export const DINNER_TIMES = [
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
];
export const LUNCH_TIMES = ["12:30", "13:00", "13:30", "14:00", "14:30"];
export function restaurantToday(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (name: string) => parts.find((p) => p.type === name)!.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}
export function dateError(date: string, today = restaurantToday()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return "Choose a date.";
  const parsed = new Date(`${date}T12:00:00Z`);
  if (
    Number.isNaN(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== date
  )
    return "Choose a valid date.";
  if (date < today)
    return "Choose today or a future date.";
  if (parsed.getUTCDay() === 1)
    return "Closed Mondays. Choose Tuesday–Sunday.";
  return "";
}
export function nextOpenDate(today = restaurantToday()) {
  const parsed = new Date(`${today}T12:00:00Z`);
  if (parsed.getUTCDay() === 1) parsed.setUTCDate(parsed.getUTCDate() + 1);
  return parsed.toISOString().slice(0, 10);
}
export function bookingUrl(date: string, time: string, party: string) {
  const url = new URL(BOOKING_URL);
  url.searchParams.set("dateTime", `${date}T${time}`);
  url.searchParams.set("covers", party);
  url.searchParams.set("partySize", party);
  return url.href;
}
export function menuUrl(href: string, menu: string, queryKey = "menu") {
  const url = new URL(href);
  url.searchParams.set(queryKey, menu);
  return url;
}
