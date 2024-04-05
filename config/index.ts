export const PRODUCT_CATEGORIES = [
  {
    label: 'Premium Rice Varieties',
    value: 'premium_rice' as const,
    featured: [
      {
        name: 'Long Grain Rice',
        description: 'Rich in nutrients and wholesome goodness',
        href: '#',
        imageSrc: 'public\LongGrainRice.jpg',
      },
      {
        name: 'Short Grain Rice',
        description: 'Perfect for Asian desserts and savory dishes',
        href: '#',
        imageSrc: 'public\ShortGrainRice.jpg',
      },
    ],
  },
  {
    label: 'Wholesome Beans Selection',
    value: 'beans' as const,
    featured: [
      {
        name: 'Pinto Beans',
        description: 'Creamy texture and versatile in cooking',
        href: '#',
        imageSrc: 'public/HoneyBeans.jpg',
      },
      {
        name: 'Adzuki Red Beans',
        description: 'Sweet flavor and ideal for desserts',
        href: '#',
        imageSrc: 'public\MilkBeans.jpg',
      },
    ],
  },
  
];
