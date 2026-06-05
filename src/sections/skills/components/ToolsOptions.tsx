import CardTech from "./ui/CardTech";
import { FaGitAlt } from "react-icons/fa6";
import { SiJira } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { SiInsomnia } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import ToolSvg from "../assets/tool.svg";

const ToolsOptions = () => {
  return (
    <>
      <div className="grid gap-5 grid-cols-2 justify-between">
        <div className="flex ml-14 flex-col justify-center">
          <h3 className="text-5xl mb-4 font-default font-extrabold text-dark-grey-700">
            Tools
          </h3>
          <div className="flex flex-wrap gap-4 max-w-full ml-8 mt-5">
            <CardTech Icon={FaGitAlt}>Git</CardTech>
            <CardTech Icon={SiJira}>Jira</CardTech>

            <CardTech Icon={CgFigma}>Figma</CardTech>
            <CardTech Icon={SiInsomnia}>Insomnia</CardTech>
            <CardTech Icon={SiPostman}>Postman</CardTech>
          </div>
        </div>
        <div className="flex w-full justify-center self-center">
          <img
            className="w-full h-auto drop-shadow-md max-w-80"
            src={ToolSvg}
            alt="Imagem representativa de frontend"
          />
        </div>
      </div>
    </>
  );
};

export default ToolsOptions;
