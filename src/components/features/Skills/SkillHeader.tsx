import { CardHeader } from "@nextui-org/react";
import React from "react";
import { Lang } from "../../../context/Lang";
import { texts } from "./Text";

interface SkillHeaderProps {
  lang: Lang;
}

const SkillHeader: React.FC<SkillHeaderProps> = ({ lang }) => {
  return (
    <CardHeader>
      <div className="flex flex-col">
        <h1 className="text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
          {texts[lang].title}
        </h1>
      </div>
    </CardHeader>
  );
};

export default SkillHeader;
