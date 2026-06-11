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

  // 05 — Watch Band Classic
  {
    id: 343,
    title: "STONEPATH Watch Band Classic",
    price: 65.0,
    imgSrc:   `${base}/watch-band-classic/main.png`,
    imgHover: `${base}/watch-band-classic/hover.png`,
    gallery: gallery("watch-band-classic"),
    colorOptions: colorsNBDM("watch-band-classic"),
    colors: [
      { bgColor: "bg-brown",     imgSrc: `${base}/watch-band-classic/color-natural.png` },
      { bgColor: "bg-main",      imgSrc: `${base}/watch-band-classic/color-black.png` },
      { bgColor: "bg-dark-grey", imgSrc: `${base}/watch-band-classic/color-dark-brown.png` },
      { bgColor: "bg-dark-blue", imgSrc: `${base}/watch-band-classic/color-midnight.png` },
    ],
    category: "Watch Bands",
    vendor: "STONEPATH",
    description: "A leather band that gets better over time. Full-grain leather develops softness and character after the first few days of wear. Butterfly clasp and pin in nickel-free stainless steel 316L — suitable for sensitive skin. Compatible with Apple Watch Series 1–10, Ultra 1–2, and SE. Adapters for 38/40/41mm and 42/44/45/49mm included.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural", "Black", "Dark Brown", "Midnight"],
    filterSizes: ["38/40/41mm", "42/44/45/49mm"],
    tabFilterOptions: ["Watch Bands"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

  // 06 — Watch Band Heritage
  {
    id: 344,
    title: "STONEPATH Watch Band Heritage",
    price: 65.0,
    imgSrc:   `${base}/watch-band-heritage/main.png`,
    imgHover: `${base}/watch-band-heritage/hover.png`,
    gallery: gallery("watch-band-heritage"),
    colorOptions: colorsNBD("watch-band-heritage"),
    colors: [
      { bgColor: "bg-dark-grey", imgSrc: `${base}/watch-band-heritage/color-dark-brown.png` },
      { bgColor: "bg-main",      imgSrc: `${base}/watch-band-heritage/color-black.png` },
      { bgColor: "bg-brown",     imgSrc: `${base}/watch-band-heritage/color-natural.png` },
    ],
    category: "Watch Bands",
    vendor: "STONEPATH",
    description: "Inspired by the rally straps that equipped racing chronographs in the 1960s. Lighter than the Classic thanks to its perforations, with better ventilation for active use. The leather is extra-thick to compensate for the structural reduction from the holes. Compatible with Apple Watch Series 1–10, Ultra 1–2, and SE.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Dark Brown", "Black", "Natural"],
    filterSizes: ["38/40/41mm", "42/44/45/49mm"],
    tabFilterOptions: ["Watch Bands"],
    tabFilterOptions2: ["New Arrivals"],
  },

  // 07 — AirTag Keychain
  {
    id: 345,
    title: "STONEPATH AirTag Keychain",
    price: 29.0,
    imgSrc:   `${base}/airtag-keychain/main.png`,
    imgHover: `${base}/airtag-keychain/hover.png`,
    gallery: gallery("airtag-keychain"),
    colorOptions: colorsNBD("airtag-keychain"),
    colors: [
      { bgColor: "bg-brown",     imgSrc: `${base}/airtag-keychain/color-natural.png` },
      { bgColor: "bg-main",      imgSrc: `${base}/airtag-keychain/color-black.png` },
      { bgColor: "bg-dark-grey", imgSrc: `${base}/airtag-keychain/color-dark-brown.png` },
    ],
    category: "AirTag",
    vendor: "STONEPATH",
    description: "The AirTag Keychain keeps your AirTag on your keys without adding noticeable bulk. A folded leather strip forms the pocket where the AirTag snaps in with pressure, and a stainless steel ring connects everything to your keyring. Battery replacement requires no tools. Compatible with Apple AirTag Gen 1 and Gen 2.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural", "Black", "Dark Brown"],
    filterSizes: [],
    tabFilterOptions: ["AirTag"],
    tabFilterOptions2: ["New Arrivals", "Best Seller"],
  },

  // 08 — AirTag Luggage Tag
  {
    id: 346,
    title: "STONEPATH AirTag Luggage Tag",
    price: 35.0,
    imgSrc:   `${base}/airtag-luggage-tag/main.png`,
    imgHover: `${base}/airtag-luggage-tag/hover.png`,
    gallery: gallery("airtag-luggage-tag"),
    colorOptions: colorsNBD("airtag-luggage-tag"),
    colors: [
      { bgColor: "bg-brown",     imgSrc: `${base}/airtag-luggage-tag/color-natural.png` },
      { bgColor: "bg-main",      imgSrc: `${base}/airtag-luggage-tag/color-black.png` },
      { bgColor: "bg-dark-grey", imgSrc: `${base}/airtag-luggage-tag/color-dark-brown.png` },
    ],
    category: "AirTag",
    vendor: "STONEPATH",
    description: "The Luggage Tag combines classic bag identification with modern tracking. A transparent window shows your name and contact. The back pocket hides the AirTag so it looks like a standard luggage tag from the outside. Full-grain leather holds up to airports and baggage carousels and develops character trip by trip. Compatible with Apple AirTag Gen 1 and Gen 2.",
    inStock: true,
    filterBrands: ["STONEPATH"],
    filterColor: ["Natural", "Black", "Dark Brown"],
    filterSizes: [],
    tabFilterOptions: ["AirTag"],
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
    slug: "watch-bands",
    title: "Watch Bands",
    imgSrc: `${base}/watch-band-classic/main.png`,
    alt: "Watch Bands",
    width: 615,
    height: 387,
  },
  {
    id: 4,
    slug: "airtag",
    title: "AirTag",
    imgSrc: `${base}/airtag-keychain/main.png`,
    alt: "AirTag",
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
    imgSrc: `${base}/airtag-keychain/main.png`,
    alt: "STONEPATH AirTag Keychain",
    quote:
      "Minimal, clean, and does exactly what it says. The AirTag clicks right in and the leather loop feels solid — not flimsy like the silicone alternatives. Found my keys three times in the first month. Worth every dollar.",
    author: "Nathan W.",
    avatar: "/images/avatar/user-14.jpg",
    title: "STONEPATH AirTag Keychain",
    price: 29,
  },
];
