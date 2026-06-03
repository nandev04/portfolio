import React from "react";
import CardTech from "./ui/CardTech";
import { FaNodeJs } from "react-icons/fa";

const BackDevopsOptions = () => {
  return (
    <>
      <div className="grid grid-cols-2 justify-between">
        <div className="ml-14">
          <h3 className="text-4xl font-default font-extrabold text-dark-grey-700">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-4 max-w-full ml-8 mt-5">
            <CardTech Icon={FaNodeJs}>Java</CardTech>
            <CardTech Icon={FaNodeJs}>Spring Framework</CardTech>
            <CardTech Icon={FaNodeJs}>Node</CardTech>
            <CardTech Icon={FaNodeJs}>Express</CardTech>
            <CardTech Icon={FaNodeJs}>Prisma</CardTech>
            <CardTech Icon={FaNodeJs}>MySQL</CardTech>
            <CardTech Icon={FaNodeJs}>PostGreSQL</CardTech>
            <CardTech Icon={FaNodeJs}>Redis</CardTech>
            <CardTech Icon={FaNodeJs}>Vitest</CardTech>
            <CardTech Icon={FaNodeJs}>Jest</CardTech>
            <CardTech Icon={FaNodeJs}>JUnit</CardTech>
          </div>
        </div>
        <div>{/* SVG */}</div>
      </div>
    </>
  );
};

export default BackDevopsOptions;
