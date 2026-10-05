import { Home, Sparkles, Check } from "lucide-react";

export const services = [
  {
    id: "house-cleans",
    title: "House Cleans",
    shortDescription:
      "Reliable home cleaning designed to make everyday life easier.",
    description:
      "Reliable home cleaning designed to make everyday life easier. Nice Cleaning takes care of the chores so you can enjoy a fresher, more comfortable home.",
    icon: "Home",
    image: "/photo/House%20Cleans.png",
    suitableFor: [
      "Regular home upkeep",
      "Busy households",
      "Keeping your home fresh",
      "Taking the pressure off everyday chores",
    ],
    benefits: [
      "Reliable local service",
      "Careful attention to detail",
      "Professional finish",
      "More time for you",
    ],
    accent: "purple",
    price: "Get a Quote",
    priceNote: "Tailored to your home",
  },

  {
    id: "deep-cleans",
    title: "Deep Cleans",
    shortDescription:
      "A detailed top-to-bottom clean focused on the areas that need extra attention.",
    description:
      "A detailed clean for homes that need extra attention. Nice Cleaning works through the areas that are often overlooked to leave your home feeling fresh, cared for and thoroughly cleaned.",
    icon: "Sparkles",
    image: "/photo/Deep%20Cleans.png",
    suitableFor: [
      "Seasonal refresh",
      "Homes needing extra attention",
      "A full reset",
      "Before or after important occasions",
    ],
    benefits: [
      "Detailed cleaning",
      "Attention to overlooked areas",
      "Thorough finish",
      "Professional approach",
    ],
    accent: "teal",
    price: "Get a Quote",
    priceNote: "Personalised service",
  },

  {
    id: "end-of-tenancy-cleans",
    title: "End of Tenancy Cleans",
    shortDescription:
      "Thorough end of tenancy cleaning designed to help leave a property clean, fresh and ready for its next chapter.",
    description:
      "Thorough end of tenancy cleaning designed to help leave a property clean, fresh and ready for its next chapter.",
    icon: "Check",
    image: "/photo/End%20of%20Tenancy%20Cleans.png",
    suitableFor: [
      "End of tenancy",
      "Rental property handover",
      "Moving out",
      "Preparing a property for inspection",
    ],
    benefits: [
      "Thorough property clean",
      "Professional finish",
      "Attention to detail",
      "Tailored to the property",
    ],
    accent: "coral",
    price: "Get a Quote",
    priceNote: "Quote based on the property",
  },
];

export const serviceIcons = {
  Home,
  Sparkles,
  Check,
};
