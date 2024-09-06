import { Button } from "@nextui-org/react";
import { GrContact } from "react-icons/gr";
import { RiBriefcase4Line } from "react-icons/ri";
import { TbFileCv } from "react-icons/tb";
import { Lang } from "../../../context/Lang";
import texts from "./Text";

interface ButtonsProps {
  lang: Lang;
}

const Buttons: React.FC<ButtonsProps> = ({ lang }) => {
  return (
    <>
      <Button
        className="hover:-translate-y-2 duration-250"
        radius="none"
        color="primary"
        fullWidth={true}
        variant="ghost"
        size="lg"
      >
        {texts[lang].buttons.contact} <GrContact />
      </Button>
      <Button
        className="hover:-translate-y-2 duration-250"
        radius="none"
        color="primary"
        fullWidth={true}
        variant="ghost"
        size="lg"
      >
        {texts[lang].buttons.work}
        <RiBriefcase4Line />
      </Button>
      <Button
        className="hover:-translate-y-2 duration-250"
        radius="none"
        color="primary"
        fullWidth={true}
        variant="ghost"
        size="lg"
      >
        {texts[lang].buttons.cv}
        <TbFileCv />
      </Button>
    </>
  );
};

export default Buttons;
