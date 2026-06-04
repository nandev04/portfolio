import React from "react";
import CardTech from "./ui/CardTech";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { SiVitest } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiJunit5 } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { SiGithubactions } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import BackendSvg from "../assets/backend.svg";

const BackDevopsOptions = () => {
  return (
    <>
      <div className="grid gap-5 grid-cols-2 justify-between">
        <div className="flex ml-14 flex-col justify-center">
          <h3 className="text-5xl mb-4 font-default font-extrabold text-dark-grey-700">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-4 max-w-full ml-8 mt-5">
            <CardTech strokeWidth={2} Icon={FaJava} iconClassName="-ml-0.5">
              Java
            </CardTech>
            <CardTech Icon={SiSpring}>Spring Framework</CardTech>
            <CardTech Icon={FaNodeJs}>Node</CardTech>
            <CardTech strokeWidth={0.1} Icon={SiExpress}>
              Express
            </CardTech>
            <CardTech Icon={SiPrisma}>Prisma</CardTech>
            <CardTech strokeWidth={0.4} Icon={GrMysql}>
              MySQL
            </CardTech>
            <CardTech Icon={BiLogoPostgresql}>PostGreSQL</CardTech>
            <CardTech Icon={DiRedis} iconClassName="-ml-0.5">
              Redis
            </CardTech>
            <CardTech Icon={SiVitest}>Vitest</CardTech>
            <CardTech Icon={SiJest}>Jest</CardTech>
            <CardTech Icon={SiJunit5}>JUnit</CardTech>
            <CardTech Icon={GrDocker}>Docker</CardTech>
            <CardTech Icon={SiGithubactions}>Github Actions</CardTech>
            <CardTech iconClassName="ml-0.5" strokeWidth={5} Icon={FaAws}>
              AWS
            </CardTech>
          </div>
        </div>
        <div className="flex w-full justify-center pl-20">
          <img
            className="w-full h-auto max-w-100 drop-shadow-md"
            src={BackendSvg}
            alt="Imagem representativa de backend"
          />
        </div>
      </div>
    </>
  );
};

export default BackDevopsOptions;
