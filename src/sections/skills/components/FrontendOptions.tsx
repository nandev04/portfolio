import CardTech from "./CardTech";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import ZustandIcon from "./ZustandIcon";
import { SiTailwindcss } from "react-icons/si";
import OptionsTopics from "./OptionsTopics";

const FrontendOptions = () => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center gap-8 mt-5">
            <OptionsTopics title="Linguagens">
              <CardTech Icon={RiJavascriptFill}>JavaScript</CardTech>
              <CardTech Icon={BiLogoTypescript}>Typescript</CardTech>
            </OptionsTopics>
            <OptionsTopics title="Frameworks & Bibliotecas">
              <CardTech Icon={FaReact}>React</CardTech>
              <CardTech Icon={SiReactrouter}>React Router</CardTech>
              <CardTech Icon={SiReactquery}>TanStack Query</CardTech>
              <CardTech Icon={SiReacthookform}>React Hook Form</CardTech>
              <CardTech Icon={ZustandIcon}>Zustand</CardTech>
              <CardTech Icon={SiTailwindcss}>Tailwind CSS</CardTech>
            </OptionsTopics>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontendOptions;
