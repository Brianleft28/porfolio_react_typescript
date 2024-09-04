import { Button } from "@nextui-org/react";
import { GrContact } from "react-icons/gr";
import { RiBriefcase4Line } from "react-icons/ri";
import { TbFileCv } from "react-icons/tb";
const Buttons = () => {
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
        Contact Me <GrContact />
      </Button>
      <Button
        className="hover:-translate-y-2 duration-250"
        radius="none"
        color="primary"
        fullWidth={true}
        variant="ghost"
        size="lg"
      >
        View My Work
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
        Dowlnoad CV
        <TbFileCv />
      </Button>
    </>
  );
};

export default Buttons;
