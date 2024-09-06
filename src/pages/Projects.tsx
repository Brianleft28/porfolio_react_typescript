import { useContext } from "react";
import { LangContext } from "../context/Lang";
import Wrapper from "../components/features/Projects/Wrapper";
import CardProject from "../components/features/Projects/CardProject";
const Projects = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="">
      <div className="col-span-12 md:min-w-full">
        <div className="flex">
          <Wrapper lang={lang}>
            <CardProject
              img="https://ethic.es/wp-content/uploads/2023/03/imagen.jpg"
              badge={["React", "Next.js"]}
              title="Memorandum"
              description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nostrum voluptates. Nobis delectus nesciunt architecto eius cupiditate quaerat porro! Eum temporibus harum eius blanditiis ducimus! Maiores ex nobis ab minus."
            />
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
