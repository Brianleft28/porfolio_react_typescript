import { Card, CardBody, CardHeader, Divider, Select, SelectItem } from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import { Lang } from "../../../context/Lang";
import { texts } from "./Texts";
import { Category, CategoryContext } from "../../../context/Category";

interface WrapperProps {
  children: React.ReactNode;
  lang: Lang;
}

const Wrapper: React.FC<WrapperProps> = ({ children, lang }) => {
  const {category, setCategory} = useContext(CategoryContext);




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
      <Select
      placeholder={texts[lang].selectText}
      aria-label="Select"
      variant="underlined"
      size="sm"
      onChange={(e) => setCategory(e.target.value as Category)}
      className="w-full md:w-1/3"
    >
      {texts[lang].options.map((option) => (
        <SelectItem key={option.key}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
      </CardHeader>
      <Divider orientation="horizontal" className="w-full bg-divider" />
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default Wrapper;
