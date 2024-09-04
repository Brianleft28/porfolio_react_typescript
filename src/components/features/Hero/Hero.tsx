import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <div className="font-primary">
      <div>
        <Card
          shadow="md"
          radius="md"
          isBlurred={true}
          className="bg-transparent"
        >
          <CardHeader>
            <h1 className="text-5xl font-bold tracking-wide leading-tight">
              Hello, I'm <span className="text-secondary">Brian Benegas</span>
            </h1>
          </CardHeader>
          <CardBody>
            <p className="text-lg">
              I'm a full-stack developer based in New York City. I specialize in
              building web applications using modern technologies.
            </p>
          </CardBody>
          <CardFooter>
            <Button radius="none" color="primary" variant="ghost" size="lg">
              Contact Me
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
