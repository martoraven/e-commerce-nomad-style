import React from "react";

const detailsByCategory = {
  Wallets: {
    materials: [
      "Full-grain vegetable-tanned leather",
      "Nickel-free 316L stainless steel hardware",
      "Waxed polyester thread stitching",
      "Designed in the USA",
    ],
    care: "Wipe with a soft dry cloth. Apply a neutral leather conditioner every few months. Keep away from prolonged direct sunlight and moisture — the patina that develops with use is part of the character, not a defect.",
  },
  Eyewear: {
    materials: [
      "Full-grain vegetable-tanned leather exterior",
      "Scratch-free microfiber or natural suede lining",
      "Nickel-free 316L stainless steel hardware",
      "Designed in the USA",
    ],
    care: "Wipe the exterior with a soft dry cloth and let the lining air out periodically. Apply a neutral leather conditioner every few months. Keep away from prolonged direct sunlight and moisture.",
  },
  Kitchen: {
    materials: [
      "High-carbon German stainless steel blades",
      "Solid acacia wood and BPA-free Tritan components",
      "Full-tang, ergonomically shaped handles",
      "Designed in the USA",
    ],
    care: "Hand wash blades and wood parts with mild soap and dry immediately. Jars, lids and removable plastic parts are dishwasher safe. Hone knives regularly and store them in the block.",
  },
  "Electronics & Gadgets": {
    materials: [
      "Aircraft-grade aluminum body",
      "Full-grain leather contact surfaces",
      "Premium electronic components, CE and FCC certified",
      "Designed in the USA",
    ],
    care: "Wipe with a soft dry cloth. Keep away from water unless the product specifies an IP rating. Firmware-free by design: no apps, no updates, no expiration date.",
  },
  "Home & Decor": {
    materials: [
      "Natural wood, mineral composite and aluminum finishes",
      "Warm LED light sources rated for 25,000+ hours",
      "Hand-finished surfaces — slight variation is intentional",
      "Designed in the USA",
    ],
    care: "Dust with a soft dry cloth; avoid abrasive cleaners on matte finishes. For lighting and diffusers, charge or refill only as indicated and keep electronics away from direct water contact.",
  },
};

const defaultDetails = detailsByCategory["Electronics & Gadgets"];

export default function Description({ product }) {
  const details = detailsByCategory[product?.category] || defaultDetails;
  return (
    <>
      {" "}
      <div className="right">
        <div className="letter-1 text-btn-uppercase mb_12">
          {product?.title || "STONEPATH"}
        </div>
        <p className="mb_12 text-secondary">
          {product?.description ||
            "Essentials built to last — full-grain leather goods, forged kitchen tools and electronics designed around one idea: buy it once, use it for decades."}
        </p>
        <p className="text-secondary">
          Every STONEPATH product ships with a 2-year limited warranty against
          manufacturing defects. Electronics also include a 1-year battery
          warranty.
        </p>
      </div>
      <div className="left">
        <div className="letter-1 text-btn-uppercase mb_12">
          MATERIALS, ORIGIN AND CARE GUIDELINES
        </div>
        <ul className="list-text type-disc mb_12 gap-6">
          {details.materials.map((material, index) => (
            <li className="font-2" key={index}>
              {material}
            </li>
          ))}
        </ul>
        <div className="text-caption-2">{details.care}</div>
      </div>
    </>
  );
}
