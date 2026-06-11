const base = "/images/products/stonepath";

const gallery = (slug) => [
  { id: 1, color: "natural", src: `${base}/${slug}/main.png`,       alt: "", width: 600, height: 800 },
  { id: 2, color: "natural", src: `${base}/${slug}/gallery-02.png`, alt: "", width: 600, height: 800 },
  { id: 3, color: "natural", src: `${base}/${slug}/gallery-03.png`, alt: "", width: 600, height: 800 },
];

const colorsNBD = (slug) => [
  { id: `${slug}-natural`,    value: "Natural",    color: "beige" },
  { id: `${slug}-black`,      value: "Black",      color: "black" },
  { id: `${slug}-dark-brown`, value: "Dark Brown", color: "brown" },
];

const colorsNBDM = (slug) => [
  { id: `${slug}-natural`,    value: "Natural",    color: "beige" },
  { id: `${slug}-black`,      value: "Black",      color: "black" },
  { id: `${slug}-dark-brown`, value: "Dark Brown", color: "brown" },
  { id: `${slug}-midnight`,   value: "Midnight",   color: "blue"  },
];

export const stonepathProducts = [
  // 01 — Slim Bifold
  {
    id: 339,
    title: "STONEPATH Slim Bifold",
    price: 55.0,
    imgSrc:   `${base}/slim-bifold/main.png`,
    imgHover: `${base}/slim-bifold/hover.png`,
    gallery: gallery("slim-bifold"),
    colorOptions: colorsNBD("slim-bifold"),
    colors: [
      { bgColor: "bg-brown",     imgSrc: `${base}/slim-bifold/color-natural.png` },
      { bgColor: "bg-main",      imgSrc: `${base}/slim-bifold/color-black.png` },
      { bgColor: "bg-dark-grey", imgSrc: `${base}/slim-bifold/color-dark-brown.png` },
    ],
    category: "Wallets",
    vendor: "STONEPATH",
    description: "The Slim Bifold is the essence of what a wallet should be — nothing extra. Made from full-grain leather that develops a unique patina with use. Four quick-access card slots, a center cash pocket, and waxed-thread stitching throughout. Stainless steel 316L hardware. Unlike bonded leather that peels, full-grain only gets better with every year of use.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural", "Black", "Dark Brown"],
    filterSizes: [],
    tabFilterOptions: ["Wallets"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

  // 02 — Card Sleeve
  {
    id: 340,
    title: "STONEPATH Card Sleeve",
    price: 42.0,
    imgSrc:   `${base}/card-sleeve/main.png`,
    imgHover: `${base}/card-sleeve/hover.png`,
    gallery: gallery("card-sleeve"),
    colorOptions: colorsNBDM("card-sleeve"),
    colors: [
      { bgColor: "bg-brown",     imgSrc: `${base}/card-sleeve/color-natural.png` },
      { bgColor: "bg-main",      imgSrc: `${base}/card-sleeve/color-black.png` },
      { bgColor: "bg-dark-grey", imgSrc: `${base}/card-sleeve/color-dark-brown.png` },
      { bgColor: "bg-dark-blue", imgSrc: `${base}/card-sleeve/color-midnight.png` },
    ],
    category: "Wallets",
    vendor: "STONEPATH",
    description: "For those who have cut down to the essentials. The Card Sleeve is a single piece of leather folded and stitched at the edges — no hardware, no mechanisms. The opening holds 3 to 5 cards and folded bills. As the leather shapes itself to your specific stack, the fit becomes personal.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural", "Black", "Dark Brown", "Midnight"],
    filterSizes: [],
    tabFilterOptions: ["Wallets"],
    tabFilterOptions2: ["New Arrivals"],
  },

  // 03 — Eyewear Sleeve
  {
    id: 341,
    title: "STONEPATH Eyewear Sleeve",
    price: 38.0,
    imgSrc:   `${base}/eyewear-sleeve/main.png`,
    imgHover: `${base}/eyewear-sleeve/hover.png`,
    gallery: gallery("eyewear-sleeve"),
    colorOptions: colorsNBD("eyewear-sleeve"),
    colors: [
      { bgColor: "bg-brown",     imgSrc: `${base}/eyewear-sleeve/color-natural.png` },
      { bgColor: "bg-main",      imgSrc: `${base}/eyewear-sleeve/color-black.png` },
      { bgColor: "bg-dark-grey", imgSrc: `${base}/eyewear-sleeve/color-dark-brown.png` },
    ],
    category: "Eyewear",
    vendor: "STONEPATH",
    description: "The Eyewear Sleeve protects your glasses without adding unnecessary bulk. Soft leather exterior, microfiber interior that cleans lenses every time you store them. No clasps, no zippers — slide in and go. Fits in any jacket or bag pocket without being noticed. Fits frames up to 5.7 inches wide.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural", "Black", "Dark Brown"],
    filterSizes: [],
    tabFilterOptions: ["Eyewear"],
    tabFilterOptions2: ["New Arrivals"],
  },

  // 04 — Eyewear Case
  {
    id: 342,
    title: "STONEPATH Eyewear Case",
    price: 45.0,
    imgSrc:   `${base}/eyewear-case/main.png`,
    imgHover: `${base}/eyewear-case/hover.png`,
    gallery: gallery("eyewear-case"),
    colorOptions: colorsNBD("eyewear-case"),
    colors: [
      { bgColor: "bg-brown",     imgSrc: `${base}/eyewear-case/color-natural.png` },
      { bgColor: "bg-main",      imgSrc: `${base}/eyewear-case/color-black.png` },
      { bgColor: "bg-dark-grey", imgSrc: `${base}/eyewear-case/color-dark-brown.png` },
    ],
    category: "Eyewear",
    vendor: "STONEPATH",
    description: "Where the Sleeve prioritizes minimal weight, the Eyewear Case prioritizes protection. Semi-rigid structure absorbs impacts. Silent magnetic closure. Natural suede interior that won't scratch lenses. Full-grain leather exterior ages with use. For frequent travelers or anyone carrying eyewear that can't afford a scratch.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural", "Black", "Dark Brown"],
    filterSizes: [],
    tabFilterOptions: ["Eyewear"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

  // 05 — Chef's Knife Set
  {
    id: 343,
    title: "STONEPATH Chef's Knife Set",
    price: 129.0,
    imgSrc:   `${base}/knife-set/main.png`,
    imgHover: `${base}/knife-set/hover.png`,
    gallery: gallery("knife-set"),
    colorOptions: [
      { id: "knife-set-natural", value: "Natural", color: "beige" },
    ],
    colors: [
      { bgColor: "bg-brown", imgSrc: `${base}/knife-set/color-natural.png` },
    ],
    category: "Kitchen",
    vendor: "STONEPATH",
    description: "Five forged blades that cover everything from breaking down a chicken to mincing herbs. High-carbon German stainless steel, full-tang construction, and handles ergonomically shaped for hours of prep without fatigue. The set includes an 8\" chef's knife, bread knife, santoku, utility knife, and paring knife, all housed in a solid acacia wood block. Hand wash only — these are tools, not toys.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural"],
    filterSizes: [],
    tabFilterOptions: ["Kitchen"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

  // 06 — Pro Blender
  {
    id: 344,
    title: "STONEPATH Pro Blender",
    price: 89.0,
    imgSrc:   `${base}/pro-blender/main.png`,
    imgHover: `${base}/pro-blender/hover.png`,
    gallery: gallery("pro-blender"),
    colorOptions: [
      { id: "pro-blender-black", value: "Black", color: "black" },
    ],
    colors: [
      { bgColor: "bg-main", imgSrc: `${base}/pro-blender/color-black.png` },
    ],
    category: "Kitchen",
    vendor: "STONEPATH",
    description: "A 1200W motor and six hardened stainless steel blades that pulverize ice, frozen fruit, and fibrous greens without slowing down. The 64 oz BPA-free Tritan jar handles family-size batches, while the variable speed dial and dedicated pulse mode give you real control over texture. Blades, jar, and lid are dishwasher safe. Smoothies, soups, nut butters — one machine, no excuses.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Kitchen"],
    tabFilterOptions2: ["New Arrivals"],
  },

  // 07 — Charging Station
  {
    id: 345,
    title: "STONEPATH Charging Station",
    price: 79.0,
    imgSrc:   `${base}/charging-station/main.png`,
    imgHover: `${base}/charging-station/hover.png`,
    gallery: gallery("charging-station"),
    colorOptions: [
      { id: "charging-station-black", value: "Black", color: "black" },
    ],
    colors: [
      { bgColor: "bg-main", imgSrc: `${base}/charging-station/color-black.png` },
    ],
    category: "Gadgets",
    vendor: "STONEPATH",
    description: "One cable on your nightstand instead of three. The Charging Station charges your iPhone, Apple Watch and AirPods at once: a 15W magnetic stand holds the phone upright at a readable angle, the fast-charge watch puck doubles as a nightstand clock mount, and the AirPods pad sits below. Aluminum frame wrapped in full-grain leather — the same hide as our wallets — so it looks like furniture, not electronics. Single braided USB-C cable and 30W adapter included.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Gadgets"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

  // 08 — Card Tracker
  {
    id: 346,
    title: "STONEPATH Card Tracker",
    price: 35.0,
    imgSrc:   `${base}/card-tracker/main.png`,
    imgHover: `${base}/card-tracker/hover.png`,
    gallery: gallery("card-tracker"),
    colorOptions: [
      { id: "card-tracker-black", value: "Black", color: "black" },
    ],
    colors: [
      { bgColor: "bg-main", imgSrc: `${base}/card-tracker/color-black.png` },
    ],
    category: "Gadgets",
    vendor: "STONEPATH",
    description: "A tracker the size and thickness of a credit card, made to live in your wallet — it slides into any card slot, including our Slim Bifold and Card Sleeve. Works with Apple Find My: see your wallet's location on the map, play a sound to find it nearby, and get notified if you leave it behind. IPX5 water resistant with a battery that lasts up to 2 years. Lose your keys, not your wallet.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Gadgets"],
    tabFilterOptions2: ["New Arrivals"],
  },

  // 09 — Party Speaker XL
  {
    id: 347,
    title: "STONEPATH Party Speaker XL",
    price: 799.0,
    imgSrc:   `${base}/party-speaker/main.png`,
    imgHover: `${base}/party-speaker/hover.png`,
    gallery: gallery("party-speaker"),
    colorOptions: [
      { id: "party-speaker-black", value: "Black", color: "black" },
    ],
    colors: [
      { bgColor: "bg-main", imgSrc: `${base}/party-speaker/color-black.png` },
    ],
    category: "Gadgets",
    vendor: "STONEPATH",
    description: "The Party Speaker XL is built like the PA rigs you rent for a wedding, not like a plastic boombox. Dual 12\" long-throw woofers and titanium compression tweeters push 1000W of peak power through a resonance-damped birch plywood cabinet — the same material used in professional stage monitors — so it stays clean and distortion-free even at full volume. Studio-grade DSP offers four tuned sound profiles, and the hot-swappable battery runs up to 24 hours per charge. Dedicated XLR microphone and guitar inputs turn it into a live rig, wireless linking syncs up to 100 units, and the IPX4-rated build, transport wheels, and telescopic handle mean it survives the backyard, the beach, and the venue. This is the last party speaker you buy — not the first of many.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Gadgets"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

];

export const stonepathCategories = [
  {
    id: 1,
    slug: "wallets",
    title: "Wallets",
    imgSrc: `${base}/slim-bifold/main.png`,
    alt: "Wallets",
    width: 615,
    height: 819,
  },
  {
    id: 2,
    slug: "eyewear",
    title: "Eyewear",
    imgSrc: `${base}/eyewear-case/main.png`,
    alt: "Eyewear",
    width: 615,
    height: 387,
  },
  {
    id: 3,
    slug: "kitchen",
    title: "Kitchen",
    imgSrc: `${base}/knife-set/main.png`,
    alt: "Kitchen",
    width: 615,
    height: 387,
  },
  {
    id: 4,
    slug: "gadgets",
    title: "Gadgets",
    imgSrc: `${base}/charging-station/main.png`,
    alt: "Gadgets",
    width: 615,
    height: 819,
  },
];

export const stonepathTestimonials = [
  {
    id: 339,
    imgSrc: `${base}/slim-bifold/main.png`,
    alt: "STONEPATH Slim Bifold",
    quote:
      "I was skeptical about going from a bulky wallet to something this thin. Two months later I can't imagine going back. Four cards and cash fit perfectly, and the leather has already started developing a great color. Exactly what they promised.",
    author: "James R.",
    avatar: "/images/avatar/user-6.jpg",
    title: "STONEPATH Slim Bifold",
    price: 55,
  },
  {
    id: 340,
    imgSrc: `${base}/card-sleeve/main.png`,
    alt: "STONEPATH Card Sleeve",
    quote:
      "Threw out my old wallet the day this arrived. Three cards and a folded bill — that's all I carry now. The leather molded to my exact stack within the first week. Simple, well-made, no complaints.",
    author: "Michael T.",
    avatar: "/images/avatar/user-11.jpg",
    title: "STONEPATH Card Sleeve",
    price: 42,
  },
  {
    id: 342,
    imgSrc: `${base}/eyewear-case/main.png`,
    alt: "STONEPATH Eyewear Case",
    quote:
      "Bought this after cracking a $300 pair of prescription glasses in a bag. The magnetic snap is solid, the suede inside is genuinely soft, and it fits in my jacket pocket without any bulk. Good investment.",
    author: "David K.",
    avatar: "/images/avatar/user-8.jpg",
    title: "STONEPATH Eyewear Case",
    price: 45,
  },
  {
    id: 345,
    imgSrc: `${base}/charging-station/main.png`,
    alt: "STONEPATH Charging Station",
    quote:
      "Replaced the cable spaghetti on my nightstand with this and never looked back. Phone, watch and earbuds all charge overnight from a single outlet, and the leather base actually looks good next to my lamp. Quality piece.",
    author: "Nathan W.",
    avatar: "/images/avatar/user-14.jpg",
    title: "STONEPATH Charging Station",
    price: 79,
  },
];
