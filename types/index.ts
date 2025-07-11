export type DevIcon = Record<string, string>;

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

export type SiteMetadata = {
  title: string;
  message: string;
  language: string;
  locale: string;
};
