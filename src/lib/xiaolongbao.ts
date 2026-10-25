import { ORDER_URL } from "./booking";
import { xiaolongbaoFillings } from "./menu-views";
// Preparation claims confirmed by the restaurant owner on 2026-10-19.
// Keep this shared source aligned with the visible FAQ and its JSON-LD.
export const xiaolongbaoFaqs = [
  { question: "What is vegan xiaolongbao?", answer: "Vegan xiaolongbao is a plant-based version of the Shanghai soup dumpling: a thin wrapper around a savory filling and broth that turns to soup as it steams. Ours replaces the traditional pork and gelatin with a mushroom-kombu broth set with agar." },
  { question: "Are all your xiaolongbao vegan?", answer: "No. Some fillings are vegan and some are vegetarian. Egg-containing fillings are vegetarian and not suitable for a vegan diet, so check the label on each filling before you order." },
  { question: "Is xiao long bao the same as a soup dumpling?", answer: "Yes. Xiao long bao is the Mandarin name, and soup dumpling is the common English name. Both describe a pleated dumpling steamed in a bamboo basket with broth sealed inside." },
  { question: "How do you make the soup inside vegan xiaolongbao without gelatin?", answer: "We simmer shiitake, kombu and aromatics for hours, then set the broth with agar, a seaweed-based gelling agent, instead of gelatin. The set broth is folded into the dumpling, and the steam melts it back into soup." },
  { question: "Are your xiaolongbao wrappers made in-house?", answer: "Yes. We roll every wrapper by hand each morning: thin enough to see the filling through, strong enough to hold the soup." },
  { question: "How many pleats does a xiaolongbao have?", answer: "Ours have eighteen. Each dumpling is pleated and closed by hand, one at a time." },
  { question: "Are your xiaolongbao steamed fresh?", answer: "Yes. Every basket is steamed in bamboo to order and never held, so the dumplings reach your table hot and full of soup." },
  { question: "What are the ingredients in your vegan xiao long bao?", answer: `Our vegan fillings include ${xiaolongbaoFillings.filter((filling) => filling.diet === "Vegan").map((filling) => filling.name).join("; ")}. We use a mushroom-kombu broth set with agar. Ingredients vary by filling; check today’s menu and tell our team about allergies before ordering.`, href: ORDER_URL, label: "See today’s fillings" },
  { question: "Where can I buy vegan xiaolongbao in Los Angeles?", answer: "At Taste of Beauty, 616 N Robertson Blvd in West Hollywood. Dine in at lunch Tuesday–Sunday, 12:30–3:30 pm, or order pickup or delivery on Uber Eats.", href: "/", label: "Visit Taste of Beauty" },
  { question: "Do you deliver vegan dumplings in West Hollywood?", answer: "Yes. Delivery runs through Uber Eats across West Hollywood and nearby Los Angeles neighborhoods. Enter your address on Uber Eats to see availability and arrival time.", href: ORDER_URL, label: "Check delivery availability" },
  { question: "Can I order xiaolongbao for dinner?", answer: "Please call us at (657) 506-3567 to confirm dinner availability before your visit.", href: "tel:+16575063567", label: "Call our team" },
  { question: "Do you serve vegan dim sum?", answer: "Our lunch menu pairs xiaolongbao with pan-seared vegan buns and mushroom dumplings — small, shareable plates in the dim sum spirit.", href: "/menus?menu=lunch", label: "See the lunch menu" },
];

// Fillings, dietary labels and prices live in the shared catalog.
export { xiaolongbaoFillings } from "./menu-views";
