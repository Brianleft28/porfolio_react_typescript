import { CardHeader } from "@nextui-org/react"
import Subtitle from "./Subtitle"
import { Lang } from "../../../context/Lang"
import texts from "./Text"

interface HeroHeaderProps {
    lang: Lang
}

const HeroHeader: React.FC<HeroHeaderProps> = ({lang}) => {
  return (
    <CardHeader>
    <div className="flex flex-col">
      <h1 className="text-center lg:text-start text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
       {texts[lang].greeting}<span className="text-primary">{texts[lang].name}</span>
      </h1>
      <Subtitle lang={lang}/>
    </div>
  </CardHeader>
  )
}
export default HeroHeader