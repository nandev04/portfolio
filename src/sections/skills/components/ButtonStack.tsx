import { type ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

const ButtonStack = ({
  children,
  setState,
  isActive = false,
}: {
  children: ReactNode;
  setState: () => void;
  isActive?: boolean;
}) => {
  return (
    <>
      <button
        className="rounded-2xl py-1.5 px-8 border-2 border-dark-grey-800 font-['Roboto',sans-serif] font-extrabold text-[16px] cursor-pointer text-dark-grey-800 hover:bg-[rgba(0,0,0,0.1)] flex items-center gap-2"
        onClick={setState}
      >
        {children}
        {isActive && (
          <FaCheck className="size-3 opacity-100 text-dark-grey-700" />
        )}
      </button>
    </>
  );
};

export default ButtonStack;
