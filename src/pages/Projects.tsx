import { useContext } from "react";
import { LangContext } from "../context/Lang";
import Wrapper from "../components/features/Projects/Wrapper";
import CardProject from "../components/features/Projects/CardProject";
import { projects } from "../components/features/Projects/Texts";
import { Project } from "../types";
const Projects = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="">
      <div className="col-span-12 md:min-w-full">
        <Wrapper lang={lang}>
          <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-2">
            {projects.map((project: Project) => (
              <>
                <CardProject
                  key={project[lang].key}
                  img={project[lang].img} // Usa la imagen específica del proyecto
                  badge={project[lang].badge} // Usa las etiquetas específicas del proyecto
                  title={project[lang].title}
                  description={project[lang].description}
                />
              </>
            ))}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Projects;
