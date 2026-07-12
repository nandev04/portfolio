import CardTech from "./CardTech";
import { FaGitAlt } from "react-icons/fa6";
import { SiJira } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { SiInsomnia } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import OptionsTopics from "./OptionsTopics";

const ToolsOptions = () => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center gap-8 mt-5">
            <OptionsTopics title="Tecnologias">
              <CardTech Icon={FaGitAlt}>Git</CardTech>
              <CardTech Icon={SiJira}>Jira</CardTech>
              <CardTech Icon={CgFigma}>Figma</CardTech>
              <CardTech Icon={SiInsomnia}>Insomnia</CardTech>
              <CardTech Icon={SiPostman}>Postman</CardTech>
            </OptionsTopics>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsOptions;
