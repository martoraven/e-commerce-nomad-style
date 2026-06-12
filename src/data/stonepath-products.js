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
    category: "Electronics & Gadgets",
    vendor: "STONEPATH",
    description: "One cable on your nightstand instead of three. The Charging Station charges your iPhone, Apple Watch and AirPods at once: a 15W magnetic stand holds the phone upright at a readable angle, the fast-charge watch puck doubles as a nightstand clock mount, and the AirPods pad sits below. Aluminum frame wrapped in full-grain leather — the same hide as our wallets — so it looks like furniture, not electronics. Single braided USB-C cable and 30W adapter included.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Electronics & Gadgets"],
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
    category: "Electronics & Gadgets",
    vendor: "STONEPATH",
    description: "A tracker the size and thickness of a credit card, made to live in your wallet — it slides into any card slot, including our Slim Bifold and Card Sleeve. Works with Apple Find My: see your wallet's location on the map, play a sound to find it nearby, and get notified if you leave it behind. IPX5 water resistant with a battery that lasts up to 2 years. Lose your keys, not your wallet.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Electronics & Gadgets"],
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
    category: "Electronics & Gadgets",
    vendor: "STONEPATH",
    description: "The Party Speaker XL is built like the PA rigs you rent for a wedding, not like a plastic boombox. Dual 12\" long-throw woofers and titanium compression tweeters push 1000W of peak power through a resonance-damped birch plywood cabinet — the same material used in professional stage monitors — so it stays clean and distortion-free even at full volume. Studio-grade DSP offers four tuned sound profiles, and the hot-swappable battery runs up to 24 hours per charge. Dedicated XLR microphone and guitar inputs turn it into a live rig, wireless linking syncs up to 100 units, and the IPX4-rated build, transport wheels, and telescopic handle mean it survives the backyard, the beach, and the venue. This is the last party speaker you buy — not the first of many.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Electronics & Gadgets"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

  // 10 — Laptop Dock
  {
    id: 348,
    title: "STONEPATH Laptop Dock",
    price: 99.0,
    imgSrc:   `${base}/laptop-dock/main.png`,
    imgHover: `${base}/laptop-dock/hover.png`,
    gallery: gallery("laptop-dock"),
    colorOptions: [
      { id: "laptop-dock-black", value: "Black", color: "black" },
    ],
    colors: [
      { bgColor: "bg-main", imgSrc: `${base}/laptop-dock/color-black.png` },
    ],
    category: "Electronics & Gadgets",
    vendor: "STONEPATH",
    description: "One cable turns your laptop into a workstation. The Laptop Dock packs 12 ports into a milled aluminum body: dual 4K HDMI, gigabit Ethernet, three USB-A, two USB-C, SD and microSD readers, audio jack, and 100W power delivery passthrough so your laptop charges while everything is connected. No drivers, no software — plug in and work. The full-grain leather base pad keeps it planted on the desk and your desk free of scratches.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Electronics & Gadgets"],
    tabFilterOptions2: ["New Arrivals"],
  },

  // 11 — Electric Scooter
  {
    id: 349,
    title: "STONEPATH Electric Scooter",
    price: 599.0,
    imgSrc:   `${base}/electric-scooter/main.png`,
    imgHover: `${base}/electric-scooter/hover.png`,
    gallery: gallery("electric-scooter"),
    colorOptions: [
      { id: "electric-scooter-black", value: "Black", color: "black" },
    ],
    colors: [
      { bgColor: "bg-main", imgSrc: `${base}/electric-scooter/color-black.png` },
    ],
    category: "Electronics & Gadgets",
    vendor: "STONEPATH",
    description: "A commuter scooter built like a vehicle, not a toy. The 350W motor (700W peak) handles 15% hills, the long-range battery covers up to 25 miles per charge, and 10\" tubeless pneumatic tires absorb the city instead of transmitting it. Dual braking — front drum plus rear regenerative — stops confidently in the rain, and the one-second folding mechanism makes it train and trunk friendly. IPX5 rated, with an integrated display for speed and battery. No app required for any core function.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Electronics & Gadgets"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

  // 12 — Electric Shaver
  {
    id: 350,
    title: "STONEPATH Electric Shaver",
    price: 89.0,
    imgSrc:   `${base}/electric-shaver/main.png`,
    imgHover: `${base}/electric-shaver/hover.png`,
    gallery: gallery("electric-shaver"),
    colorOptions: [
      { id: "electric-shaver-black", value: "Black", color: "black" },
    ],
    colors: [
      { bgColor: "bg-main", imgSrc: `${base}/electric-shaver/color-black.png` },
    ],
    category: "Electronics & Gadgets",
    vendor: "STONEPATH",
    description: "A shaver that respects your morning. The floating triple-foil head follows the jawline without pressure, powered by a quiet linear motor that cuts close on day-one stubble or three-day growth. Fully waterproof (IPX7) for wet or dry shaving, with a 90-minute battery that charges over USB-C — a five-minute charge covers one full shave. Travel lock for the suitcase, and a full-grain leather travel pouch included. No subscription blades, no proprietary chargers.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Electronics & Gadgets"],
    tabFilterOptions2: ["New Arrivals"],
  },

  // 13 — Cordless Lamp
  {
    id: 351,
    title: "STONEPATH Cordless Lamp",
    price: 69.0,
    imgSrc:   `${base}/cordless-lamp/main.png`,
    imgHover: `${base}/cordless-lamp/hover.png`,
    gallery: gallery("cordless-lamp"),
    colorOptions: [
      { id: "cordless-lamp-black", value: "Black", color: "black" },
    ],
    colors: [
      { bgColor: "bg-main", imgSrc: `${base}/cordless-lamp/color-black.png` },
    ],
    category: "Home & Decor",
    vendor: "STONEPATH",
    description: "Light that goes where the outlet isn't. The Cordless Lamp runs up to 40 hours per charge, with a touch dimmer that sweeps from candle-soft to reading-bright warm light. The IP44-rated aluminum body moves from the dinner table to the balcony to the bedside without a second thought, and recharges over USB-C. No switch hunting, no cable across the table — just pick it up and put the light where the evening happens.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Black"],
    filterSizes: [],
    tabFilterOptions: ["Home & Decor"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

  // 14 — Decor Sculpture
  {
    id: 352,
    title: "STONEPATH Decor Sculpture",
    price: 49.0,
    imgSrc:   `${base}/decor-sculpture/main.png`,
    imgHover: `${base}/decor-sculpture/hover.png`,
    gallery: gallery("decor-sculpture"),
    colorOptions: [
      { id: "decor-sculpture-natural", value: "Natural", color: "beige" },
    ],
    colors: [
      { bgColor: "bg-brown", imgSrc: `${base}/decor-sculpture/color-natural.png` },
    ],
    category: "Home & Decor",
    vendor: "STONEPATH",
    description: "An abstract organic form cast in sandstone-finish composite, weighted to sit solidly on a shelf, console or stack of books. The matte mineral texture catches light softly across the day, working equally well against wood, marble or linen. Each piece is hand-finished, so the surface grain varies slightly from one to the next — yours is yours. Sized to anchor a vignette without dominating it.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural"],
    filterSizes: [],
    tabFilterOptions: ["Home & Decor"],
    tabFilterOptions2: ["New Arrivals"],
  },

  // 15 — Aroma Diffuser
  {
    id: 353,
    title: "STONEPATH Aroma Diffuser",
    price: 59.0,
    imgSrc:   `${base}/aroma-diffuser/main.png`,
    imgHover: `${base}/aroma-diffuser/hover.png`,
    gallery: gallery("aroma-diffuser"),
    colorOptions: [
      { id: "aroma-diffuser-natural", value: "Natural", color: "beige" },
    ],
    colors: [
      { bgColor: "bg-brown", imgSrc: `${base}/aroma-diffuser/color-natural.png` },
    ],
    category: "Home & Decor",
    vendor: "STONEPATH",
    description: "Scent and light in one quiet object. The ultrasonic diffuser turns water and essential oils into a fine cool mist — no heat, no burning — running up to 10 hours on its 300 ml tank with whisper-quiet operation under 25 dB. The real wood grain base hides a warm ambient glow with three intensities, and the auto shut-off lets you fall asleep to it safely. Works as a subtle humidifier in dry months.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural"],
    filterSizes: [],
    tabFilterOptions: ["Home & Decor"],
    tabFilterOptions2: ["New Arrivals"],
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
    slug: "electronics",
    title: "Electronics & Gadgets",
    imgSrc: `${base}/charging-station/main.png`,
    alt: "Electronics & Gadgets",
    width: 615,
    height: 819,
  },
  {
    id: 5,
    slug: "home-decor",
    title: "Home & Decor",
    imgSrc: `${base}/cordless-lamp/main.png`,
    alt: "Home & Decor",
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
