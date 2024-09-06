import React from 'react';

const texts = {
  en: {
    greeting: "Hello, I'm",
    name: " Brian Benegas",
    description: (
      <>
      Passionate about clean, efficient code, always seeking new ways to learn and improve. I work with technologies like{" "}
      <span className="text-secondary-400">TypeScript, SQL, Svelte, React, and Node.{" "}</span>
      My approach is centered on excellence: every line of code is an opportunity to refine my skills and add value to the projects I contribute to. I specialize in creating{" "}
      <span className="text-secondary-400">scalable</span> and{" "}
      <span className="text-secondary-400">high-performance</span> applications that deliver{" "}
      <span className="text-secondary-400">exceptional user experiences</span>. I'm committed to constant innovation, exploring new technologies, and pushing the boundaries of what's possible in every project.
    </>
    ),
    buttons:{
      contact: "Contact Me",
      work: "View My Work",
      cv: "Download CV"
    },
    subtitle: {
      words: [
        "Javascript Developer",
        "Backend Developer",
        "Frontend Developer",
        "Database Administrator",
      ]
    }
  },
  es: {
    greeting: "Hola, soy",
    name: " Brian Benegas",
    description: (
      <>
      Apasionado por el código limpio y eficiente, siempre buscando nuevas formas de aprender y mejorar. Trabajo con tecnologías como{" "}
      <span className="text-secondary-400">TypeScript, SQL, Svelte, React y Node.{" "}</span>
      Mi enfoque se basa en la excelencia: cada línea de código es una oportunidad para perfeccionar mis habilidades y aportar valor a los proyectos en los que participo. Me especializo en crear aplicaciones{" "}
      <span className="text-secondary-400">escalables</span> y{" "}
      <span className="text-secondary-400">de alto rendimiento</span> que ofrezcan{" "}
      <span className="text-secondary-400">experiencias de usuario excepcionales</span>. Estoy comprometido con la innovación constante, explorando nuevas tecnologías y empujando los límites de lo que es posible en cada proyecto.
    </>
    ),
    buttons:{
      contact: "Contáctame",
      work: "Ver mi trabajo",
      cv: "Descargar CV"
    },
    subtitle: {
      words: [
        "Desarrollador de Javascript",
        "Desarrollador de Backend",
        "Desarrollador de Frontend",
        "Administrador de Bases de Datos",
      ]
    }
  },
};

export default texts;