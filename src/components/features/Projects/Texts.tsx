import { Project } from "../../../types";
import p1 from '../../../img/memorandum/p1.png';
import p2 from '../../../img/memorandum/p1_0.png';
import p3 from '../../../img/memorandum/p1_1.png';
import p4 from '../../../img/memorandum/p1_2.png';
import p5 from '../../../img/memorandum/p1_3.png';
import p6 from '../../../img/memorandum/p1_4.png';
import p7 from '../../../img/memorandum/p1_5.png';
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
      title: "Memorandum Digital",
      description: [
        "El proyecto para la Secretaría de Innovación de Ituzaingó ofrece una solución tecnológica que digitaliza y optimiza la gestión de los procesos administrativos internos. Desarrollado con Svelte, TypeScript, Node.js, Express y SQL.",
        "La aplicación permite cargar, asignar y seguir 'memos' en tiempo real, eliminando el uso de papel y mejorando la eficiencia. El sistema incluye un motor de búsqueda que facilita el filtrado de memos por descripción, fecha o estado, mejorando la localización y gestión de documentos en la base de datos.",
        "Además, se ha implementado un panel estadístico utilizando Chart.js, que proporciona visualización de datos en tiempo real para apoyar la toma de decisiones.",
        "Esta solución demuestra el uso de tecnologías modernas y eficientes para digitalizar procesos administrativos, posicionando al municipio a la vanguardia de la innovación digital."
      ],
      href: "https://www.google.com",
      github: "https://3ithub.com/",
      badge: ["SvelteKit", "Node", "Typescript", "SQL", "Express", "Tailwind"],
      img: [
        p1,
        p2,
        p3,
        p4,
        p5,
        p6,
        p7
      ],
    },
    en: {
      id: 1,
      key: 1,
      title: "Digital Memorandum",
      description: [
          "The project for the Secretariat of Innovation of Ituzaingó offers a technological solution that digitizes and optimizes the management of internal administrative processes. Developed with Svelte, TypeScript, Node.js, Express, and SQL.",
          "The application allows for the real-time uploading, assigning, and tracking of 'memos', eliminating the use of paper and improving efficiency. The system includes a search engine that facilitates filtering memos by description, date, or status, improving the localization and management of documents in the database.",
          "Additionally, a statistical panel has been implemented using Chart.js, which provides real-time data visualization to support decision-making.",
          "This solution demonstrates the use of modern and efficient technologies to digitize administrative processes, positioning the municipality at the forefront of digital innovation."
        ],
      href: "https://www.google.com",
      github: "https://github.com/",
      badge: ["SvelteKit", "Node", "Typescript", "SQL", "Express", "Tailwind"],
      img: [p1, p2, p3, p4, p5, p6, p7],
    },
  },
];
