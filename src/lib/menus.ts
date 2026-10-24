export type MenuKey = "59" | "99" | "lunch" | "xlb";
export function menuDishId(menu: MenuKey, diet: "vegan" | "vegetarian", name: string) {
  return `dish-${menu}-${diet}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}
export type Course = [name: string, description: string];
export interface DiningMenu {
  title: string;
  price: string;
  unit: string;
  eyebrow: string;
  image: string;
  alt: string;
  intro: string;
  cta: string;
  dinner: boolean;
  courses: Course[];
  vegetarian?: Course[];
}
export const menuKeys: MenuKey[] = ["59", "99", "lunch", "xlb"];
export function isMenuKey(value: string | null): value is MenuKey {
  return value !== null && menuKeys.includes(value as MenuKey);
}
export const menus: Record<MenuKey, DiningMenu> = {
  "59": {
    "title": "The Fairytale Collection",
    "price": "$59",
    "unit": "per person",
    "eyebrow": "FIVE COURSES · VEGAN · DINNER",
    "image": "garden.webp",
    "alt": "The Secret Garden avocado dish from the five-course menu",
    "intro": "Five imaginative dishes. One lovely evening.",
    "cta": "Reserve the $59 menu",
    "dinner": true,
    "courses": [
      [
        "The Wizard of Oz",
        "Green vegetable soup with nuts and coconut cream."
      ],
      [
        "The Secret Garden",
        "Avocado, black garlic and taro."
      ],
      [
        "Alice in Wonderland",
        "Lily bulb tempura with Korean chili sauce."
      ],
      [
        "The Princess and the Pea",
        "Jicama cakes with vegan yogurt cream."
      ],
      [
        "Jack and the Beanstalk",
        "A tofu pouch filled with mushrooms and vegetables."
      ]
    ]
  },
  "99": {
    "title": "The Tasting Experience",
    "price": "$99",
    "unit": "per person",
    "eyebrow": "EIGHT COURSES · VEGAN OR VEGETARIAN",
    "image": "lotus.webp",
    "alt": "An artistic vegetable presentation on a white plate at Taste of Beauty",
    "intro": "Take a longer journey through our culinary world.",
    "cta": "Reserve the $99 menu",
    "dinner": true,
    "courses": [
      [
        "The Island",
        "Pumpkin, celery and golden ear mushroom."
      ],
      [
        "The Jade",
        "Quinoa, tofu and avocado."
      ],
      [
        "The Veil",
        "Perilla, oyster mushroom and vegan cheese tempura."
      ],
      [
        "The Petal",
        "Fresh fruit with purple sweet potato."
      ],
      [
        "The Dunes",
        "Cactus, aloe and mango with yuzu."
      ],
      [
        "The Orchard",
        "Yam and water chestnut spheres with quinoa."
      ],
      [
        "The Lagoon",
        "Pumpkin blossom in golden curry."
      ],
      [
        "The Rainforest",
        "Risotto with enoki, asparagus and peas."
      ]
    ],
    "vegetarian": [
      [
        "Pearl Fresh",
        "Mushroom broth, bamboo fungus and quail egg."
      ],
      [
        "The Sunlit Grove",
        "Avocado, kiwi, watermelon and pineapple."
      ],
      [
        "The Lotus Pond",
        "Yam purée, lotus root, zucchini and lotus seeds."
      ],
      [
        "Mountains and Rivers",
        "Morel mushrooms, silken tofu and potato."
      ],
      [
        "The Hillside",
        "Eggplant, aji verde and vegan cheese."
      ],
      [
        "The Stone Garden",
        "Black bean and sesame tofu with egg and peanut."
      ],
      [
        "The Forest",
        "Charcoal-seared oyster mushrooms with shoyu butter."
      ],
      [
        "The Harvest",
        "Pumpkin and cashew Basque-style cake."
      ]
    ]
  },
  "lunch": {
    "title": "A Better Lunch Break",
    "price": "A la carte",
    "unit": "Tue–Sun",
    "eyebrow": "LUNCH · 12:30–3:30 PM",
    "image": "vegetable-noodles.png",
    "alt": "Vegetable noodles with mushrooms and fresh basil at Taste of Beauty",
    "intro": "Come in for a little everyday pleasure.",
    "cta": "Reserve for lunch",
    "dinner": false,
    "courses": [
      [
        "Pan-Seared Vegan Buns",
        "Tofu, chives and mushrooms."
      ],
      [
        "Pan-Seared Mushroom Dumplings",
        "Mushroom filling with edamame and konjac."
      ],
      [
        "Sesame Noodles",
        "Sesame and peanut sauce."
      ],
      [
        "Black Pepper Vegetable Noodles",
        "Vegetables, mushrooms and fresh basil."
      ],
      [
        "Sweet Chili Tofu",
        "Tofu with a sweet chili glaze."
      ],
      [
        "Miso Soup",
        "Miso, tofu and kombu."
      ]
    ]
  },
  "xlb": {
    "title": "Handmade Vegan Xiaolongbao",
    "price": "By selection",
    "unit": "Daily selection",
    "eyebrow": "DINE IN · PICKUP · DELIVERY",
    "image": "xlb-0.webp",
    "alt": "Taste of Beauty xiaolongbao in a yellow steamer basket",
    "intro": "A little basket of comfort, here or at home. Our mini dumplings come in vegan and vegetarian fillings",
    "cta": "Reserve for lunch",
    "dinner": false,
    "courses": [
      [
        "Choose today’s filling",
        "See the current ordering menu for fillings, portions and prices."
      ],
      [
        "Check your dietary preference",
        "Not every filling is vegan; egg-containing fillings are vegetarian."
      ],
      [
        "Dine in or take it home",
        "Call for restaurant availability, or order online."
      ]
    ]
  }
};
