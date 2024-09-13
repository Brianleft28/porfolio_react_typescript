import {
  Modal as Modal_,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
  Link,
  Divider,
} from "@nextui-org/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Project } from "../../types";
import { Lang } from "../../context/Lang";
import { ThemeContext } from "../../context/Theme";
import { useContext } from "react";

interface ModalProps {
  lang: Lang;
  project: Project;
}

const Modal: React.FC<ModalProps> = ({ lang, project }) => {
  const { theme } = useContext(ThemeContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        color="secondary"
        variant="faded"
        fullWidth={true}
        className="mt-2"
        onPress={onOpen}
      >
        {lang === "es" ? "Ver más" : "View more"}
      </Button>
      <Modal_
        isOpen={isOpen}
        radius="none"
        classNames={{
          body: "py-4",
          base: `bg-gradient-to-b ${theme} from-content1 to-content3 text-foreground`,
          backdrop: "bg-secondary-800/50 backdrop-opacity-80",
        }}
        backdrop="blur"
        shadow="md"
        size="2xl"
        scrollBehavior="outside"
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-3xl flex-col gap-1">
                {project[lang].title}
              </ModalHeader>
              <Divider className="w-[80%] mx-auto bg-divider" />
              <ModalBody className="flex justify-center">
                {/* Carrusel */}
                <Carousel
                  showThumbs={false}
                  infiniteLoop
                  useKeyboardArrows
                  autoPlay
                  showStatus={true}
                >
                  {project[lang].img.map((img, i) => (
                    <div key={i}>
                      <img
                        src={img}
                        alt={`project-image-${i}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
                <div className="flex gap-x-1">
                  {project[lang].badge.map((badge, i) => (
                    <div key={i}>
                      <Chip
                        className="mr-1 mb-2 shadow-sm"
                        variant="dot"
                        color="secondary"
                        size="sm"
                      >
                        {badge}
                      </Chip>
                    </div>
                  ))}
                </div>
                <p>{project[lang].description}</p>
              </ModalBody>
              <ModalFooter className="">
                <Button
                  color="danger"
                  variant="solid"
                  radius="none"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  as={Link}
                  target="_blank"
                  fullWidth
                  radius="none"
                  color="primary"
                  href={project[lang].github}
                  onPress={onClose}
                >
                  {lang === "es" ? "Ver en Github" : "View on Github"}
                </Button>
                <Button
                  as={Link}
                  target="_blank"
                  fullWidth
                  variant="bordered"
                  radius="none"
                  color="primary"
                  href={project[lang].href}
                  onPress={onClose}
                >
                  {lang === "es" ? "Ver online" : "View live code"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal_>
    </>
  );
};

export default Modal;
