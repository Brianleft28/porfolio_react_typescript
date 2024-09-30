import { Chip } from "@nextui-org/react";
import React from "react";

interface CardProjectProps {
  title: string;
  description: React.ReactNode;
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
      <h3 className="text-secondary sm:text-[19px] text-center md:text-start text-xl font-bold mb-2">{title}</h3>
      {/* img */}
      <div className="flex justify-center mb-3 bg-black ">
        <img
          src={`${img}`}
          alt="project"
          className="w-full hover: h-full object-cover"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-2 mb-3 gap-x-3">
        {badge.map((b, i) => (
          <Chip key={i} variant="dot" color="secondary" size="sm">
            {b}
          </Chip>
        ))}
      </div>
      <div className="mt-2 mb-2 line-clamp-3">
        <div className="line-clamp-3 font-secondary">{description}</div>
      </div>
    </div>
  );
};

export default CardProject;
