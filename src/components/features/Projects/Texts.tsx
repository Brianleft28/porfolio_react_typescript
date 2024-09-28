import { Project } from "../../../types";


import p1 from '../../../img/memorandum/p1.png';
import p2 from '../../../img/memorandum/p1_0.png';
import p3 from '../../../img/memorandum/p1_1.png';
import p4 from '../../../img/memorandum/p1_2.png';
import p5 from '../../../img/memorandum/p1_3.png';
import p6 from '../../../img/memorandum/p1_4.png';
import p7 from '../../../img/memorandum/p1_5.png';

import p1_1 from '../../../img/luzbelitoh/p1.png';
import p2_1 from '../../../img/luzbelitoh/p1_1.png';
import p3_1 from '../../../img/luzbelitoh/p1_2.png';
import p4_1 from '../../../img/luzbelitoh/p1_3.png';
import p5_1 from '../../../img/luzbelitoh/p1_4.png';

import p1_2 from '../../../img/console/p1.png';
import p2_2 from '../../../img/console/p1_1.png';
import p3_2 from '../../../img/console/p1_2.png';
import p4_2 from '../../../img/console/p1_3.png';
import p5_2 from '../../../img/console/p1_4.png';


export const texts = {
  en: {
    title: {
      main: "My Work",
      secondary: "Some of my projects",
    },
    options: [
      { key: "all", label: "All" },
      { key: "backend", label: "Backend" },
      { key: "frontend", label: "Frontend" },
    ],
    selectText: "Filter by category"
  },
  es: {
    title: {
      main: "Mi Trabajo",
      secondary: "Algunos de mis proyectos",
    },
    options: [
      { key: "all", label: "Todos" },
      { key: "backend", label: "Backend" },
      { key: "frontend", label: "Frontend" },
    ],
    selectText: "Filtrar por categoría"
  },
};

export const projects: Project[] = [
  {
    es: {
      id: 1,
      key: 1,
      category: "frontend",
      title: "Memorandum Digital",
      description: (
        <>
          <p>El proyecto para la Secretaría de Innovación de Ituzaingó ofrece una solución tecnológica que digitaliza y optimiza la gestión de los procesos administrativos internos. Desarrollado con Svelte, TypeScript, Node.js, Express y SQL.</p>
          <p>La aplicación permite cargar, asignar y seguir 'memos' en tiempo real, eliminando el uso de papel y mejorando la eficiencia. El sistema incluye un motor de búsqueda que facilita el filtrado de memos por descripción, fecha o estado, mejorando la localización y gestión de documentos en la base de datos.</p>
          <p>Además, se ha implementado un panel estadístico utilizando Chart.js, que proporciona visualización de datos en tiempo real para apoyar la toma de decisiones.</p>
          <p>Esta solución demuestra el uso de tecnologías modernas y eficientes para digitalizar procesos administrativos, posicionando al municipio a la vanguardia de la innovación digital.</p>
        </>
      ),
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
      category: "frontend",
      title: "Digital Memorandum",
      description: (
        <>
          <p>The project for the Secretariat of Innovation of Ituzaingó offers a technological solution that digitizes and optimizes the management of internal administrative processes. Developed with Svelte, TypeScript, Node.js, Express, and SQL.</p>
          <p>The application allows for the real-time uploading, assigning, and tracking of 'memos', eliminating the use of paper and improving efficiency. The system includes a search engine that facilitates filtering memos by description, date, or status, improving the localization and management of documents in the database.</p>
          <p>Additionally, a statistical panel has been implemented using Chart.js, which provides real-time data visualization to support decision-making.</p>
          <p>This solution demonstrates the use of modern and efficient technologies to digitize administrative processes, positioning the municipality at the forefront of digital innovation.</p>
        </>
      ),
      href: "https://www.google.com",
      github: "https://github.com/",
      badge: ["SvelteKit", "Node", "Typescript", "SQL", "Express", "Tailwind"],
      img: [p1, p2, p3, p4, p5, p6, p7],
    },
  },
  {

    es: {
      id: 2,
      key: 2,
      category: "backend",
      title: "Luzbelitoh Discord Bot",
      description: (
        <>
          <p>Este bot de Discord está diseñado para proporcionar una amplia gama de funcionalidades que mejoran la experiencia del usuario en servidores de Discord. Desarrollado con <span className="bg-green-700 rounded-md py-0.5 px-2">Node</span> y la biblioteca <span className="bg-green-700 rounded-md py-0.5 px-2">discord.js</span>, el bot es altamente modular y escalable, permitiendo la fácil adición de nuevas características y comandos. El bot está diseñado con una arquitectura modular que facilita la adición de nuevas funcionalidades sin afectar las existentes.</p>
        </>
      ),
      href: "https://www.google.com",
      github: "https://github.com/Brianleft28/Luzbelitoh",
      badge: ["Discord.js", "Node", "Javascript", "Google APIs"],
      img: [
        p3_1,
        p1_1,
        p2_1,
        p4_1,
        p5_1,
      ],
    },
    
    en: {
      id: 2,
      key: 2,
      category: "backend",
      title: "Luzbelitoh Discord Bot",
      description: (
        <>
          <p>This Discord bot is designed to provide a wide range of functionalities that enhance the user experience in Discord servers. Developed with Node.js and the discord.js library, the bot is highly modular and scalable, allowing for the easy addition of new features and commands. The bot is designed with a modular architecture that facilitates the addition of new functionalities without affecting existing ones.</p>
        </>
      ),
      href: "https://www.google.com",
      github: "https://github.com/Brianleft28/Luzbelitoh",
      badge: ["Discord.js", "Node", "Javascript", "Google APIs"],
      img: [
        p3_1, 
        p1_1,
        p2_1,
        p4_1,
        p5_1
      ],
    }
  },
  {
    es: {
      id: 3,
      key: 3,
      category: "backend",
      title: "Rutina de Autenticación",
      description: (
        <>
          <p>Este proyecto es una aplicación de verificación de usuarios y permisos desarrollada en Node.js. Utiliza varias librerías para proporcionar una interfaz de línea de comandos interactiva y funcional.</p>
          <p>Las principales librerías utilizadas son Axios para realizar solicitudes HTTP a una API externa, Chalk para estilizar la salida en la consola con colores, cli-table3 para mostrar datos en formato de tabla en la consola, dotenv para manejar variables de entorno, e Inquirer para crear menús interactivos en la línea de comandos.</p>
          <p>La aplicación permite verificar si un usuario existe y si las credenciales proporcionadas son correctas, verificar si un usuario tiene ciertos permisos en una aplicación específica, y leer un archivo JSON con múltiples usuarios para verificar sus credenciales y permisos.</p>
          <p>Esto facilita la verificación masiva de usuarios y permisos, ahorrando tiempo y reduciendo errores manuales, y proporciona una interfaz de usuario amigable y fácil de usar en la línea de comandos.</p>
          <p>Además, permite la configuración de la API y el tiempo de espera a través de variables de entorno.</p>
        </>
      ),
      href: "#",
      github: "https://github.com/Brianleft28/Auth_TEST",
      badge: ["Node", "Axios", "chalk", "cli-table3", "inquirer"],
      img: [
        p1_2, 
        p2_2,
        p3_2,
        p4_2,
        p5_2
      ],
  } ,
    en: {
      id: 3,
      key: 3,
      category: "backend",
      title: "Authentication Routine",
      description: (
        <>
          <p>This project is a user and permission verification application developed in Node.js. It uses various libraries to provide an interactive and functional command line interface.</p>
          <p>The main libraries used are Axios to make HTTP requests to an external API, Chalk to style the output in the console with colors, cli-table3 to display data in table format in the console, dotenv to handle environment variables, and Inquirer to create interactive menus in the command line.</p>
          <p>The application allows for verifying if a user exists and if the provided credentials are correct, verifying if a user has certain permissions in a specific application, and reading a JSON file with multiple users to verify their credentials and permissions.</p>
          <p>This facilitates the mass verification of users and permissions, saving time and reducing manual errors, and provides a friendly and easy-to-use user interface on the command line.</p>
          <p>Additionally, it allows for the configuration of the API and the timeout through environment variables.</p>
        </>
      ),
      href: "#",
      github: "https://github.com/Brianleft28/Auth_TEST",
      badge: ["Node", "Axios", "chalk", "cli-table3", "inquirer"],
      img: [
        p1_2, 
        p2_2,
        p3_2,
        p4_2,
        p5_2
      ],
    },
  }
  ]
  