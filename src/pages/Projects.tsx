import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React from "react";

const Projects = () => {
  return (
    <div className="">
      <div className="col-md-12 flex">
        <Card
          shadow="lg"
          className="mb-4 bg-content1  p-3"
          isBlurred={true}
          fullWidth={true}
          radius="none"
        >
          <CardHeader className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-secondary text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
              Projects
            </p>
            <Divider orientation="vertical" className="h-7 hidden md:flex" />
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter>asd</CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
