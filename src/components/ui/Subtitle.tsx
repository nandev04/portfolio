import { type ReactNode } from "react";
import { FaTerminal } from "react-icons/fa";

const Subtitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center gap-4 mb-16">
      <FaTerminal className="w-15 h-15 text-dark-grey-800" />
      <h2 className="font-tertiary text-dark-grey-800 font-extrabold text-6xl uppercase">
        {children}
      </h2>
    </div>
  );
};

export default Subtitle;
