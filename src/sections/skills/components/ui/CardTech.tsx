import { type ReactNode } from "react";
import type { IconType } from "react-icons";

const CardTech = ({
  children,
  Icon,
}: {
  children: ReactNode;
  Icon: IconType;
}) => {
  return (
    <div className=" min-w-26 flex border gap-1 justify-center items-center rounded-2xl bg-[rgba(0,0,0,0.1)] px-5 py-1">
      <span className="text-dark-grey-800 font-default font-semibold text-[1rem]">
        {children}
      </span>
      <Icon className="text-dark-grey-800 w-5 h-auto" />
    </div>
  );
};

export default CardTech;
