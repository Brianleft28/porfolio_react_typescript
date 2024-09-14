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
      description: (
        <><p className="mt-3">
        El proyecto para la Secretaría de Innovaciónde Ituzaingó ofrece una solución tecnológica que digitaliza y optimiza la gestión de los procesos administrativos internos. Desarrollado con <span className="p-0.5 text-background bg-secondary rounded-md bg-gradient-to-r from-secondary to-primary">Svelte</span>, <span className="p-0.5 text-background bg-secondary rounded-md bg-gradient-to-r from-secondary to-primary">TypeScript</span>, <span className="p-0.5 text-background bg-secondary rounded-md bg-gradient-to-r from-secondary to-primary">Node.js</span>, <span className="p-0.5 text-background bg-secondary rounded-md bg-gradient-to-r from-secondary to-primary">Express</span> y <span className="p-0.5 text-background bg-secondary rounded-md bg-gradient-to-r from-secondary to-primary">SQL.</span> 
      </p>
      
      <p className="mt-3">
   la aplicación permite cargar, asignar y seguir 'memos' en tiempo real, eliminando el uso de papel y mejorando la eficiencia.
        El sistema incluye un <span className="p-0.5 text-background bg-secondary rounded-md bg-gradient-to-r from-secondary to-primary">motor de búsqueda</span> que facilita el filtrado de memos por descripción, fecha o estado, mejorando la localización y gestión de documentos en la base de datos.
      </p>
      
      <p className="mt-3">
        Además, se ha implementado un <span className="p-0.5 text-background bg-secondary rounded-md bg-gradient-to-r from-secondary to-primary">panel estadístico</span> utilizando <span className="p-0.5 text-background bg-secondary rounded-md bg-gradient-to-r from-secondary to-primary">Chart.js</span>, que proporciona visualización de datos en tiempo real para apoyar la toma de decisiones.
      </p>
      
      <p className="mt-3">
        Esta solución demuestra el uso de tecnologías modernas y eficientes para digitalizar procesos administrativos, posicionando al municipio a la vanguardia de la <span className="p-0.5 text-background bg-secondary rounded-md bg-gradient-to-r from-secondary to-primary">innovación digital</span>.
      </p>
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
      title: "Digital Memorandum",
      description: (
        <>
          <p className="mt-3">
            The project developed for the Secretariat of Innovation of Ituzaingó represents an advanced technological solution aimed at digitizing and eliminating paper from administrative processes. The memo management application is designed to optimize the assignment and tracking of internal communications between secretariats, allowing efficient and real-time traceability.
          </p>
          <p className="mt-3">
            The system allows memos to be uploaded to a digital database, eliminating the need for physical documentation. This process not only reduces paper usage but also speeds up response times and improves the transparency of information flow between areas. Users can assign outputs to memos, associating them with a specific secretariat with a date and time of dispatch.
          </p>
          <p className="mt-3">
            One of the innovative aspects is the implementation of a real-time search engine that allows filtering memos by description, date, or status. This facilitates the quick location of specific documents, improving the internal management of the secretariats.
          </p>
          <p className="mt-3">
            Additionally, the project includes a statistical panel, developed with the Chart.js library, which provides users with a graphical visualization of the data. This functionality allows identifying patterns, measuring the performance of the secretariats, and making informed decisions based on clear and updated metrics.
          </p>
          <p className="mt-3">
            This solution not only simplifies administrative management but also positions the municipality at the forefront of digital innovation, promoting efficiency and sustainability in public management.
          </p>
        </>
      ),
      href: "https://www.google.com",
      github: "https://github.com/",
      badge: ["SvelteKit", "Node", "Typescript", "SQL", "Express", "Tailwind"],
      img: [p1, p2, p3, p4, p5, p6, p7],
    },
  },
];
