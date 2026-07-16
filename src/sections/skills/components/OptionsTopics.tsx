import { type ReactNode } from "react";

const OptionsTopics = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-[clamp(1.2rem,1.92vw+0.42rem,1.5rem)] text-center mb-4 font-quaternary font-extrabold text-dark-grey-700">
          {title}
        </h3>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
          {children}
        </div>
      </div>
    </>
  );
};

export default OptionsTopics;
