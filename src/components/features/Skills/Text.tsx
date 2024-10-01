import { Skill } from "../../../types";

export const texts = {
  en: {
    title: {
      main: "Skills",
      secondary: "Ability tree",
    },

  },
  es: {
    title: {
      main: "Habilidades",
      secondary: "Árbol de habilidades",
    }
  },
};

export const skills: Skill[] = [
  {
  es:{
      id: 1,
      name: "Frontend",
      description: "Desarrollo de aplicaciones web y móviles con React, Next.js y React Native.",
      img: "https://p7.hiclipart.com/preview/257/475/638/web-development-html5-video-css3-software-development-frontend-web-development.jpg",
      subSkills: [
        {
          id: 1,
          name: "React",
          description: "Librería de JavaScript para construir interfaces de usuario.",
          subSkills: [],
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQFtEyXJg4vHdkl_XpdTlwMRzJOg_9g5uhQ&s"
        },
        {
          id: 3,
          name: "Svelte",
          description: "Framework de JavaScript para construir interfaces de usuario de manera eficiente.",
          subSkills: [],
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLXF8VSI5tMlBTfy-9UDvnO6OGMOvgGFz5g&s"
        },
        {
          id: 4,
          name: "SvelteKit",
          description: "Framework basado en Svelte para crear aplicaciones web completas con enrutamiento, SSR y SSG.",
          subSkills: [],
          img: "https://kit.svelte.dev/images/twitter-thumbnail.jpg"
        },
      ],
    },
    en: {
      id: 1,
      name: "Frontend",
      description: "Development of web and mobile applications with React, Next.js, and React Native.",
      img: "https://p7.hiclipart.com/preview/257/475/638/web-development-html5-video-css3-software-development-frontend-web-development.jpg",
      subSkills: [
        {
          id: 1,
          name: "React",
          description: "JavaScript library for building user interfaces.",
          subSkills: [],
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQFtEyXJg4vHdkl_XpdTlwMRzJOg_9g5uhQ&s"
        },
        {
          id: 3,
          name: "Svelte",
          description: "JavaScript framework for building efficient user interfaces.",
          subSkills: [],
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLXF8VSI5tMlBTfy-9UDvnO6OGMOvgGFz5g&s"
        },
        {
          id: 4,
          name: "SvelteKit",
          description: "Framework based on Svelte for building full-fledged web applications with routing, SSR, and SSG.",
          subSkills: [],
          img: "https://kit.svelte.dev/images/twitter-thumbnail.jpg"
        },
      ],
    },
}

]