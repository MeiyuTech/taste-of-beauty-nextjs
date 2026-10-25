import { menus, type Course } from "./menus";
import { BOOKING_URL } from "./booking";
import { siteUrl } from "./site";
const origin = siteUrl || "https://thetasteofbeauty.com";
const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const restaurantSchema = {
  "@context": "https://schema.org", "@type": "Restaurant",
  "@id": `${origin}/#restaurant`, name: "Taste of Beauty", url: `${origin}/`,
  address: { "@type": "PostalAddress", streetAddress: "616 N Robertson Blvd", addressLocality: "West Hollywood", addressRegion: "CA", postalCode: "90069", addressCountry: "US" },
  telephone: "+1-657-506-3567", servesCuisine: ["Vegan", "Vegetarian"], priceRange: "$$$",
  hasMenu: `${origin}/menus`, acceptsReservations: BOOKING_URL,
  openingHoursSpecification: [["12:30", "15:30"], ["17:30", "21:00"]].map(([opens, closes]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: days.map(day => `https://schema.org/${day}`), opens, closes })),
};
function section(name: string, courses: Course[], diet: string, price?: number) {
  return {
    "@type": "MenuSection", name,
    hasMenuItem: courses.map(([name, description]) => ({ "@type": "MenuItem", name, description, suitableForDiet: `https://schema.org/${diet}` })),
    ...(price !== undefined ? { offers: { "@type": "Offer", price: String(price), priceCurrency: "USD", description: "Set menu per guest; tax, gratuity and beverages additional." } } : {}),
  };
}
export const menuSchema = {
  "@context": "https://schema.org", "@type": "Menu", "@id": `${origin}/menus#menu`, name: "Taste of Beauty Menus", url: `${origin}/menus`,
  hasMenuSection: [
    section(menus["59"].title, menus["59"].courses, "VeganDiet", menus["59"].price),
    section("The Tasting Experience – Vegan", menus["99"].courses, "VeganDiet", menus["99"].price),
    section("The Tasting Experience – Vegetarian", menus["99"].vegetarian!, "VegetarianDiet", menus["99"].price),
    section("Lunch", menus.lunch.courses, "VeganDiet"),
  ],
};
