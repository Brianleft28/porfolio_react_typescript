import { Typewriter } from "react-simple-typewriter";
const Subtitle = () => {
  return (
    <div className="text-center md:text-start text-sm md:text-xl font-secondary selection:bg-none hover:cursor-default tracking-widest  text-secondary mt-2">
      <Typewriter
        words={[
          "Javascript Developer",
          "Backend Developer",
          "Frontend Developer",
          "Database Administrator",
        ]}
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
