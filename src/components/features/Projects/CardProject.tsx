import { Chip } from "@nextui-org/react";
import React from "react";

interface CardProjectProps {
  title: string;
  description: string;
  img: string;
  badge: string[];
}

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  badge,
  img,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="shadow-sm  bg-gradient-to-tr from-content1 p-4 hover:cursor-pointer hover:-translate-y-1 hover:shadow-md rounded-none transition-all duration-250">
        <h3 className="text-primary text-xl font-bold mb-2">{title}</h3>
        {/* img */}
        <div className="flex justify-center mb-3 bg-black ">
          <img src={`${img}`} alt="project" className="w-1/2" />
        </div>
        <div className="flex flex-row mb-3 gap-x-2">
          {badge.map((b, i) => (
            <Chip key={i} variant="dot" color="secondary" size="sm">
              {b}
            </Chip>
          ))}
        </div>
        <p className="font-secondary text-base text-pretty">{description}</p>
      </div>
    </div>
  );
};

export default CardProject;
