type Project = {
  id: number;
  title: string;
  year: number;
  description: string;
  link: string;
  stack: Array<{
    name: string;
    iconSrc: string;
  }>;
  media: Array<{
    mediaType: "main-image" | "image" | "video";
    category: string;
    title: string;
    src: string;
    altText: string;
  }>;
};

type Projects = Project[];