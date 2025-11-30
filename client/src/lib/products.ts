import octoPowder from "@assets/generated_images/blue_detergent_powder_packaging_for_octo_wash.png";
import octoLiquid from "@assets/generated_images/octo_wash_liquid_detergent_bottle.png";
import octoSoftener from "@assets/generated_images/octo_wash_fabric_softener.png";

import dextaSpray from "@assets/generated_images/yellow_cleaner_spray_bottle_for_dexta.png";
import dextaFloor from "@assets/generated_images/dexta_floor_cleaner.png";
import dextaDish from "@assets/generated_images/dexta_dishwash_gel.png";
import dextaToilet from "@assets/generated_images/dexta_toilet_cleaner.png";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  sizes: string[];
};

export type Brand = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  heroImage?: string; // Optional specific hero for the brand page
  products: Product[];
};

export const brands: Record<string, Brand> = {
  "octo-wash": {
    id: "octo-wash",
    name: "OCTO WASH",
    tagline: "The Future of Fabric Care",
    description: "OCTO WASH is engineered to provide deep cleaning action while being gentle on your clothes. Our advanced formula removes tough stains, protects colors, and leaves a long-lasting fresh scent.",
    color: "blue",
    products: [
      {
        id: "octo-powder",
        name: "OCTO WASH Premium Powder",
        description: "Our signature detergent powder with active enzymes that break down stains at the molecular level.",
        image: octoPowder,
        features: ["Deep stain removal", "Color guard technology", "Fresh ocean scent"],
        sizes: ["500g", "1kg", "3kg", "5kg"]
      },
      {
        id: "octo-liquid",
        name: "OCTO WASH Liquid Detergent",
        description: "A powerful liquid formula designed for both top-load and front-load washing machines. No residue, just pure clean.",
        image: octoLiquid,
        features: ["Instant dissolution", "Machine friendly", "Fabric conditioning"],
        sizes: ["500ml", "1L", "2L"]
      },
      {
        id: "octo-softener",
        name: "OCTO WASH Fabric Softener",
        description: "Add a touch of luxury to your laundry. Makes clothes incredibly soft and easier to iron.",
        image: octoSoftener,
        features: ["Long-lasting fragrance", "Reduces static", "Softens fibers"],
        sizes: ["500ml", "1L"]
      }
    ]
  },
  "dexta": {
    id: "dexta",
    name: "DEXTA",
    tagline: "Total Home Hygiene",
    description: "DEXTA offers a complete range of cleaning solutions for a germ-free, sparkling home. From floors to dishes, we have got you covered.",
    color: "yellow",
    products: [
      {
        id: "dexta-spray",
        name: "DEXTA All-Purpose Spray",
        description: "The ultimate solution for kitchen counters, glass, and appliances. Just spray and wipe for a streak-free shine.",
        image: dextaSpray,
        features: ["Kills 99.9% germs", "Streak-free shine", "Citrus fragrance"],
        sizes: ["500ml"]
      },
      {
        id: "dexta-floor",
        name: "DEXTA Floor Cleaner",
        description: "Keep your floors spotless and germ-free with our concentrated floor cleaner. Safe for all surface types.",
        image: dextaFloor,
        features: ["Pine fresh scent", "Anti-bacterial", "Quick drying"],
        sizes: ["1L", "2L", "5L"]
      },
      {
        id: "dexta-dish",
        name: "DEXTA Dishwash Gel",
        description: "Tough on grease, gentle on hands. One drop is enough to clean a sink full of dishes.",
        image: dextaDish,
        features: ["Lemon power", "Grease cutting", "Easy rinse"],
        sizes: ["250ml", "500ml", "1L"]
      },
      {
        id: "dexta-toilet",
        name: "DEXTA Power Toilet Cleaner",
        description: "Thick formula that clings to the bowl to remove limescale and stains. Kills germs for a hygienic bathroom.",
        image: dextaToilet,
        features: ["Limescale removal", "Color changing formula", "Disinfectant"],
        sizes: ["500ml", "750ml"]
      }
    ]
  }
};
