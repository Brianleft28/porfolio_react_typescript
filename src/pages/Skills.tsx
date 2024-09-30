import { Card, Divider } from "@nextui-org/react";
import SkillHeader from "../components/features/Skills/SkillHeader";
import { useContext } from "react";
import { LangContext } from "../context/Lang";
import SkillBody from "../components/features/Skills/SkillBody";

const Skills = () => {

  const { lang } = useContext(LangContext);

  return (
    <Card
      shadow="lg"
      radius="none"
      isBlurred={true}
      className="mb-4 bg-transparent p-3"
    >
      <SkillHeader lang={lang} />
      <div>
        <p>test paragrafh</p>
      </div>
      <Divider />
      <SkillBody lang={lang} />
    </Card>
  );
};

export default Skills;
