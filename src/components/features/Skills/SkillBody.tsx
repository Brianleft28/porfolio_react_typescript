import { Card, CardBody } from "@nextui-org/react";
import { Lang } from "../../../context/Lang";

interface SkillBodyProps {
  lang: Lang;
}

const SkillBody: React.FC<SkillBodyProps> = ({ lang }) => {
  return (
    <Card 
    shadow="lg"
    radius="none"
    isBlurred={true}
    className="mb-4 bg-transparent p-3"
    fullWidth={true}
    
    >

    <CardBody className="">
    </CardBody>
    </Card>
  );
};

export default SkillBody;
