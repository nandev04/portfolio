import { useState } from "react";
import ButtonStack from "./components/ButtonStack";
import FrontendOptions from "./components/FrontendOptions";
import ToolsOptions from "./components/ToolsOptions";
import BackDevopsOptions from "./components/BackDevopsOptions";
import Subtitle from "../../components/ui/Subtitle";
import Section from "../../components/ui/Section";

export type optionsStack = "backend" | "frontend" | "tools";

const Skills = () => {
  const [options, setOptions] = useState<optionsStack>("frontend");

  return (
    <>
      <Section>
        <Subtitle>Skills</Subtitle>
        <div className="flex gap-6 justify-center">
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
        <div className="mt-16 max-w-400 mx-auto min-h-75 mb-46">
          {options === "backend" && <BackDevopsOptions />}
          {options === "frontend" && <FrontendOptions />}
          {options === "tools" && <ToolsOptions />}
        </div>
        <div className="absolute right-0">
          <div className="relative">
            <span className="absolute w-36 h-36 bg-dark-grey-900 rounded-full right-[-8%] top-[-60%]"></span>
            <span className="font-senary text-white mix-blend-difference text-9xl">
              /TECHNOLOGY
            </span>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Skills;
