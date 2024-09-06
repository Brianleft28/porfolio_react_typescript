import { CardBody } from "@nextui-org/react"
import texts from "./Text"
import { Lang } from "../../../context/Lang"

interface HeroBodyProps {
    lang: Lang
}

const HeroBody: React.FC<HeroBodyProps> = ({lang}) => {
  return (
    <CardBody className="md:mt-3 mt-2 px-4">
        <p className="md:text-lg text-md font-secondary text-center md:text-start">
         {texts[lang].description}
        </p>
  </CardBody>
  )
}
export default HeroBody