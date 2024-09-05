import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import Subtitle from "./Subtitle";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Card
        shadow="lg"
        radius="none"
        isBlurred={true}
        className="mb-4 bg-transparent p-3"
      >
        <CardHeader>
          <div className="flex flex-col">
            <h1 className="text-center md:text-start text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
              Hello, I'm <span className="text-primary">Brian Benegas</span>
            </h1>
            <Subtitle />
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="md:mt-3 mt-2 px-4">
          <p className="md:text-lg text-md font-secondary text-center md:text-start">
            Obsessive about clean, efficient code and passionate about constant
            learning. I dive deep into{" "}
            <span className="text-secondary-400">
              TypeScript, SQL, Svelte, React, and Node.{" "}
            </span>My
            approach to development is driven by a relentless pursuit of
            perfection—every line of code and architectural decision is an
            opportunity to refine my craft. With a strong appreciation for
            structure and code architecture. I focus on building scalable,
            <span className="text-secondary-400">high-performance </span>{" "}
            applications that deliver exceptional user experiences. Every day is
            a chance to explore new technologies and push the boundaries of
            what’s possible.
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="gap-x-3 md:gap-y-0 gap-y-5 mt-2 md:flex-row flex-col">
          <Buttons />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Hero;
