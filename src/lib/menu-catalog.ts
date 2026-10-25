import type { MenuCatalog } from "./menu-types";

// Menu content preserves the existing website; confirmed PDF tasting prices are applied.
// Edit prices here only. Missing price means unpriced, never zero or a fallback.
// Presentations preserve existing differences between tasting, lunch, takeout and
// the standalone xiaolongbao page. Do not merge similarly named dishes by guesswork.
export const MENU_CATALOG: MenuCatalog = {
  "currency": "USD",
  "dining": {
    "fairytale": {
      "title": "The Fairytale Collection",
      "unit": "per person",
      "eyebrow": "SIX COURSES · VEGAN · DINNER",
      "image": "/images/dishes/the-secret-garden-900x1200.webp",
      "alt": "The Secret Garden avocado dish from the six-course menu",
      "intro": "Six imaginative dishes. One lovely evening.",
      "cta": "Reserve the {{price}} menu",
      "dinner": true,
      "price": 79,
      "courses": [
        "the-wizard-of-oz",
        "the-secret-garden",
        "alice-in-wonderland",
        "the-princess-and-the-pea",
        "jack-and-the-beanstalk",
        "the-enchanted-forest"
      ],
      "tabLabel": "{{price}} Special Tasting"
    },
    "tasting": {
      "title": "8-Course Tasting Menus",
      "unit": "per person",
      "eyebrow": "EIGHT COURSES · VEGAN OR VEGETARIAN",
      "image": "/images/dishes/lotus-plated-dish.webp",
      "alt": "An artistic vegetable presentation on a white plate at Taste of Beauty",
      "intro": "Take a longer journey through our culinary world.",
      "cta": "Reserve the {{price}} menu",
      "dinner": true,
      "price": 109,
      "courses": [
        "the-island",
        "the-jade",
        "the-veil",
        "the-petal",
        "the-dunes",
        "silken-earth",
        "the-lagoon",
        "the-rainforest"
      ],
      "vegetarian": [
        "pearl-fresh",
        "the-sunlit-grove",
        "golden-garden",
        "mountains-and-rivers",
        "the-hillside",
        "the-stone-garden",
        "the-forest",
        "the-harvest"
      ],
      "tabLabel": "{{price}} Tasting Menu",
      "variantTitles": {
        "vegan": "The Plant Journey",
        "vegetarian": "The Garden Journey"
      }
    },
    "lunch": {
      "title": "A Better Lunch Break",
      "unit": "Tue–Sun",
      "eyebrow": "LUNCH · 12:30–3:30 PM",
      "image": "/images/dishes/black-pepper-vegetable-noodles.png",
      "alt": "Vegetable noodles with mushrooms and fresh basil at Taste of Beauty",
      "intro": "Come in for a little everyday pleasure.",
      "cta": "Reserve for lunch",
      "dinner": false,
      "priceLabel": "A la carte",
      "courses": [
        "pan-seared-vegan-buns",
        "pan-seared-mushroom-dumplings",
        "sesame-noodles",
        "black-pepper-vegetable-noodles",
        "sweet-chili-tofu",
        "miso-soup"
      ],
      "tabLabel": "Lunch"
    },
    "xiaolongbao": {
      "title": "Handcrafted Bao",
      "unit": "Daily selection",
      "eyebrow": "DINE IN · PICKUP · DELIVERY",
      "image": "/images/xiaolongbao/steamer-with-lid.webp",
      "alt": "Taste of Beauty xiaolongbao in a yellow steamer basket",
      "intro": "A little basket of comfort, here or at home. Our mini dumplings come in vegan and vegetarian fillings",
      "cta": "Reserve for lunch",
      "dinner": false,
      "priceLabel": "By selection",
      "courses": [
        "choose-todays-filling",
        "check-your-dietary-preference",
        "dine-in-or-take-it-home"
      ],
      "tabLabel": "Xiaolongbao"
    }
  },
  "items": {
    "the-wizard-of-oz": {
      "name": "The Wizard of Oz",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "An emerald soup of cauliflower, green peas, chickpeas, spinach, cashew, almond and coconut cream, with daylily petals, seaweed and floral tea powder.",
            "VEGAN | CONTAINS: CASHEW, ALMOND"
          ]
        }
      }
    },
    "the-secret-garden": {
      "name": "The Secret Garden",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Avocado, black garlic and taro purée over purple cabbage, with chickpea, coconut and cashew sauce, finished with baby greens.",
            "VEGAN | CONTAINS: CASHEW, COCONUT"
          ]
        }
      }
    },
    "alice-in-wonderland": {
      "name": "Alice in Wonderland",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Crispy lily bulb tempura with Korean chili sauce and a delicate ice-flower crisp. Light, layered and quietly unexpected.",
            "VEGAN | CONTAINS: WHEAT"
          ]
        }
      }
    },
    "the-princess-and-the-pea": {
      "name": "The Princess and the Pea",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Golden cakes of jicama, fennel greens and glutinous rice flour, with vegan yogurt cream, delicate konjac strands and house white sauce.",
            "VEGAN | CONTAINS: CASHEW, COCONUT"
          ]
        }
      }
    },
    "jack-and-the-beanstalk": {
      "name": "Jack and the Beanstalk",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "A tofu fortune pouch of king oyster and shiitake mushrooms, bamboo shoots, tofu and seasonal vegetables, served with green peas.",
            "VEGAN | CONTAINS: SOY"
          ]
        }
      }
    },
    "the-island": {
      "name": "The Island",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Golden pumpkin and celery, with delicate rice paper sails and the earthy whisper of golden ear mushroom.",
            "VEGAN / GF"
          ]
        },
        "a-la-carte": {
          "paragraphs": [
            "Pumpkin. Celery. Carrot. Rice Paper. Golden Fungus. Pumpkin soup with golden ear mushroom and rice paper veil — a quiet meditation on unity"
          ],
          "price": {
            "amount": 18
          },
          "titleSuffix": " (v, gf)"
        }
      }
    },
    "the-jade": {
      "name": "The Jade",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Quinoa, tofu, avocado, cucumber, lettuce and cherry tomato; nori sesame crumble, with mirin, mustard, sesame and a touch of chili.",
            "VEGAN / GF"
          ]
        }
      }
    },
    "the-veil": {
      "name": "The Veil",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Perilla, oyster mushrooms and vegan cheese in a tea-touched tempura crisp, with cucumber, cherry tomato, lettuce, nori sesame and parsley-almond dressing.",
            "VEGAN / GF"
          ]
        }
      }
    },
    "the-petal": {
      "name": "The Petal",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Pear, apple and dragon fruit over purple sweet potato and crisp chips, with fresh mint and vegan mayo.",
            "VEGAN / GF"
          ]
        }
      }
    },
    "the-dunes": {
      "name": "The Dunes",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Cactus paddle and aloe, sun-sweet mango, bright yuzu and fresh wasabi, finished with a glint of edible gold.",
            "VEGAN / GF | CONTAINS: SESAME"
          ]
        }
      }
    },
    "the-orchard": {
      "name": "The Orchard",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Two lychee-like spheres of yam purée and water chestnut are rolled in quinoa, crowned with fresh perilla leaves, and finished with vegan mayo. Delicate and playful, like small fruits gathered from a quiet orchard.",
            "VEGAN"
          ]
        }
      },
      "summary": "Yam and water chestnut spheres with quinoa."
    },
    "the-lagoon": {
      "name": "The Lagoon",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "A pumpkin blossom over golden curry, with fine cactus strands and the gentle warmth of Korean chili.",
            "VEGAN"
          ]
        }
      }
    },
    "the-rainforest": {
      "name": "The Rainforest",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Creamy risotto with enoki mushrooms, edamame and asparagus, wrapped in banana leaf and finished with vegan parmesan.",
            "VEGAN / GF"
          ]
        },
        "a-la-carte": {
          "paragraphs": [
            "Japanese Risotto. Enoki Mushroom. Asparagus. Vegan Parmesan. Japanese-style risotto with enoki, asparagus, and vegan cheese — where richness is born from simplicity and care."
          ],
          "price": {
            "amount": 18
          },
          "titleSuffix": " (v, gf)"
        }
      }
    },
    "pearl-fresh": {
      "name": "Pearl Fresh",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Assorted mushrooms and bamboo fungus, centered by the delicate richness of quail egg.",
            "VEGETARIAN / GF | CONTAINS: EGG"
          ]
        },
        "a-la-carte": {
          "paragraphs": [
            "Assorted Mushrooms. Bamboo Fungus. Quail Eggs. Slow-steamed mushroom broth with bamboo fungus and quail egg — a sip of stillness and healing breath."
          ],
          "price": {
            "amount": 18
          }
        }
      }
    },
    "the-sunlit-grove": {
      "name": "The Sunlit Grove",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Avocado, golden kiwi, yellow watermelon and pineapple, beneath a light scatter of red quinoa.",
            "VEGETARIAN / GF"
          ]
        }
      }
    },
    "the-lotus-pond": {
      "name": "The Lotus Pond",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "A pale pool of silky yam purée holds tender lotus root, while delicate zucchini ribbons cradle lotus seeds above the surface. Soft and tranquil, like a lotus pond at first light.",
            "VEGAN / GF"
          ]
        }
      },
      "summary": "Yam purée, lotus root, zucchini and lotus seeds."
    },
    "mountains-and-rivers": {
      "name": "Mountains and Rivers",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Morel mushrooms with silken tofu, tender mushroom and creamy mashed potato, dusted with barley leaf powder.",
            "VEGAN / GF"
          ]
        }
      }
    },
    "the-hillside": {
      "name": "The Hillside",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Charred eggplant with bright aji verde, mellow vegan cheese and the aromatic lift of shiso leaves.",
            "VEGAN / GF"
          ]
        },
        "a-la-carte": {
          "paragraphs": [
            "Eggplant. Aji Verde with Vegan Cheese. Perilla. Eggplant chrysanthemum with aji verde, vegan cheese, and sesame leaf — beauty shaped by balance."
          ],
          "price": {
            "amount": 15
          },
          "titleSuffix": " (v, gf)"
        }
      }
    },
    "the-stone-garden": {
      "name": "The Stone Garden",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Black bean and black sesame tofu, enriched with egg and peanut. Earthy and quietly striking.",
            "VEGETARIAN | CONTAINS: EGG, PEANUT, SESAME"
          ]
        }
      }
    },
    "the-forest": {
      "name": "The Forest",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Oyster mushrooms seared over charcoal with rosemary shoyu butter, rich and aromatic.",
            "VEGETARIAN | CONTAINS: DAIRY"
          ]
        },
        "a-la-carte": {
          "paragraphs": [
            "Oyster Mushroom. Rosemary Shoyu Butter. Charcoal Grill. Charcoal-grilled oyster mushrooms with rosemary butter — a pause before the bite, like pine-scented air"
          ],
          "price": {
            "amount": 16
          }
        }
      }
    },
    "the-harvest": {
      "name": "The Harvest",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Basque-style pumpkin and cashew cake, with a softly caramelized crown and a tender center.",
            "VEGAN | CONTAINS: CASHEW"
          ]
        }
      }
    },
    "the-grassland": {
      "name": "The Grassland",
      "presentations": {
        "a-la-carte": {
          "paragraphs": [
            "Quinoa. Chayote. Muhammara. Taro Stalks. Microgreens. Dates. Berries. Beets. Quinoa, muhammara, berries, and a rice paper butterfly — honoring wind-fed Tibetan meadows."
          ],
          "price": {
            "amount": 15
          },
          "titleSuffix": " (v, gf)"
        }
      }
    },
    "piggy-s-ark": {
      "name": "Piggy's Ark",
      "presentations": {
        "a-la-carte": {
          "paragraphs": [
            "Breaded Steak Mushroom. Lettuce. Steak mushroom katsu sandwich with lettuce — where craving transforms into compassion."
          ],
          "price": {
            "amount": 14
          }
        }
      }
    },
    "highland-meadow": {
      "name": "Highland Meadow",
      "presentations": {
        "a-la-carte": {
          "paragraphs": [
            "Vegan Caviar, Tibetan Barley,Mushroom, Kale, Cauliflower-Mushroom White Sauce,Almond Flakes, Dried Pineapple, Rose Petals."
          ],
          "price": {
            "amount": 16
          },
          "titleSuffix": " (v)"
        }
      }
    },
    "the-snowy-pine": {
      "name": "The Snowy Pine",
      "presentations": {
        "a-la-carte": {
          "paragraphs": [
            "White Pepper Tremella, Basil Almond Sauce, Crispy Rice, Pine Nuts, Vegan Mozzarella Cheese, Spinach Green Oil, Dill, Cedar Lemongrass Spray",
            "Contains: Almond, Pine Nuts."
          ],
          "price": {
            "amount": 16
          },
          "titleSuffix": " (v, gf)"
        }
      }
    },
    "the-desert": {
      "name": "The Desert",
      "presentations": {
        "a-la-carte": {
          "paragraphs": [
            "Elm Ear, Cumin, Crispy Chili Pepper, Sesame, Mexican Squash, Basil.",
            "Contains: Sesame."
          ],
          "price": {
            "amount": 16
          },
          "titleSuffix": " (v, gf)"
        }
      }
    },
    "sushi-trio": {
      "name": "Sushi Trio",
      "presentations": {
        "a-la-carte": {
          "paragraphs": [
            "Cactus. Aloe. Mango. Edible Golden Leaf. Yuzu. Nigiri of nopales, aloe, mango, and gold leaf — elegance born from resilience."
          ],
          "price": {
            "amount": 18
          },
          "titleSuffix": " (v, gf)"
        }
      }
    },
    "emerald-scroll": {
      "name": "Emerald Scroll",
      "presentations": {
        "a-la-carte": {
          "paragraphs": [
            "Perilla Leaves. Nori. Rice. Asparagus. Cucumber. Salted Egg Yolk. Litsea Oil. Pickled Broad Bean Paste. Crispy Burdock. Perilla-wrapped rice roll with salted yolk, burdock, and nori — nourishment that arrives without asking."
          ],
          "price": {
            "amount": 16
          },
          "titleSuffix": " (gf)"
        }
      }
    },
    "life-bullion": {
      "name": "Life Bullion",
      "presentations": {
        "a-la-carte": {
          "paragraphs": [
            "Matsutake. Shiitake. Almond Mushroom. Edamame. Konjac. Tom Yum Jus. Matsutake and konjac dumplings with tom yum jus — ingots of health and spiritual clarity."
          ],
          "price": {
            "amount": 19
          },
          "titleSuffix": " (v)"
        }
      }
    },
    "gin-tonic-sorbet": {
      "name": "Gin & Tonic Sorbet",
      "presentations": {
        "dessert": {
          "paragraphs": [
            "Bright lime and lemon with cucumber and gin, touched by tea jelly for a refreshingclose.",
            "Contains: Alcohol."
          ],
          "price": {
            "amount": 13
          },
          "titleSuffix": " (v, gf)"
        }
      }
    },
    "lucky-arrival": {
      "name": "Lucky Arrival",
      "presentations": {
        "dessert": {
          "paragraphs": [
            "Vegan white chocolate with creamy coconut milk — a gentle, sweet welcome."
          ],
          "price": {
            "amount": 13
          },
          "titleSuffix": " (v, gf)"
        }
      }
    },
    "plant-based-tiramisu": {
      "name": "Plant-Based Tiramisu",
      "presentations": {
        "dessert": {
          "paragraphs": [
            "Coconut milk and vegan mascarpone layered with vegan ladyfingers, dusted with cocoa."
          ],
          "price": {
            "amount": 15
          },
          "titleSuffix": " (v)"
        }
      }
    },
    "himalaya-sunrise": {
      "name": "Himalaya Sunrise",
      "presentations": {
        "drink": {
          "paragraphs": [
            "White rum glides beneath layers of fresh orange and the soft fermented sweetness of Yakult, like golden morning light cresting a silent ridge."
          ]
        }
      }
    },
    "mountain-glacier": {
      "name": "Mountain Glacier",
      "presentations": {
        "drink": {
          "paragraphs": [
            "Cool berries and bright citrus tumble into silver tequila, smoothed by a breath of coconut. A crisp, blue-skyrush—like tasting glacier air before it melts."
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "green-tara": {
      "name": "Green Tara",
      "presentations": {
        "drink": {
          "paragraphs": [
            "Ceremonial matcha folds into oat milk and almond spirits in a smooth green hush. The taste is clean, creamy, and calm—like the stillness of the goddess herself."
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "red-monk": {
      "name": "Red Monk",
      "presentations": {
        "drink": {
          "paragraphs": [
            "Ripe pomegranate and dark berries deepen in the fire of whiskey and spiced rum, with a flicker of chili heat. Sacred and bold, like silence burning from within."
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "moonmilk-lake": {
      "name": "Moonmilk Lake",
      "presentations": {
        "drink": {
          "paragraphs": [
            "Grape and almond flow through white rum like violet mist over still waters. This drink drifts slowly, tender and smooth, like a dream you almost stayed in."
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "first-love-of-the-plateau": {
      "name": "First Love of the Plateau",
      "presentations": {
        "drink": {
          "paragraphs": [
            "Lychee and strawberry hover at the edge of sweetness, stirred by rum and gin into a pink shimmer. Light as amemory, soft as a breath, and over before you name it.",
            "*All cocktails can be served as mocktails — just ask. *Spirits are also available neat or over ice. *Please inform your server of any allergies."
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "chateau-moulin-de-bel-air-2015": {
      "name": "Château Moulin De Bel Air 2015",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Médoc, Bordeaux · Cru Bourgeois · 30-year-old vines · Old oak aged 12 months · 20,000 bottles/yr"
          ],
          "price": {
            "amount": 98
          }
        }
      }
    },
    "chateau-guibot-cerro-gordo-2020": {
      "name": "Château Guibot “Cerro-Gordo” 2020",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Puisseguin Saint-Émilion · 80% Merlot / 20% Cabernet Franc · Stainless-steel ferment · New French oak 24m · 6,000 bottles/yr"
          ],
          "price": {
            "amount": 179
          }
        }
      }
    },
    "chateau-la-raye-in-aeternum-2021": {
      "name": "Château La Raye “In Aeternum” 2021",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Entre-Deux-Mers · 50% Merlot / 40% Cabernet Franc / 10% Cabernet Sauvignon · Hand-harvested · Concrete ferment · 14m aging"
          ],
          "price": {
            "amount": 139
          }
        }
      }
    },
    "chateau-dassault-2019-grand-cru-classe": {
      "name": "Château Dassault 2019 (Grand Cru Classé)",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Saint-Émilion Grand Cru · 60% Merlot / 25% Cabernet Sauvignon / 15% Cabernet Franc · Avg 60y vines · New French oak 24m"
          ],
          "price": {
            "amount": 319
          }
        }
      }
    },
    "chateau-guibot-ephata-2017": {
      "name": "Château Guibot “Ephata” 2017",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Puisseguin Saint-Émilion · 100% Cabernet Franc · 84-year-old vines · Hand-harvested · New French oak 24m · 3,000 bottles/yr",
            "Red"
          ],
          "price": {
            "amount": 269
          }
        }
      }
    },
    "terre-darrigo-etna-rosso-doc-2023": {
      "name": "Terre Darrigo Etna Rosso Doc 2023",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Mt. Etna, Sicily, Italy · Volcanic · Savory · Refined tannins"
          ],
          "price": {
            "amount": 68
          }
        }
      }
    },
    "renieri-rosso-di-montalcino-2023": {
      "name": "Renieri Rosso Di Montalcino 2023",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Tuscany, Italy · Mature · Earthy · Softened structure"
          ],
          "price": {
            "amount": 65
          }
        }
      }
    },
    "moulin-a-vent-2022-cru-beaujolais": {
      "name": "Moulin-À-Vent 2022 (Cru Beaujolais)",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Beaujolais, France · Silky · Floral · Gentle spice"
          ],
          "price": {
            "amount": 72
          }
        }
      }
    },
    "reserve-de-la-comtesse-2021-pauillac": {
      "name": "Réserve De La Comtesse 2021 (Pauillac)",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Bordeaux, France · Polished · Cedar · Dark-fruited"
          ],
          "price": {
            "amount": 139
          }
        }
      }
    },
    "vietti-barolo-castiglione-2021": {
      "name": "Vietti Barolo “Castiglione” 2021",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Piedmont, Italy · Iconic · Rose & spice · Firm elegance"
          ],
          "price": {
            "amount": 165
          }
        }
      }
    },
    "maison-denuziere-cote-rotie-les-hauts-lieux-2022": {
      "name": "Maison Denuzière Côte-Rôtie “Les Hauts Lieux” 2022",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Northern Rhône, France · Intense · Smoky · Savory depth",
            "White"
          ],
          "price": {
            "amount": 185
          }
        }
      }
    },
    "amats-getariako-txakolina": {
      "name": "Amats Getariako Txakolina",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Getaria, Basque Country, Spain · Coastal · Zesty · Lively"
          ],
          "price": {
            "amount": 55
          }
        }
      }
    },
    "gruber-roschitz-gruner-veltliner-muhlberg-weinviertel-dac": {
      "name": "Gruber Röschitz Grüner Veltliner “Mühlberg” (Weinviertel DAC)",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Austria · Dry · Textured · Subtle spice"
          ],
          "price": {
            "amount": 75
          }
        }
      }
    },
    "domdechant-werner-riesling-kirchenstuck-gg": {
      "name": "Domdechant Werner Riesling “Kirchenstück” GG",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Rheingau, Germany · Precise · Mineral-driven · Long finish",
            "Rosé"
          ],
          "price": {
            "amount": 149
          }
        }
      }
    },
    "gabriel-meffre-tavel-saint-ferreol-rose": {
      "name": "Gabriel Meffre Tavel “Saint-Ferréol” Rosé",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Rhône Valley, France · Dry · Structured · Food-friendly",
            "Sparkling"
          ],
          "price": {
            "amount": 58
          }
        }
      }
    },
    "billecart-salmon-blanc-de-blancs-brut": {
      "name": "Billecart-Salmon Blanc De Blancs Brut",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Champagne, France · Fine mousse · Mineral · Elegant finish"
          ],
          "price": {
            "amount": 199
          }
        }
      }
    },
    "domaine-amirault-petnight-pet-nat": {
      "name": "Domaine Amirault “Pet’Night” Pét-Nat",
      "presentations": {
        "wine": {
          "paragraphs": [
            "Loire Valley, France · Natural bubbles · Bright · Crisp · Refreshing"
          ],
          "price": {
            "amount": 75
          }
        }
      }
    },
    "almond-mist-broccoli": {
      "name": "Almond Mist Broccoli",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Earth-grown greens meet nourishing fats: broccoli and wood ear for fiber, almonds and sesame for steady, clean fuel. Almonds, wood ear mushrooms, broccoli, organic olive oil, sea salt, white sesame, white pepper.",
            "Contains: Almonds, Sesame"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "tideglass-sesame-seaweed": {
      "name": "Tideglass Sesame Seaweed",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Mineral-rich sea greens paired with sesame and olive oil for a light, ocean-to-earth reset. Seaweed, white sesame, sea salt, organic olive oil.",
            "Contains: Almonds, Sesame"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "canyon-pepper-peanuts": {
      "name": "Canyon Pepper Peanuts",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Plant protein with a crisp finish: roasted peanuts seasoned for a bright, energizing bite. Peanuts, pepper salt, a touch of corn starch.",
            "Contains: Peanuts"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "matsutake-forest-edamame": {
      "name": "Matsutake Forest Edamame",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Garden protein with forest depth: edamame meets matsutake for calm, savory strength. Edamame, black matsutake, organic olive oil, sea salt."
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "violet-orchard-slaw": {
      "name": "Violet Orchard Slaw",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Crucifer greens and orchard fruit, lifted by sesame fragrance and a fresh cilantro breeze for balance. Purple cabbage, apple, Asian pear, white sesame, organic olive oil, cilantro.",
            "Contains: Sesame"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "truffle-grove-king-oyster-mushrooms": {
      "name": "Truffle-Grove King Oyster Mushrooms",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Forest umami without heaviness: mushrooms and truffle build satisfaction the Earth way. King oyster mushrooms, black truffle, fresh garlic, sea salt, organic olive oil."
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "five-spice-peanuts": {
      "name": "Five-Spice Peanuts",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Warm spice over plant protein: comforting, steady, and clean on the finish. Peanuts, five-spice seasoning, sea salt.",
            "Contains: Peanuts"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "earthling-rye-lotus-rings": {
      "name": "Earthling Rye Lotus Rings",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Chilled rye-and-wheat “lotus-root” rings with a supple, gluten-like bite, tossed with vegetables and herbs for fiber, crunch, and grounded nourishment. Wood ear mushrooms, carrot, button mushrooms, black matsutake, millet chili, cilantro, cooked peanuts, sesame paste, light soy sauce, aged vinegar, vegetarian oyster sauce, salt, sugar, minced garlic, olive oil.",
            "Contains: Peanuts, Sesame, Soy, Wheat"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "kombu-horizon-miso-soup": {
      "name": "Kombu Horizon Miso Soup",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Ocean minerals meet bean-born nourishment: miso and tofu offer clean comfort and gentle protein. Tofu, kombu (seaweed), miso.",
            "Contains: Soy"
          ],
          "price": {
            "amount": 7
          },
          "titleSuffix": " (v)"
        }
      }
    },
    "osmanthus-winter-glow-sweet-soup": {
      "name": "Osmanthus Winter-Glow Sweet Soup",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Fermented rice warmth with a soft floral finish, carrying a trace of natural alcohol from fermentation. Sweet fermented glutinous rice (jiuniang), osmanthus, mini tang yuan.",
            "Contains: Trace Alcohol"
          ],
          "price": {
            "amount": 7
          },
          "titleSuffix": " (v)"
        }
      }
    },
    "silk-sesame-garden-pasta": {
      "name": "Silk-Sesame Garden Pasta",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Sesame and peanut richness balanced with crisp greens, designed for satisfying fats and plant protein without weight. Peanut butter, sesame paste, Sichuan peppercorn, cucumber, mung bean sprouts, light soy sauce, sea salt, sugar, sesame, scallion, garlic, pasta.",
            "Contains: Peanuts, Sesame, Soy, Wheat"
          ],
          "price": {
            "amount": 15
          },
          "titleSuffix": " (v)"
        }
      }
    },
    "sunlight-tomato-pasta": {
      "name": "Sunlight Tomato Pasta",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Tomato brightness with a silky plant-based finish, warm and steady like sunlight on ripe fruit. Tomato, JUST Egg, onion, tomato sauce/paste, sea salt, organic olive oil, pasta.",
            "Contains: Wheat"
          ],
          "price": {
            "amount": 15
          },
          "titleSuffix": " (v)"
        }
      }
    },
    "golden-seared-matsutake-chive-tofu-buns": {
      "name": "Golden-Seared Matsutake Chive Tofu Buns",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Golden-seared warmth with earthy depth: tofu and mushrooms bring protein and umami in a handmade bite. Chives, tofu, plant-based egg, black matsutake, organic olive oil, vegetarian oyster sauce, pepper, sea salt, black sesame.",
            "Contains: Soy, Sesame, Wheat"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "steamed-red-bean-cloud-buns": {
      "name": "Steamed Red Bean Cloud Buns",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Slow-simmered bean sweetness, softly steamed into a gentle, grounding comfort. Red beans, organic olive oil, sugar.",
            "Contains: Wheat"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "emerald-breeze-spring-rolls": {
      "name": "Emerald Breeze Spring Rolls",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Seasonal vegetables in a crisp wrap, light and bright with clean earth energy. Seasonal vegetables.",
            "Contains: Wheat"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "midnight-sesame-mochi": {
      "name": "Midnight Sesame Mochi",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "Sesame richness softened into a chewy finish, calm sweetness and clean comfort. Black sesame, glutinous rice flour, sugar, cooking oil.",
            "Contains: Sesame"
          ],
          "titleSuffix": " (v)"
        }
      }
    },
    "earthling-balance-lunch": {
      "name": "Earthling Balance Lunch",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "A composed lunch set for clean energy and calm satisfaction.",
            "Choose: 2 Appetizers + 1 Soup + 1 Pasta or Handmade Buns"
          ],
          "price": {
            "amount": 26
          }
        }
      }
    },
    "chefs-recommendation-lunch": {
      "name": "Chef’s Recommendation Lunch",
      "presentations": {
        "takeout": {
          "paragraphs": [
            "The Balance Lunch, with one more appetizer chosen to round out the plate.",
            "Choose: 3 Appetizers + 1 Soup + 1 Pasta or Handmade Buns"
          ],
          "price": {
            "amount": 29
          }
        }
      }
    },
    "shiitake-bok-choy-dried-tofu-bao": {
      "name": "Shiitake, Bok Choy & Dried Tofu",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Earthy shiitake, tender bok choy, and dried tofu in a quietly savory composition."
          ],
          "price": {
            "amount": 15
          },
          "titleSuffix": " (V)"
        },
        "handcrafted-bao": {
          "paragraphs": [
            "VEGAN | SOY, WHEAT"
          ],
          "price": {
            "amount": 15
          },
          "diet": "Vegan"
        }
      }
    },
    "zucchini-plant-based-egg-carrot-bao": {
      "name": "Zucchini, Egg & Carrot",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Delicate and comforting, with plant-based egg, gentle zucchini, and a subtle sweetness from carrot."
          ],
          "price": {
            "amount": 16
          },
          "titleSuffix": " (V)"
        },
        "handcrafted-bao": {
          "paragraphs": [
            "VEGETARIAN | EGG, WHEAT"
          ],
          "price": {
            "amount": 16
          },
          "diet": "Vegetarian"
        }
      }
    },
    "mustard-greens-dried-tofu-bao": {
      "name": "Greens and Dry Tofu",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Bright mustard greens balanced by the pleasant depth of dried tofu."
          ],
          "price": {
            "amount": 16
          },
          "titleSuffix": " (V)"
        },
        "handcrafted-bao": {
          "paragraphs": [
            "VEGAN | SOY, WHEAT"
          ],
          "price": {
            "amount": 16
          },
          "diet": "Vegan"
        }
      }
    },
    "mapo-tofu-bao": {
      "name": "Mapo Tofu",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Silken tofu with aromatic spice and softened heat, composed for flavor and balance."
          ],
          "price": {
            "amount": 17
          },
          "titleSuffix": " (V)"
        },
        "handcrafted-bao": {
          "paragraphs": [
            "VEGAN | SOY, WHEAT"
          ],
          "price": {
            "amount": 17
          },
          "diet": "Vegan"
        }
      }
    },
    "chocolate-glutinous-rice-bao": {
      "name": "Chocolate & Glutinous Rice",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "A restrained sweet finish, pairing dark chocolate richness with the tender chew of glutinous rice.",
            "Each basket contains eight bao."
          ],
          "price": {
            "amount": 17
          }
        },
        "handcrafted-bao": {
          "paragraphs": [
            "VEGETARIAN | WHEAT"
          ],
          "price": {
            "amount": 17
          },
          "diet": "Vegetarian"
        }
      }
    },
    "pan-seared-vegan-buns": {
      "name": "Pan-Seared Vegan Buns",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Soft handmade buns filled with tofu, chives, and mushrooms, pan-seared until gently crisp and golden underneath."
          ],
          "price": {
            "amount": 15
          },
          "titleSuffix": " (V)"
        }
      },
      "summary": "Tofu, chives and mushrooms."
    },
    "pan-seared-mushroom-dumplings": {
      "name": "Pan-Seared Mushroom Dumplings",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Crisp-bottom dumplings filled with a savory blend of mushrooms, edamame, and konjac, tender within and golden at the edges."
          ],
          "price": {
            "amount": 19
          },
          "titleSuffix": " (V)"
        }
      },
      "summary": "Mushroom filling with edamame and konjac."
    },
    "sesame-noodles": {
      "name": "Sesame Noodles",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Silky noodles coated in a rich sesame and peanut sauce, brightened with cucumber, bean sprouts, scallion, garlic, and a gentle touch of Sichuan peppercorn."
          ],
          "price": {
            "amount": 19
          },
          "titleSuffix": " (V)"
        }
      },
      "summary": "Sesame and peanut sauce."
    },
    "black-pepper-vegetable-noodles": {
      "name": "Black Pepper Vegetable Noodles",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Tender noodles tossed with shiitake mushrooms, bean sprouts, carrot, and sweet peppers, lifted with black pepper and fresh basil."
          ],
          "price": {
            "amount": 16
          },
          "titleSuffix": " (V)"
        }
      },
      "summary": "Vegetables, mushrooms and fresh basil."
    },
    "matsutake-edamame": {
      "name": "Matsutake Edamame",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Warm edamame touched with the delicate aroma of matsutake, simple, savory, and quietly satisfying."
          ],
          "price": {
            "amount": 8
          },
          "titleSuffix": " (V)"
        }
      }
    },
    "sesame-seaweed-salad": {
      "name": "Sesame Seaweed Salad",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Fresh seaweed lightly dressed with sesame and olive oil, clean and refreshing with a gentle savory finish."
          ],
          "price": {
            "amount": 9
          },
          "titleSuffix": " (V)"
        }
      }
    },
    "apple-pear-purple-cabbage-slaw": {
      "name": "Apple & Pear Purple Cabbage Slaw",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Crisp purple cabbage with apple and Asian pear, lightly dressed with olive oil and finished with sesame and fresh cilantro."
          ],
          "price": {
            "amount": 9
          },
          "titleSuffix": " (V)"
        }
      }
    },
    "crispy-spring-rolls": {
      "name": "Crispy Spring Rolls",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Golden vegetable spring rolls fried until delicate and crisp, light on the outside with a warm savory center."
          ],
          "price": {
            "amount": 11
          },
          "titleSuffix": " (V)"
        }
      }
    },
    "truffle-king-oyster-mushrooms": {
      "name": "Truffle King Oyster Mushrooms",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Tender king oyster mushrooms infused with truffle, bringing together deep umami and a warm, earthy aroma."
          ],
          "price": {
            "amount": 11
          },
          "titleSuffix": " (V)"
        }
      }
    },
    "sichuan-mapo-tofu": {
      "name": "Sichuan Mapo Tofu",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Silken tofu and golden enoki mushrooms simmered in a fragrant Sichuan chili bean sauce with ginger, garlic, chili, and peppercorn oil."
          ],
          "price": {
            "amount": 17
          },
          "titleSuffix": " (V)"
        }
      }
    },
    "sweet-chili-tofu": {
      "name": "Sweet Chili Tofu",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "Firm tofu glazed in a bright sweet chili sauce with soy and blue agave, finished with sesame and fresh green peas."
          ],
          "price": {
            "amount": 15
          },
          "titleSuffix": " (V)"
        }
      },
      "summary": "Tofu with a sweet chili glaze."
    },
    "miso-soup": {
      "name": "Miso Soup",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "A warm, comforting broth of miso, tofu, and kombu, light in body with a clean and deeply savory finish."
          ],
          "price": {
            "amount": 8
          },
          "titleSuffix": " (V)"
        }
      },
      "summary": "Miso, tofu and kombu."
    },
    "chefs-selection-lunch-combo": {
      "name": "Chef’s Selection Lunch Combo",
      "presentations": {
        "lunch": {
          "paragraphs": [
            "A thoughtfully composed lunch with your choice of one signature dish, one small plate, and a warm miso soup.",
            "Choose one signature dish: Any one selection from Xiao Long Bao, Bao & Dumplings, Noodles, or Mains.",
            "Choose one small plate: Matsutake Edamame, Sesame Seaweed Salad, Apple & Pear Purple Cabbage Slaw, Crispy Spring Rolls, or Truffle King Oyster Mushrooms.",
            "Includes: Miso Soup."
          ],
          "price": {
            "amount": 29
          }
        }
      }
    },
    "choose-todays-filling": {
      "name": "Choose today’s filling",
      "presentations": {},
      "summary": "See the current ordering menu for fillings, portions and prices."
    },
    "check-your-dietary-preference": {
      "name": "Check your dietary preference",
      "presentations": {},
      "summary": "Not every filling is vegan; egg-containing fillings are vegetarian."
    },
    "dine-in-or-take-it-home": {
      "name": "Dine in or take it home",
      "presentations": {},
      "summary": "Call for restaurant availability, or order online."
    },
    "shiitake-bok-choy": {
      "name": "Shiitake & Bok Choy",
      "presentations": {
        "xiaolongbao": {
          "paragraphs": [
            "Bok choy with shiitake mushrooms and sesame."
          ],
          "diet": "Vegan",
          "label": "V"
        }
      }
    },
    "shepherds-purse-tofu": {
      "name": "Shepherd’s Purse & Tofu",
      "presentations": {
        "xiaolongbao": {
          "paragraphs": [
            "Shepherd’s purse greens with dried tofu."
          ],
          "diet": "Vegan",
          "label": "V"
        }
      }
    },
    "mapo-tofu": {
      "name": "Mapo Tofu",
      "presentations": {
        "xiaolongbao": {
          "paragraphs": [
            "Tofu seasoned with Sichuan spices and a little heat."
          ],
          "diet": "Vegan",
          "label": "V"
        }
      }
    },
    "zucchini-egg-carrot": {
      "name": "Zucchini, Egg & Carrot",
      "presentations": {
        "xiaolongbao": {
          "paragraphs": [
            "A vegetable and egg filling with zucchini and carrot."
          ],
          "diet": "Vegetarian",
          "label": "VG"
        }
      }
    },
    "silken-earth": {
      "name": "Silken Earth",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "French-inspired vegan foie gras of eggplant and cashew, delicate and silken, with a gentle trace of sweetness.",
            "VEGAN | CONTAINS: CASHEW"
          ]
        }
      }
    },
    "golden-garden": {
      "name": "Golden Garden",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Tender vegetables, chickpeas and edamame in golden vegetarian curry, with gentle spice and garden sweetness.",
            "VEGAN | CONTAINS: SOY"
          ]
        }
      }
    },
    "the-enchanted-forest": {
      "name": "The Enchanted Forest",
      "presentations": {
        "tasting-courses": {
          "paragraphs": [
            "Baby bella mushrooms with black pepper, red wine, onion and garlic, rounded with plant-based cream and butter.",
            "VEGAN"
          ]
        }
      }
    },
    "truffle-grove": {
      "name": "Truffle Grove",
      "presentations": {
        "earth-appetizer": {
          "paragraphs": [
            "Tender king oyster mushrooms with fragrant truffle oil.",
            "VEGAN"
          ],
          "price": {
            "amount": 17
          }
        }
      }
    },
    "field-silk": {
      "name": "Field & Silk",
      "presentations": {
        "earth-appetizer": {
          "paragraphs": [
            "Malan greens and pressed tofu ribbons, with sesame oil, sea salt and a touch of sugar.",
            "VEGAN | CONTAINS: SOY, SESAME"
          ],
          "price": {
            "amount": 17
          }
        }
      }
    },
    "jade-ribbons": {
      "name": "Jade Ribbons",
      "presentations": {
        "earth-appetizer": {
          "paragraphs": [
            "Crisp celtuce ribbons with rice vinegar, sesame oil, sea salt and a trace of sugar.",
            "VEGAN / GF | CONTAINS: SESAME"
          ],
          "price": {
            "amount": 14
          }
        }
      }
    },
    "violet-orchard": {
      "name": "Violet Orchard",
      "presentations": {
        "earth-appetizer": {
          "paragraphs": [
            "Purple cabbage, apple and Asian pear, with white sesame, organic olive oil and cilantro.",
            "VEGAN / GF | CONTAINS: SESAME"
          ],
          "price": {
            "amount": 14
          }
        }
      }
    },
    "garden-cucumber": {
      "name": "Garden Cucumber",
      "presentations": {
        "earth-appetizer": {
          "paragraphs": [
            "Crisp cucumber with soy sauce, rice vinegar, sesame oil, garlic and a touch of sugar.",
            "VEGAN | CONTAINS: SOY, SESAME"
          ],
          "price": {
            "amount": 14
          }
        }
      }
    }
  },
  "sections": [
    {
      "id": "tasting-courses",
      "label": "Tasting Courses",
      "intro": [
        {
          "title": "Tasting Courses",
          "paragraphs": [
            "Six courses for {{fairytalePrice}}, or eight courses, vegan or vegetarian, for {{tastingPrice}} per person."
          ]
        }
      ],
      "groups": [
        {
          "label": "The Fairytale Collection",
          "entries": [
            {
              "title": "The Fairytale Collection",
              "paragraphs": [
                "6-COURSE VEGAN TASTING MENU · {{fairytalePrice}} per person"
              ]
            },
            {
              "itemId": "the-wizard-of-oz",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-secret-garden",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "alice-in-wonderland",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-princess-and-the-pea",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "jack-and-the-beanstalk",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-enchanted-forest",
              "presentation": "tasting-courses"
            }
          ],
          "images": [
            {
              "src": "/images/dishes/jack-and-the-beanstalk-900x1200.png",
              "alt": "Jack and the Beanstalk",
              "caption": "Jack and the Beanstalk"
            },
            {
              "src": "/images/dishes/the-princess-and-the-pea-900x1200.png",
              "alt": "The Princess and the Pea",
              "caption": "The Princess and the Pea"
            },
            {
              "src": "/images/dishes/the-secret-garden-900x1200.png",
              "alt": "The Secret Garden",
              "caption": "The Secret Garden"
            },
            {
              "src": "/images/dishes/the-wizard-of-oz-900x1200.png",
              "alt": "The Wizard of Oz",
              "caption": "The Wizard of Oz"
            },
            {
              "src": "/images/dishes/alice-in-wonderland-900x1200.png",
              "alt": "Alice in Wonderland",
              "caption": "Alice in Wonderland"
            }
          ]
        },
        {
          "label": "The Plant Journey",
          "entries": [
            {
              "title": "The Plant Journey",
              "paragraphs": [
                "8-COURSE VEGAN TASTING MENU"
              ]
            },
            {
              "itemId": "the-island",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-jade",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-veil",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-petal",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-dunes",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "silken-earth",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-lagoon",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-rainforest",
              "presentation": "tasting-courses"
            }
          ],
          "images": [
            {
              "src": "/images/dishes/the-island-900x1200.jpg",
              "alt": "The Island",
              "caption": "The Island"
            },
            {
              "src": "/images/dishes/the-dunes-900x1200.webp",
              "alt": "The Dunes",
              "caption": "The Dunes"
            },
            {
              "src": "/images/dishes/the-rainforest-900x1200.webp",
              "alt": "The Rainforest",
              "caption": "The Rainforest"
            },
            {
              "src": "/images/dishes/the-petal-900x1200.jpeg",
              "alt": "The Petal",
              "caption": "The Petal"
            },
            {
              "src": "/images/dishes/the-jade-900x1200.jpeg",
              "alt": "The Jade",
              "caption": "The Jade"
            },
            {
              "src": "/images/dishes/the-veil-900x1200.jpeg",
              "alt": "The Veil",
              "caption": "The Veil"
            }
          ]
        },
        {
          "label": "The Garden Journey",
          "entries": [
            {
              "title": "The Garden Journey",
              "paragraphs": [
                "8-COURSE VEGETARIAN TASTING MENU"
              ]
            },
            {
              "itemId": "pearl-fresh",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-sunlit-grove",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "golden-garden",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "mountains-and-rivers",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-hillside",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-stone-garden",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-forest",
              "presentation": "tasting-courses"
            },
            {
              "itemId": "the-harvest",
              "presentation": "tasting-courses"
            }
          ],
          "images": [
            {
              "src": "/images/dishes/pearl-fresh-900x1200.jpeg",
              "alt": "Pearl Fresh",
              "caption": "Pearl Fresh"
            },
            {
              "src": "/images/dishes/emerald-tide-900x1200.jpg",
              "alt": "Emerald Tide",
              "caption": "Emerald Tide"
            },
            {
              "src": "/images/dishes/the-forest-900x1200.jpeg",
              "alt": "The Forest",
              "caption": "The Forest"
            }
          ]
        }
      ],
      "images": [
        {
          "src": "/images/dishes/jack-and-the-beanstalk-900x1200.png",
          "alt": "Jack and the Beanstalk",
          "caption": "Jack and the Beanstalk"
        },
        {
          "src": "/images/dishes/the-princess-and-the-pea-900x1200.png",
          "alt": "The Princess and the Pea",
          "caption": "The Princess and the Pea"
        },
        {
          "src": "/images/dishes/the-secret-garden-900x1200.png",
          "alt": "The Secret Garden",
          "caption": "The Secret Garden"
        },
        {
          "src": "/images/dishes/the-wizard-of-oz-900x1200.png",
          "alt": "The Wizard of Oz",
          "caption": "The Wizard of Oz"
        },
        {
          "src": "/images/dishes/alice-in-wonderland-900x1200.png",
          "alt": "Alice in Wonderland",
          "caption": "Alice in Wonderland"
        },
        {
          "src": "/images/dishes/the-island-900x1200.jpg",
          "alt": "The Island",
          "caption": "The Island"
        },
        {
          "src": "/images/dishes/the-dunes-900x1200.webp",
          "alt": "The Dunes",
          "caption": "The Dunes"
        },
        {
          "src": "/images/dishes/the-rainforest-900x1200.webp",
          "alt": "The Rainforest",
          "caption": "The Rainforest"
        },
        {
          "src": "/images/dishes/the-petal-900x1200.jpeg",
          "alt": "The Petal",
          "caption": "The Petal"
        },
        {
          "src": "/images/dishes/the-jade-900x1200.jpeg",
          "alt": "The Jade",
          "caption": "The Jade"
        },
        {
          "src": "/images/dishes/the-veil-900x1200.jpeg",
          "alt": "The Veil",
          "caption": "The Veil"
        },
        {
          "src": "/images/dishes/pearl-fresh-900x1200.jpeg",
          "alt": "Pearl Fresh",
          "caption": "Pearl Fresh"
        },
        {
          "src": "/images/dishes/emerald-tide-900x1200.jpg",
          "alt": "Emerald Tide",
          "caption": "Emerald Tide"
        },
        {
          "src": "/images/dishes/the-forest-900x1200.jpeg",
          "alt": "The Forest",
          "caption": "The Forest"
        }
      ]
    },
    {
      "id": "a-la-carte",
      "label": "A la carte",
      "intro": [
        {
          "title": "A la carte Menu",
          "paragraphs": [
            "A la carte selections may be ordered independently during lunch service. During dinner service, they are available only as additions to a tasting menu.",
            "v – vegan | gf – gluten free | * – gluten free options available upon request"
          ]
        }
      ],
      "groups": [
        {
          "label": "Earth Appetizer",
          "entries": [
            {
              "itemId": "truffle-grove",
              "presentation": "earth-appetizer"
            },
            {
              "itemId": "field-silk",
              "presentation": "earth-appetizer"
            },
            {
              "itemId": "jade-ribbons",
              "presentation": "earth-appetizer"
            },
            {
              "itemId": "violet-orchard",
              "presentation": "earth-appetizer"
            },
            {
              "itemId": "garden-cucumber",
              "presentation": "earth-appetizer"
            }
          ],
          "images": []
        },
        {
          "label": "Soup",
          "entries": [
            {
              "itemId": "pearl-fresh",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "the-island",
              "presentation": "a-la-carte"
            }
          ],
          "images": []
        },
        {
          "label": "Appetizers",
          "entries": [
            {
              "itemId": "the-grassland",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "the-hillside",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "piggy-s-ark",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "the-forest",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "highland-meadow",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "the-snowy-pine",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "the-desert",
              "presentation": "a-la-carte"
            }
          ],
          "images": []
        },
        {
          "label": "Entree",
          "entries": [
            {
              "itemId": "sushi-trio",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "emerald-scroll",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "life-bullion",
              "presentation": "a-la-carte"
            },
            {
              "itemId": "the-rainforest",
              "presentation": "a-la-carte"
            }
          ],
          "images": []
        },
        {
          "label": "Handcrafted Bao",
          "entries": [
            {
              "title": "Handcrafted Bao",
              "paragraphs": [
                "Eight pieces per basket"
              ]
            },
            {
              "itemId": "shiitake-bok-choy-dried-tofu-bao",
              "presentation": "handcrafted-bao"
            },
            {
              "itemId": "zucchini-plant-based-egg-carrot-bao",
              "presentation": "handcrafted-bao"
            },
            {
              "itemId": "mustard-greens-dried-tofu-bao",
              "presentation": "handcrafted-bao"
            },
            {
              "itemId": "mapo-tofu-bao",
              "presentation": "handcrafted-bao"
            },
            {
              "itemId": "chocolate-glutinous-rice-bao",
              "presentation": "handcrafted-bao"
            }
          ],
          "images": []
        }
      ],
      "images": [
        {
          "src": "/images/dishes/soup-service-900x1600.jpg",
          "alt": "Coastal Bamboo",
          "caption": ""
        }
      ]
    },
    {
      "id": "dessert",
      "label": "Desserts",
      "intro": [],
      "groups": [
        {
          "label": "Desserts",
          "entries": [
            {
              "title": "Dessert",
              "paragraphs": []
            },
            {
              "itemId": "gin-tonic-sorbet",
              "presentation": "dessert"
            },
            {
              "itemId": "lucky-arrival",
              "presentation": "dessert"
            },
            {
              "itemId": "plant-based-tiramisu",
              "presentation": "dessert"
            }
          ],
          "images": [
            {
              "src": "/images/desserts/natures-romance-900x1600.webp",
              "alt": "Taste of Beauty dessert presentation",
              "caption": ""
            }
          ]
        }
      ],
      "images": []
    },
    {
      "id": "drink",
      "label": "Drinks",
      "intro": [],
      "groups": [
        {
          "label": "Drinks",
          "entries": [
            {
              "title": "Drinks",
              "paragraphs": []
            },
            {
              "title": "Cocktails",
              "paragraphs": []
            },
            {
              "itemId": "himalaya-sunrise",
              "presentation": "drink"
            },
            {
              "itemId": "mountain-glacier",
              "presentation": "drink"
            },
            {
              "itemId": "green-tara",
              "presentation": "drink"
            },
            {
              "itemId": "red-monk",
              "presentation": "drink"
            },
            {
              "itemId": "moonmilk-lake",
              "presentation": "drink"
            },
            {
              "itemId": "first-love-of-the-plateau",
              "presentation": "drink"
            }
          ],
          "images": [
            {
              "src": "/images/drinks/cocktail-flight.jpeg",
              "alt": "Taste of Beauty cocktails",
              "caption": ""
            }
          ]
        }
      ],
      "images": []
    },
    {
      "id": "wine",
      "label": "Wine",
      "intro": [],
      "groups": [
        {
          "label": "Wine",
          "entries": [
            {
              "title": "Wine",
              "paragraphs": [
                "Red"
              ]
            },
            {
              "title": "House Signature Collection",
              "paragraphs": [
                "(From our winery and partner wineries, curated exclusively for TOB.)"
              ]
            },
            {
              "itemId": "chateau-moulin-de-bel-air-2015",
              "presentation": "wine"
            },
            {
              "itemId": "chateau-guibot-cerro-gordo-2020",
              "presentation": "wine"
            },
            {
              "itemId": "chateau-la-raye-in-aeternum-2021",
              "presentation": "wine"
            },
            {
              "itemId": "chateau-dassault-2019-grand-cru-classe",
              "presentation": "wine"
            },
            {
              "itemId": "chateau-guibot-ephata-2017",
              "presentation": "wine"
            },
            {
              "itemId": "terre-darrigo-etna-rosso-doc-2023",
              "presentation": "wine"
            },
            {
              "itemId": "renieri-rosso-di-montalcino-2023",
              "presentation": "wine"
            },
            {
              "itemId": "moulin-a-vent-2022-cru-beaujolais",
              "presentation": "wine"
            },
            {
              "itemId": "reserve-de-la-comtesse-2021-pauillac",
              "presentation": "wine"
            },
            {
              "itemId": "vietti-barolo-castiglione-2021",
              "presentation": "wine"
            },
            {
              "itemId": "maison-denuziere-cote-rotie-les-hauts-lieux-2022",
              "presentation": "wine"
            },
            {
              "itemId": "amats-getariako-txakolina",
              "presentation": "wine"
            },
            {
              "itemId": "gruber-roschitz-gruner-veltliner-muhlberg-weinviertel-dac",
              "presentation": "wine"
            },
            {
              "itemId": "domdechant-werner-riesling-kirchenstuck-gg",
              "presentation": "wine"
            },
            {
              "itemId": "gabriel-meffre-tavel-saint-ferreol-rose",
              "presentation": "wine"
            },
            {
              "itemId": "billecart-salmon-blanc-de-blancs-brut",
              "presentation": "wine"
            },
            {
              "itemId": "domaine-amirault-petnight-pet-nat",
              "presentation": "wine"
            }
          ],
          "images": []
        }
      ],
      "images": []
    },
    {
      "id": "takeout",
      "label": "Takeout",
      "intro": [
        {
          "title": "Takeout Menu",
          "paragraphs": [
            "Takeout Only | Wednesday – Sunday, 11:30 AM – 9:30 PM | Pick up in-store or order via Uber Eats"
          ]
        }
      ],
      "groups": [
        {
          "label": "Appetizers & Vegetable Plates",
          "entries": [
            {
              "title": "Appetizers & Vegetable Plates",
              "paragraphs": []
            },
            {
              "itemId": "almond-mist-broccoli",
              "presentation": "takeout"
            },
            {
              "itemId": "tideglass-sesame-seaweed",
              "presentation": "takeout"
            },
            {
              "itemId": "canyon-pepper-peanuts",
              "presentation": "takeout"
            },
            {
              "itemId": "matsutake-forest-edamame",
              "presentation": "takeout"
            },
            {
              "itemId": "violet-orchard-slaw",
              "presentation": "takeout"
            },
            {
              "itemId": "truffle-grove-king-oyster-mushrooms",
              "presentation": "takeout"
            },
            {
              "itemId": "five-spice-peanuts",
              "presentation": "takeout"
            },
            {
              "itemId": "earthling-rye-lotus-rings",
              "presentation": "takeout"
            }
          ],
          "images": []
        },
        {
          "label": "Soups",
          "entries": [
            {
              "title": "Soups",
              "paragraphs": []
            },
            {
              "itemId": "kombu-horizon-miso-soup",
              "presentation": "takeout"
            },
            {
              "itemId": "osmanthus-winter-glow-sweet-soup",
              "presentation": "takeout"
            }
          ],
          "images": []
        },
        {
          "label": "Pasta",
          "entries": [
            {
              "title": "Pasta",
              "paragraphs": []
            },
            {
              "itemId": "silk-sesame-garden-pasta",
              "presentation": "takeout"
            },
            {
              "itemId": "sunlight-tomato-pasta",
              "presentation": "takeout"
            }
          ],
          "images": []
        },
        {
          "label": "House Buns",
          "entries": [
            {
              "title": "House Buns",
              "paragraphs": [],
              "price": {
                "amount": 14,
                "suffix": " (4 pcs)"
              }
            },
            {
              "itemId": "golden-seared-matsutake-chive-tofu-buns",
              "presentation": "takeout"
            },
            {
              "itemId": "steamed-red-bean-cloud-buns",
              "presentation": "takeout"
            }
          ],
          "images": []
        },
        {
          "label": "Treats",
          "entries": [
            {
              "title": "House Buns",
              "paragraphs": [],
              "price": {
                "amount": 7,
                "suffix": " (4 pcs)"
              }
            },
            {
              "itemId": "emerald-breeze-spring-rolls",
              "presentation": "takeout"
            },
            {
              "itemId": "midnight-sesame-mochi",
              "presentation": "takeout"
            }
          ],
          "images": []
        },
        {
          "label": "Set Lunch",
          "entries": [
            {
              "title": "Set Lunch",
              "paragraphs": []
            },
            {
              "itemId": "earthling-balance-lunch",
              "presentation": "takeout"
            },
            {
              "itemId": "chefs-recommendation-lunch",
              "presentation": "takeout"
            }
          ],
          "images": []
        }
      ],
      "images": []
    },
    {
      "id": "lunch",
      "label": "Lunch",
      "intro": [],
      "groups": [
        {
          "label": "Lunch",
          "entries": [
            {
              "title": "Lunch Menu",
              "paragraphs": [
                "A thoughtful midday selection of plant-based dishes, sides, and comforting combinations.",
                "V = Vegan"
              ]
            },
            {
              "title": "Handcrafted Bao",
              "paragraphs": [
                "Eight pieces per basket"
              ]
            },
            {
              "itemId": "shiitake-bok-choy-dried-tofu-bao",
              "presentation": "handcrafted-bao"
            },
            {
              "itemId": "zucchini-plant-based-egg-carrot-bao",
              "presentation": "handcrafted-bao"
            },
            {
              "itemId": "mustard-greens-dried-tofu-bao",
              "presentation": "handcrafted-bao"
            },
            {
              "itemId": "mapo-tofu-bao",
              "presentation": "handcrafted-bao"
            },
            {
              "itemId": "chocolate-glutinous-rice-bao",
              "presentation": "handcrafted-bao"
            },
            {
              "title": "BAO & DUMPLINGS",
              "paragraphs": []
            },
            {
              "itemId": "pan-seared-vegan-buns",
              "presentation": "lunch"
            },
            {
              "itemId": "pan-seared-mushroom-dumplings",
              "presentation": "lunch"
            },
            {
              "title": "NOODLES",
              "paragraphs": []
            },
            {
              "itemId": "sesame-noodles",
              "presentation": "lunch"
            },
            {
              "itemId": "black-pepper-vegetable-noodles",
              "presentation": "lunch"
            },
            {
              "title": "SMALL PLATES",
              "paragraphs": []
            },
            {
              "itemId": "matsutake-edamame",
              "presentation": "lunch"
            },
            {
              "itemId": "sesame-seaweed-salad",
              "presentation": "lunch"
            },
            {
              "itemId": "apple-pear-purple-cabbage-slaw",
              "presentation": "lunch"
            },
            {
              "itemId": "crispy-spring-rolls",
              "presentation": "lunch"
            },
            {
              "itemId": "truffle-king-oyster-mushrooms",
              "presentation": "lunch"
            },
            {
              "title": "MAINS",
              "paragraphs": []
            },
            {
              "itemId": "sichuan-mapo-tofu",
              "presentation": "lunch"
            },
            {
              "itemId": "sweet-chili-tofu",
              "presentation": "lunch"
            },
            {
              "title": "SOUP",
              "paragraphs": []
            },
            {
              "itemId": "miso-soup",
              "presentation": "lunch"
            },
            {
              "title": "SIGNATURE COMBOS",
              "paragraphs": []
            },
            {
              "itemId": "chefs-selection-lunch-combo",
              "presentation": "lunch"
            }
          ],
          "images": []
        }
      ],
      "images": []
    }
  ],
  "xiaolongbaoFillings": [
    "shiitake-bok-choy-dried-tofu-bao",
    "zucchini-plant-based-egg-carrot-bao",
    "mustard-greens-dried-tofu-bao",
    "mapo-tofu-bao",
    "chocolate-glutinous-rice-bao"
  ],
  "dishWall": [
    [
      {
        "itemId": "the-secret-garden",
        "menu": "59"
      },
      {
        "itemId": "the-island",
        "menu": "99"
      },
      {
        "itemId": "the-petal",
        "menu": "99"
      },
      {
        "itemId": "alice-in-wonderland",
        "menu": "59"
      },
      {
        "itemId": "the-rainforest",
        "menu": "99"
      },
      {
        "itemId": "pearl-fresh",
        "menu": "99",
        "diet": "vegetarian"
      },
      {
        "itemId": "black-pepper-vegetable-noodles",
        "menu": "lunch"
      }
    ],
    [
      {
        "itemId": "the-veil",
        "menu": "99"
      },
      {
        "itemId": "the-jade",
        "menu": "99"
      },
      {
        "itemId": "jack-and-the-beanstalk",
        "menu": "59"
      },
      {
        "itemId": "the-forest",
        "menu": "99",
        "diet": "vegetarian"
      },
      {
        "itemId": "the-dunes",
        "menu": "99"
      },
      {
        "label": "Handmade Xiaolongbao",
        "menu": "xlb"
      }
    ]
  ]
};
