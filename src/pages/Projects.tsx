import { useContext } from "react";
import { LangContext } from "../context/Lang";
import Wrapper from "../components/features/Projects/Wrapper";
import CardProject from "../components/features/Projects/CardProject";
import { projects } from "../components/features/Projects/Texts";
import { Project } from "../types";
import Modal from "../components/common/Modal";

const Projects = () => {
  const { lang } = useContext(LangContext);

  return (
    <Wrapper lang={lang}>
      <div className="grid p-5 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-2">
        {projects.map((project: Project, i: number) => (
          <div
            key={project[lang].key + i}
            className="mx-3 rounded-sm shadow-sm  bg-gradient-to-b from-content1 max-w-[450px] p-4 hover:cursor-pointer hover:-translate-y-1 hover:shadow-md rounded-e-md transition-all duration-250 hover:border-b-secondary border-b-primary border-b-2"
          >
            <CardProject
              img={project[lang].img[0]}
              badge={project[lang].badge}
              title={project[lang].title}
              description={project[lang].description}
            />
            <Modal lang={lang} project={project} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;
