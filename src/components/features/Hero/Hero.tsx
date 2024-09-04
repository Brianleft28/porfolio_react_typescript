import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import Subtitle from "./Subtitle";

const Hero = () => {
  return (
    <div className="font-primary">
        <Card
          shadow="md"
          radius="md"
          isBlurred={true}
          className="bg-transparent p-3"
        >
          <CardHeader>
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold tracking-wide leading-tight">
                Hello, I'm <span className="text-primary">Brian Benegas</span>
              </h1>
              <Subtitle />
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-lg">
              I'm a full-stack developer based in New York City. I specialize in
              building web applications using modern technologies.
            </p>
          </CardBody>
          <CardFooter>
            <Button  radius="none" color="primary" variant="ghost" size="lg">
              Contact Me
            </Button>
          </CardFooter>
        </Card>
    </div>
  );
};

export default Hero;
