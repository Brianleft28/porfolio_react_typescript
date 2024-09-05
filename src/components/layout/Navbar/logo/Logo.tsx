import "./Logo.css";

import { Link as RouterLink } from "react-router-dom";

const Logo = () => {
  return (
    <RouterLink to="/" className="font-bold  p-2 rounded-e-md">
      <div className="logo flex flex-row gap-x-0 hover:gap-x-0.5 duration-300 transition-all hover:scale-110 hover:-translate-y-0.5">
        <span className="text-secondary-400">&lt;</span>
        <span className="text-foreground">Brian</span>
        <span className="text-secondary-400">/&gt;</span>
      </div>
    </RouterLink>
  );
};

export default Logo;
