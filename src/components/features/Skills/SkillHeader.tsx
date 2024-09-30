import { CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import { Lang } from "../../../context/Lang";
import { texts } from "./Text";

interface SkillHeaderProps {
  lang: Lang;
}

const SkillHeader: React.FC<SkillHeaderProps> = ({ lang }) => {
 
  return (
    <CardHeader className="flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-4">
        <p className="text-primary shadow-md-secondary text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
          {texts[lang].title.main}
        </p>
          <Divider
            orientation="vertical"
            className="h-9 bg-divider hidden md:flex"
          />
        <p className="font-secondary text-center md:text-start text-lg md:text-xl lg:text-2xl font-semibold tracking-wide leading-tight">
          {texts[lang].title.secondary}
        </p>
    </CardHeader>
  );
};

export default SkillHeader;
