import { useContext } from "react";
import { LangContext } from "../context/Lang";
import Wrapper from "../components/features/Projects/Wrapper";
import CardProject from "../components/features/Projects/CardProject";
import { projects } from "../components/features/Projects/Texts";
import { Project } from "../types";
import Modal from "../components/common/Modal";
import { CategoryContext } from "../context/Category";

const Projects = () => {
  const { lang } = useContext(LangContext);
  const { category } = useContext(CategoryContext);

  const filteredProjects = projects.filter((project: Project) => {
    if (category === 'all') return true;
    if (category === '') return true;
    return project[lang].category === category;
  } );

  return (
    <Wrapper lang={lang}>
      <div className="grid p-5 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-2">

        {filteredProjects.map((project: Project, i: number) => (
          <div
            key={project[lang].key + i}
            className="mx-3 rounded-sm shadow-sm  bg-gradient-to-b from-content1 max-w-[275px] p-4 hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-md rounded-e-md transition-all duration-250 hover:border-b-secondary border-b-primary border-b-2 border border-divider"
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
