import React from "react";

const CardProject = ({ highlight = false }: { highlight?: boolean }) => {
  return (
    <div
      className={`${highlight && "col-span-2"} bg-black w-full  h-64 rounded-2xl`}
    ></div>
  );
};

export default CardProject;
