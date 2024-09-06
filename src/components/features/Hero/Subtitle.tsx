import { Typewriter } from "react-simple-typewriter";
import { Lang } from "../../../context/Lang";
import texts from "./Text";
interface SubtitleProps {
  lang: Lang;
}

const Subtitle: React.FC<SubtitleProps> = ({lang}) => {
  return (
    <div className="text-center md:text-start text-sm md:text-xl font-secondary selection:bg-none hover:cursor-default tracking-widest  text-secondary mt-2">
      <Typewriter
        words={texts[lang].subtitle.words}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={Math.floor(Math.random() * 100) + 50}
        deleteSpeed={Math.floor(Math.random() * 100) + 50}
        delaySpeed={Math.floor(Math.random() * 1000) + 1000}
      />
    </div>
  );
};

export default Subtitle;
