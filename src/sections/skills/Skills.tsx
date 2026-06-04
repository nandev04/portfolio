import { useState } from "react";
import { FaTerminal } from "react-icons/fa";
import ButtonStack from "./components/ButtonStack";
import FrontendOptions from "./components/FrontendOptions";
import ToolsOptions from "./components/ToolsOptions";
import BackDevopsOptions from "./components/BackDevopsOptions";

export type optionsStack = "backend" | "frontend" | "tools";

const Skills = () => {
  const [options, setOptions] = useState<optionsStack>("frontend");
  console.log(options);

  return (
    <section className=" min-h-96 py-24 px-16 max-w-490 mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <FaTerminal className="w-15 h-15 text-dark-grey-800" />
        <h2 className="font-tertiary text-dark-grey-800 font-extrabold text-6xl uppercase">
          Skills
        </h2>
      </div>
      <div className="flex gap-6  justify-center">
        <ButtonStack setState={() => setOptions("frontend")}>
          Front-End
        </ButtonStack>
        <ButtonStack setState={() => setOptions("backend")}>
          Back-End & Devops
        </ButtonStack>
        <ButtonStack setState={() => setOptions("tools")}>
          Ferramentas
        </ButtonStack>
      </div>
      <div className="mt-16 max-w-400 mx-auto min-h-75">
        {options === "backend" && <BackDevopsOptions />}
        {options === "frontend" && <FrontendOptions />}
        {options === "tools" && <ToolsOptions />}
      </div>
    </section>
  );
};

export default Skills;
