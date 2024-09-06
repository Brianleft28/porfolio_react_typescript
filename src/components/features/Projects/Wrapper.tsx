import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import { Lang } from "../../../context/Lang";
import { texts } from "./Texts";

interface WrapperProps {
  children: React.ReactNode;
  lang: Lang;
}

const Wrapper: React.FC<WrapperProps> = ({ children, lang }) => {
  return (
    <Card
      shadow="lg"
      className="mb-4 bg-transparent p-3"
      isBlurred={true}
      fullWidth={true}
      radius="none"
    >
      <CardHeader className="flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-4">
        <p className="text-primary shadow-md-secondary text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
          {texts[lang].title.main}
        </p>
        <div>
          <Divider
            orientation="vertical"
            className="h-9 bg-divider hidden md:flex"
          />
        </div>
        <p className="font-secondary text-center md:text-start text-lg md:text-xl lg:text-2xl font-semibold tracking-wide leading-tight">
          {texts[lang].title.secondary}
        </p>
      </CardHeader>
      <Divider orientation="horizontal" className="w-full bg-divider" />
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default Wrapper;
