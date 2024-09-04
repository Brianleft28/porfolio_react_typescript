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
<<<<<<< HEAD
            <h1 className="text-5xl font-bold tracking-wide leading-tight">
              Hello, I'm <span className="text-secondary">Brian Benegas</span>
            </h1>
=======
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold tracking-wide leading-tight">
                Hello, I'm <span className="text-primary">Brian Benegas</span>
              </h1>
              <Subtitle />
            </div>
>>>>>>> 9fb748a98d8617ec8c4fe17ac7b0617829d2506d
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
