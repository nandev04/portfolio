import CardTech from "./ui/CardTech";
import FrontendSvg from "../assets/frontend.svg";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import ZustandIcon from "./ui/ZustandIcon";

const FrontendOptions = () => {
  return (
    <>
      <div className="grid gap-5 grid-cols-2 justify-between">
        <div className="flex ml-14 flex-col justify-center">
          <h3 className="text-5xl mb-4 font-default font-extrabold text-dark-grey-700">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-4 max-w-full ml-8 mt-5">
            <CardTech Icon={RiJavascriptFill}>JavaScript</CardTech>
            <CardTech Icon={BiLogoTypescript}>Typescript</CardTech>
            <CardTech Icon={FaReact}>React</CardTech>
            <CardTech Icon={SiReactrouter}>React Router</CardTech>
            <CardTech Icon={SiReactquery}>TanStack Query</CardTech>
            <CardTech Icon={SiReacthookform}>React Hook Form</CardTech>
            <CardTech Icon={ZustandIcon}>Zustand</CardTech>
          </div>
        </div>
        <div className="flex w-full justify-center pl-20">
          <img
            className="w-full h-auto max-w-120 drop-shadow-md"
            src={FrontendSvg}
            alt="Imagem representativa de frontend"
          />
        </div>
      </div>
    </>
  );
};

export default FrontendOptions;
