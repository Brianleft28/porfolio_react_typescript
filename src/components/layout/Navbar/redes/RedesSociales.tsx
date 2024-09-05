import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

interface RedesSocialesProps {
  style: string;
}

const RedesSociales: React.FC<RedesSocialesProps> = ({ style }) => {
  return (
    <>
      <div className="flex gap-0.5 text-foreground">
        <a
          href="https://www.linkedin.com/in/brian-benegas-44770729b/"
          target="_blank"
          rel="noreferrer"
          /* Estilo que viene del parametro */
          className={`${style} hover:text-background hover:-translate-y-0.5 transition-all dutaion-300`}
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <div className="flex gap-0.5 text-foreground">
        <a
          href="https://github.com/Brianleft28"
          target="_blank"
          rel="noreferrer"
          /* Estilo que viene del parametro */
          className={`${style} hover:text-background hover:-translate-y-0.5 transition-all dutaion-300`}
        >
          <FaGithubSquare size={24} />
        </a>
      </div>
    </>
  );
};

export default RedesSociales;
