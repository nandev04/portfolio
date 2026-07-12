import React from "react";
import CardTech from "./CardTech";
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
import OptionsTopics from "./OptionsTopics";

const BackDevopsOptions = () => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center gap-8 mt-5">
            <OptionsTopics title="Linguagens">
              <CardTech Icon={FaNodeJs}>Node</CardTech>
              <CardTech strokeWidth={2} Icon={FaJava} iconClassName="-ml-0.5">
                Java
              </CardTech>
            </OptionsTopics>
            <OptionsTopics title="Frameworks & Bibliotecas">
              <CardTech strokeWidth={0.1} Icon={SiExpress}>
                Express
              </CardTech>
              <CardTech Icon={SiSpring}>Spring Framework</CardTech>
              <CardTech Icon={SiVitest}>Vitest</CardTech>
              <CardTech Icon={SiJest}>Jest</CardTech>
              <CardTech Icon={SiJunit5}>JUnit</CardTech>
            </OptionsTopics>
            <OptionsTopics title="Banco de dados">
              <CardTech Icon={BiLogoPostgresql}>PostGreSQL</CardTech>
              <CardTech strokeWidth={0.4} Icon={GrMysql}>
                MySQL
              </CardTech>
              <CardTech Icon={SiPrisma}>Prisma</CardTech>
              <CardTech Icon={DiRedis} iconClassName="-ml-0.5">
                Redis
              </CardTech>
            </OptionsTopics>
            <OptionsTopics title="DevOps & Cloud">
              <CardTech iconClassName="ml-0.5" strokeWidth={5} Icon={FaAws}>
                AWS
              </CardTech>
              <CardTech Icon={GrDocker}>Docker</CardTech>
              <CardTech Icon={SiGithubactions}>Github Actions</CardTech>
            </OptionsTopics>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackDevopsOptions;
