export type DevIcon = {
  [key: string]: string;
};

type ImageIcon = {
  name: string;
  src: string;
  classes?: string;
};

export type Project = {
  image: string;
  image_alt: string;
  image_class?: string;
  link: string;
  name: string;
  description: string;
  image_icons?: ImageIcon[];
  dev_icons: string[];
};
