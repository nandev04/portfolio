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
    <Section>
      <Subtitle>Skills</Subtitle>
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
    </Section>
  );
};

export default Skills;
