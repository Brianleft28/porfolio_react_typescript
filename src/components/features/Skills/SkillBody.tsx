import { CardBody } from "@nextui-org/react";
import { texts } from "./Text";
import { Lang } from "../../../context/Lang";

interface SkillBodyProps {
  lang: Lang;
}

const SkillBody: React.FC<SkillBodyProps> = ({ lang }) => {
  return (
    <CardBody className="md:mt-3 mt-2 px-4">
      <p className="md:text-lg text-md font-secondary text-center md:text-start">
        {texts[lang].title.main}
      </p>
    </CardBody>
  );
};

export default SkillBody;
