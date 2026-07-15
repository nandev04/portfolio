import { type ReactNode, type RefObject } from "react";
import { FaTerminal } from "react-icons/fa";

const Subtitle = ({
  children,
  ref,
}: {
  children: ReactNode;
  ref?: RefObject<null>;
}) => {
  return (
    <div ref={ref}>
      <h2 className="flex items-center gap-4 mb-16 font-tertiary text-dark-grey-800 font-extrabold text-[clamp(2.75rem,2.92vw+1.42rem,3.75rem)] uppercase">
        <FaTerminal className="w-[1em] h-[1em] text-dark-grey-800" />
        {children}
      </h2>
    </div>
  );
};

export default Subtitle;
