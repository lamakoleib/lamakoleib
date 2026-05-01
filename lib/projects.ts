export type ProjectTag = "Software" | "Design" | "Motion";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tags: ProjectTag[];
  cover: {
    type: "image" | "video";
    src: string;
    alt?: string;
    aspect: string;
  };
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "porsche-prestige-f1",
    title: "Porsche Prestige × F1",
    subtitle:
      "A motion piece for the Montreal Grand Prix, screened at the 2019 event.",
    year: "2019",
    role: "Graphic Design Intern",
    tags: ["Motion", "Design"],
    cover: {
      type: "video",
      src: "/artifacts/Porsche_Prestige_F1.MP4",
      aspect: "16 / 9",
    },
    accent: "#1f1719",
  },
  {
    slug: "findmyprofessor",
    title: "findmyprofessor.ca",
    subtitle:
      "Helping students across Canada discover professors by research interest and expertise.",
    year: "2025",
    role: "UI Designer",
    tags: ["Design"],
    cover: {
      type: "image",
      src: "/artifacts/findmyprof-landing.png",
      alt: "findmyprofessor.ca landing page with hero headline and penguin mascot",
      aspect: "2008 / 1706",
    },
    accent: "#3B4F9E",
  },
  {
    slug: "knitted",
    title: "Knitted",
    subtitle:
      "A social platform for fibre artists to share, discover, and track their knitting and crochet projects.",
    year: "2025",
    role: "PM & Full-stack Developer",
    tags: ["Software", "Design"],
    cover: {
      type: "image",
      src: "/artifacts/knitted-feed.png",
      alt: "Knitted app feed showing knitting project posts",
      aspect: "3 / 2",
    },
    accent: "#E88B8B",
  },
  {
    slug: "mealer",
    title: "Mealer",
    subtitle:
      "A two-sided mobile marketplace connecting home cooks with hungry diners.",
    year: "2023",
    role: "Designer & Android Developer",
    tags: ["Software", "Design"],
    cover: {
      type: "image",
      src: "/artifacts/mealer.png",
      alt: "Composite of six Mealer app screens showing the navigation flow",
      aspect: "4 / 3",
    },
    accent: "#F4A14A",
  },
  {
    slug: "e-hotels",
    title: "e-Hotels",
    subtitle: "A booking experience for boutique stays across North America.",
    year: "2024",
    role: "Designer & Developer",
    tags: ["Software", "Design"],
    cover: {
      type: "image",
      src: "/artifacts/home.webp",
      alt: "e-Hotels home screen with neumorphic search panel",
      aspect: "16 / 9",
    },
    accent: "#A8C2A4",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
