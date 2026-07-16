import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import DialogInfo from "./DialogInfo";

const CardProject = ({
  imgSrc,
  altImg = "Imagem representativa de projeto",
  title,
  completedAt,
  description,
  stack,
  linkApp,
  postLink,
  repoLink,
}: {
  imgSrc: string;
  altImg?: string;
  title: string;
  completedAt: string;
  description: string;
  stack: string[];
  linkApp?: string;
  highlight?: boolean;
  postLink?: string;
  repoLink: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`group relative flex flex-col w-full aspect-video md:aspect-18/9  transition-transform duration-300 md:hover:scale-105 md:hover:z-10`}
      >
        <img
          src={imgSrc}
          className="w-full h-full object-cover rounded-2xl md:rounded-3xl object-top shadow-lg"
          alt={altImg}
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 flex flex-col gap-4 sm:gap-5 px-2.5 sm:px-2 py-3.5 sm:py-5 rounded-2xl sm:rounded-3xl bg-dark-grey-700 shadow-lg shadow-black/30 md:hidden">
          {postLink && (
            <a
              className="w-6 h-6 sm:w-5 sm:h-5 cursor-pointer"
              href={postLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-full h-full" color="#FAFAFA" />
            </a>
          )}
          <button
            className="cursor-pointer w-6 h-6 sm:w-5 sm:h-5"
            onClick={() => setIsOpen(true)}
          >
            <FaInfoCircle className="w-full h-full" color="#FAFAFA" />
          </button>
          <a
            className="w-6 h-6 sm:w-5 sm:h-5 cursor-pointer"
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-full h-full" color="#FAFAFA" />
          </a>
        </div>
        <div className="absolute inset-0 hidden md:flex justify-center items-center rounded-xl md:rounded-3xl opacity-0  group-hover:bg-black/40 group-hover:opacity-100 group-hover:backdrop-blur-xs transition-all duration-200">
          <div
            className={`flex gap-5 w-full justify-center ${!postLink && "px-4"}`}
          >
            {postLink && (
              <a
                className="w-12 h-12 cursor-pointer"
                href={postLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-full h-full" color="white" />
              </a>
            )}
            <button
              className="cursor-pointer w-12 h-12"
              onClick={() => setIsOpen(true)}
            >
              <FaInfoCircle className="w-full h-full" color="white" />
            </button>
            <a
              className="w-12 h-12 cursor-pointer"
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-full h-full" color="white" />
            </a>
          </div>
        </div>
      </div>
      <DialogInfo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        completedAt={completedAt}
        linkApp={linkApp}
        description={description}
        mainStack={stack}
      />
    </>
  );
};

export default CardProject;
