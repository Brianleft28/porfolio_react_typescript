import { Project } from "../../../types";

export const texts = {
  en: {
    title: {
      main: "My Work",
      secondary: "Some of my projects",
    },
  },
  es: {
    title: {
      main: "Mi Trabajo",
      secondary: "Algunos de mis proyectos",
    },
  },
};

export const projects: Project[] = [
  {
    es: {
      id: 1,
      key: 1,
      title: "Proyecto 1",
      description:
        "Descripción del proyecto 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "https://www.google.com",
      github: "https://github.com/",
      badge: ["React", "Tailwind"],
      img: [
        "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg",
        "https://www.mundodeportivo.com/alfabeta/hero/2024/08/esta-habilidad-de-luffy-sera-crucial-para-que-evite-el-mismo-destino-de-gol-d.-roger.jpg?width=768&aspect_ratio=16:9&format=nowebp",
      ],
    },
    en: {
      id: 1,
      key: 1,
      title: "Project 1",
      description:
        "Description of project 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "https://www.google.com",
      github: "https://github.com/",
      badge: ["React", "Tailwind"],
      img: [
        "https://ethic.es/wp-content/uploads/2023/03/imagen.jpg",
        "https://www.mundodeportivo.com/alfabeta/hero/2024/08/esta-habilidad-de-luffy-sera-crucial-para-que-evite-el-mismo-destino-de-gol-d.-roger.jpg?width=768&aspect_ratio=16:9&format=nowebp",
      ],
    },
  },
  {
    es: {
      id: 2,
      key: 2,
      title: "Proyecto 2",
      description:
        "Descripción del proyecto 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "https://www.google.com",
      github: "https://github.com/",
      badge: ["React", "Tailwind"],
      img: ["https://ethic.es/wp-content/uploads/2023/03/imagen.jpg"],
    },
    en: {
      id: 2,
      key: 2,
      title: "Project 2",
      description:
        "Description of project 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "https://www.google.com",
      github: "https://github.com/",
      badge: ["React", "Tailwind"],
      img: ["https://ethic.es/wp-content/uploads/2023/03/imagen.jpg"],
    },
  },
  {
    es: {
      id: 3,
      key: 3,
      title: "Proyecto 3",
      description:
        "Descripción del proyecto 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "https://www.google.com",
      github: "https://github.com/",
      badge: ["React", "Tailwind"],
      img: ["https://ethic.es/wp-content/uploads/2023/03/imagen.jpg"],
    },
    en: {
      id: 3,
      key: 3,
      title: "Project 3",
      description:
        "Description of project 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "https://www.google.com",
      github: "https://github.com/",
      badge: ["React", "Tailwind"],
      img: ["https://ethic.es/wp-content/uploads/2023/03/imagen.jpg"],
    },
  },
];
