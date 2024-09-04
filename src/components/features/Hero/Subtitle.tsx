import { Typewriter } from "react-simple-typewriter"
const Subtitle = () => {
  return (
    <div className="font-secondary text-xl text-secondary mt-2">
        <Typewriter
            words={['Web Developer', 'Backend Developer', 'Frontend Developer', 'Full-Stack Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
    </div>    
  )
}

export default Subtitle