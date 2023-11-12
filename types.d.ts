type Project = {
  id: string;
  title: string;
  year: number;
  description: string;
  link: string;
  stack: Array<{
    name: string;
    iconSrc: string;
  }>;
  media: Array<{
    type: 'image' | 'video';
    category: string;
    title: string;
    src: string;
    altText: string;
  }>;
};