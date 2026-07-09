import { useState } from "react";
import ButtonStack from "./components/ButtonStack";
import FrontendOptions from "./components/FrontendOptions";
import ToolsOptions from "./components/ToolsOptions";
import BackDevopsOptions from "./components/BackDevopsOptions";
import Subtitle from "../../components/ui/Subtitle";

export type optionsStack = "backend" | "frontend" | "tools";

const Skills = () => {
  const [options, setOptions] = useState<optionsStack>("frontend");

  return (
    <>
      <section className="min-h-96 py-24 px-16 max-w-490 mx-auto">
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
        <div className="mt-16 max-w-400 mx-auto min-h-[60dvh] mb-20 box-border">
          {options === "backend" && <BackDevopsOptions />}
          {options === "frontend" && <FrontendOptions />}
          {options === "tools" && <ToolsOptions />}
        </div>
        <div className="absolute right-0">
          <div className="relative">
            <span className="absolute w-36 h-36 bg-dark-grey-900 rounded-full right-[-8%] top-[-60%]"></span>
            <span className="text-decoration">/TECHNOLOGY</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
