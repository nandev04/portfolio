import React, { useState } from "react";
import { FaTerminal } from "react-icons/fa";
import ButtonStack from "./components/ButtonStack";
import BackDevopsOptions from "./components/BackDevopsOptions";

const Skills = () => {
  const [state, setState] = useState(null);

  return (
    <section className=" min-h-96 py-24 px-16">
      <div className="flex items-center gap-4 mb-16">
        <FaTerminal className="w-15 h-15 text-dark-grey-800" />
        <h2 className="font-tertiary text-dark-grey-800 font-extrabold text-6xl uppercase">
          Skills
        </h2>
      </div>
      <div className="flex gap-6  justify-center">
        <ButtonStack setState={setState}>Front-End</ButtonStack>
        <ButtonStack setState={setState}>Back-End & Devops</ButtonStack>
        <ButtonStack setState={setState}>Ferramentas</ButtonStack>
      </div>
      <div className="mt-20">{!state && <BackDevopsOptions />}</div>
    </section>
  );
};

export default Skills;
