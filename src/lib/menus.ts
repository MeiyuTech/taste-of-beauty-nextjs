export type MenuKey = "59" | "99" | "lunch" | "xlb";
export type Course = [string, string, string, string];
export interface DiningMenu {
  title: string;
  zh: string;
  price: string;
  unit: string;
  eyebrow: string;
  image: string;
  alt: string;
  intro: string;
  introZh: string;
  cta: string;
  ctaZh: string;
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
    title: "The Fairytale Collection",
    zh: "童话系列 · 五道纯素晚餐",
    price: "$59",
    unit: "per person · 每位",
    eyebrow: "FIVE COURSES · VEGAN · DINNER",
    image: "garden.webp",
    alt: "The Secret Garden avocado dish from the five-course menu",
    intro: "Five imaginative dishes. One lovely evening.",
    introZh: "五道充满想象的料理，一段值得期待的晚餐。",
    cta: "Reserve the $59 menu",
    ctaZh: "预订 $59 套餐",
    dinner: true,
    courses: [
      [
        "The Wizard of Oz",
        "绿野仙踪",
        "Green vegetable soup with nuts and coconut cream.",
        "绿色蔬菜浓汤，搭配坚果与椰奶。",
      ],
      [
        "The Secret Garden",
        "秘密花园",
        "Avocado, black garlic and taro.",
        "牛油果、黑蒜与芋泥。",
      ],
      [
        "Alice in Wonderland",
        "爱丽丝梦游仙境",
        "Lily bulb tempura with Korean chili sauce.",
        "百合天妇罗，搭配韩式辣酱。",
      ],
      [
        "The Princess and the Pea",
        "豌豆公主",
        "Jicama cakes with vegan yogurt cream.",
        "豆薯饼，搭配纯素酸奶酱。",
      ],
      [
        "Jack and the Beanstalk",
        "杰克与魔豆",
        "A tofu pouch filled with mushrooms and vegetables.",
        "豆腐福袋，包裹菌菇与蔬菜。",
      ],
    ],
  },
  "99": {
    title: "The Tasting Experience",
    zh: "八道式品鉴晚餐",
    price: "$99",
    unit: "per person · 每位",
    eyebrow: "EIGHT COURSES · VEGAN OR VEGETARIAN",
    image: "lotus.webp",
    alt: "An artistic vegetable presentation on a white plate at Taste of Beauty",
    intro: "Take a longer journey through our culinary world.",
    introZh: "用一整晚，探索植物料理的更多可能。",
    cta: "Reserve the $99 menu",
    ctaZh: "预订 $99 套餐",
    dinner: true,
    courses: [
      [
        "The Island",
        "岛屿",
        "Pumpkin, celery and golden ear mushroom.",
        "南瓜、芹菜与金耳菌。",
      ],
      ["The Jade", "翡翠", "Quinoa, tofu and avocado.", "藜麦、豆腐与牛油果。"],
      [
        "The Veil",
        "轻纱",
        "Perilla, oyster mushroom and vegan cheese tempura.",
        "紫苏、平菇与纯素芝士天妇罗。",
      ],
      [
        "The Petal",
        "花瓣",
        "Fresh fruit with purple sweet potato.",
        "鲜果与紫薯。",
      ],
      [
        "The Dunes",
        "沙丘",
        "Cactus, aloe and mango with yuzu.",
        "仙人掌、芦荟、芒果与柚子。",
      ],
      [
        "The Orchard",
        "果园",
        "Yam and water chestnut spheres with quinoa.",
        "山药荸荠球，裹以藜麦。",
      ],
      [
        "The Lagoon",
        "潟湖",
        "Pumpkin blossom in golden curry.",
        "南瓜花，搭配金色咖喱。",
      ],
      [
        "The Rainforest",
        "雨林",
        "Risotto with enoki, asparagus and peas.",
        "金针菇、芦笋与豌豆烩饭。",
      ],
    ],
    vegetarian: [
      [
        "Pearl Fresh",
        "珍珠鲜",
        "Mushroom broth, bamboo fungus and quail egg.",
        "菌菇汤、竹荪与鹌鹑蛋。含蛋。",
      ],
      [
        "The Sunlit Grove",
        "向阳果林",
        "Avocado, kiwi, watermelon and pineapple.",
        "牛油果、奇异果、西瓜与菠萝。",
      ],
      [
        "The Lotus Pond",
        "莲池",
        "Yam purée, lotus root, zucchini and lotus seeds.",
        "山药泥、莲藕、西葫芦与莲子。",
      ],
      [
        "Mountains and Rivers",
        "山河",
        "Morel mushrooms, silken tofu and potato.",
        "羊肚菌、嫩豆腐与土豆。",
      ],
      [
        "The Hillside",
        "山坡",
        "Eggplant, aji verde and vegan cheese.",
        "茄子、秘鲁绿酱与纯素芝士。",
      ],
      [
        "The Stone Garden",
        "石庭",
        "Black bean and sesame tofu with egg and peanut.",
        "黑豆黑芝麻豆腐，含蛋与花生。",
      ],
      [
        "The Forest",
        "森林",
        "Charcoal-seared oyster mushrooms with shoyu butter.",
        "炭烤平菇与酱油黄油。含乳制品。",
      ],
      [
        "The Harvest",
        "丰收",
        "Pumpkin and cashew Basque-style cake.",
        "南瓜腰果巴斯克风味蛋糕。",
      ],
    ],
  },
  lunch: {
    title: "A Better Lunch Break",
    zh: "自在午餐 · 单点精选",
    price: "À la carte",
    unit: "Tue–Sun · 周二至周日",
    eyebrow: "LUNCH · 12:30–3:30 PM",
    image: "pot.webp",
    alt: "Taste of Beauty dish served in an ornate covered vessel",
    intro: "Come in for a little everyday pleasure.",
    introZh: "午餐不必匆忙，来吃一点喜欢的。",
    cta: "Reserve for lunch",
    ctaZh: "预订午餐",
    dinner: false,
    courses: [
      [
        "Pan-Seared Vegan Buns",
        "纯素生煎包",
        "Tofu, chives and mushrooms.",
        "豆腐、韭菜与菌菇。",
      ],
      [
        "Pan-Seared Mushroom Dumplings",
        "菌菇煎饺",
        "Mushroom filling with edamame and konjac.",
        "菌菇、毛豆与魔芋内馅。",
      ],
      [
        "Sesame Noodles",
        "麻酱面",
        "Sesame and peanut sauce.",
        "芝麻花生酱汁。",
      ],
      [
        "Black Pepper Vegetable Noodles",
        "黑椒蔬菜面",
        "Vegetables, mushrooms and fresh basil.",
        "蔬菜、菌菇与新鲜罗勒。",
      ],
      [
        "Sweet Chili Tofu",
        "甜辣豆腐",
        "Tofu with a sweet chili glaze.",
        "裹以甜辣酱汁的豆腐。",
      ],
      ["Miso Soup", "味噌汤", "Miso, tofu and kombu.", "味噌、豆腐与昆布。"],
    ],
  },
  xlb: {
    title: "Handmade Xiaolongbao",
    zh: "手工小笼包",
    price: "By selection",
    unit: "按当日口味选择",
    eyebrow: "DINE IN · PICKUP · DELIVERY",
    image: "xlb-0.webp",
    alt: "Taste of Beauty xiaolongbao in a yellow steamer basket",
    intro: "A little basket of comfort, here or at home.",
    introZh: "一笼小笼包，在店里享用，也把美味带回家。",
    cta: "Reserve for lunch",
    ctaZh: "预订午餐 · 请确认供应",
    dinner: false,
    courses: [
      [
        "Choose today’s filling",
        "查看当日口味",
        "See the current ordering menu for fillings, portions and prices.",
        "当日口味、份量与价格以点餐页面为准。",
      ],
      [
        "Check your dietary preference",
        "核对饮食需求",
        "Not every filling is vegan; egg-containing fillings are vegetarian.",
        "并非每款都是纯素；含蛋款属于蛋奶素。",
      ],
      [
        "Dine in or take it home",
        "堂食、自取或外送",
        "Call for restaurant availability, or order online.",
        "堂食供应请致电确认；自取与外送可线上下单。",
      ],
    ],
  },
};
