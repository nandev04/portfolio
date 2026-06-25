import { type ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section
      className={`min-h-96 py-24 px-16 max-w-490 mx-auto relative overflow-hidden`}
    >
      {children}
    </section>
  );
};

export default Section;
