import { type ReactNode } from "react";

const ButtonStack = ({
  children,
  setState,
}: {
  children: ReactNode;
  setState: () => void;
}) => {
  return (
    <button
      className="rounded-2xl py-1.5 px-8 border-2 border-dark-grey-800 font-['Roboto',sans-serif] font-extrabold text-[16px] cursor-pointer text-dark-grey-800 hover:bg-[rgba(0,0,0,0.1)]"
      onClick={setState}
    >
      {children}
    </button>
  );
};

export default ButtonStack;
