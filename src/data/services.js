import { Home, Flame, Car, Key, DoorOpen } from 'lucide-react'

export const services = [
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    shortDescription:
      'Regular house cleaning to keep your home feeling fresh, comfortable and cared for.',
    description:
      'A clean home makes everyday life feel lighter. Reset2Shine provides regular house cleaning tailored to your needs, ensuring every room is left spotless, fresh and well-cared for. Whether weekly, fortnightly or one-off, we work around your schedule.',
    icon: 'Home',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
    suitableFor: [
      'Busy families',
      'Working professionals',
      'Regular upkeep',
      'One-off deep cleans',
    ],
    benefits: [
      'Consistent, reliable schedule',
      'Attention to detail in every room',
      'Friendly and professional service',
      'Respectful of your home and belongings',
    ],
    accent: 'blue',
    price: '£16/hour',
    priceNote: '',
  },
  {
    id: 'oven-cleaning',
    title: 'Oven Cleaning',
    shortDescription:
      'Specialist oven cleaning designed to bring back that clean, fresh finish.',
    description:
      'Over time, ovens build up grease and residue that can affect performance and smell. Reset2Shine delivers specialist oven cleaning using professional techniques that leave your oven looking and smelling like new.',
    icon: 'Flame',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85',
    suitableFor: [
      'Domestic ovens',
      'Range cookers',
      'Built-in ovens',
      'Regular oven maintenance',
    ],
    benefits: [
      'Deep-clean results',
      'Removes built-up grease',
      'Restores fresh finish',
      'Professional standard',
    ],
    accent: 'gold',
    price: '£60',
    priceNote: 'Fixed price',
  },
  {
    id: 'car-cleaning',
    title: 'Car Cleaning',
    shortDescription:
      'Professional car cleaning to help your vehicle feel fresh and looked after.',
    description:
      'Your car deserves the same care as your home. Reset2Shine provides thorough car cleaning services to help your vehicle feel fresh, tidy and well-maintained inside and out.',
    icon: 'Car',
    image:
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&q=85',
    suitableFor: [
      'Family cars',
      'Regular vehicles',
      'Pre-sale preparation',
      'General maintenance',
    ],
    benefits: [
      'Interior and exterior cleaning',
      'Fresh, clean finish',
      'Professional approach',
      'Convenient service',
    ],
    accent: 'sage',
    price: '£70',
    priceNote: 'Fixed price',
  },
  {
    id: 'end-of-tenancy',
    title: 'End of Tenancy Cleaning',
    shortDescription:
      'Thorough cleaning for properties preparing for a new tenant or final inspection.',
    description:
      'Moving out of a rental property? Reset2Shine provides comprehensive end-of-tenancy cleaning designed to leave the property in excellent condition for its final inspection or new tenants. Each property is assessed individually to ensure the right service.',
    icon: 'Key',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85',
    suitableFor: [
      'Rental properties',
      'End-of-lease properties',
      'Landlords',
      'Tenants vacating',
    ],
    benefits: [
      'Thorough room-by-room clean',
      'Property assessed individually',
      'Tailored to your property',
      'Professional standard',
    ],
    accent: 'gold',
    price: 'View First',
    priceNote: 'Quote after assessment',
  },
  {
    id: 'move-in-cleaning',
    title: 'Move In Cleaning',
    shortDescription:
      'Start fresh in your new home with a detailed clean before you settle in.',
    description:
      'Moving into a new home is exciting — start it off right with a professional clean from Reset2Shine. We help you settle into a fresh, spotless space from day one. Each property is assessed first to provide an accurate quote.',
    icon: 'DoorOpen',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85',
    suitableFor: [
      'New homeowners',
      'Tenants moving in',
      'Recently vacated properties',
      'Pre-move preparation',
    ],
    benefits: [
      'Fresh start in your new home',
      'Property assessed individually',
      'Thorough detailed clean',
      'Professional service',
    ],
    accent: 'sage',
    price: 'View First',
    priceNote: 'Quote after assessment',
  },
]

export const serviceIcons = {
  Home,
  Flame,
  Car,
  Key,
  DoorOpen,
}