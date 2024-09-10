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
    <div className="">
      <h3 className="text-primary text-xl font-bold mb-2">{title}</h3>
      {/* img */}
      <div className="flex justify-center mb-3 bg-black ">
        <img
          src={`${img}`}
          alt="project"
          className="w-full hover: h-full object-cover"
        />
      </div>
      <div className="flex flex-row mb-3 gap-x-2">
        {badge.map((b, i) => (
          <Chip key={i} variant="dot" color="secondary" size="sm">
            {b}
          </Chip>
        ))}
      </div>
      <p className="font-secondary text-base line-clamp-3">{description}</p>
    </div>
  );
};

export default CardProject;
