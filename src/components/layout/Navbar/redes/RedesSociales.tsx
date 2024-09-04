import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

interface RedesSocialesProps {
  style: string;
}

const RedesSociales: React.FC<RedesSocialesProps> = ({ style }) => {
  return (
    <>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/brian-benegas-44770729b/"
          target="_blank"
          rel="noreferrer"
          /* Estilo que viene del parametro */
          className={`${style}`}
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <a
        href="https://github.com/Brianleft28"
        target="_blank"
        rel="noreferrer"
        /* Estilo que viene del parametro */
        className={`${style}`}
      >
        <FaGithubSquare size={24} />
      </a>
    </>
  );
};

export default RedesSociales;
