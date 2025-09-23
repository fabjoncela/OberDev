export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category?: string;
};

export const projects: Project[] = [
  {
    slug: "oberon-residence",
    title: "OBERON RESIDENCE",
    description: "A luxury residential project in the heart of the city.",
    image: "/oberon.jpg",
    category: "Projects",
  },
  {
    slug: "the-one-by-ober",
    title: "THE ONE BY OBER",
    description: "A modern living experience with top amenities.",
    image: "/theone.jpg",
    category: "Projects",
  },
  {
    slug: "flower-tower",
    title: "FLOWER TOWER",
    description: "Iconic architecture and green living.",
    image: "/flower.png",
    category: "Projects",
  },
  {
    slug: "oberon-tower",
    title: "OBERON TOWER",
    description: "A vibrant mixed-use development.",
    image: "/testLogo.png",
    category: "Projects",
  },
  
];
