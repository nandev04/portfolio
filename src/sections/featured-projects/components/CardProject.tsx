import { FaLinkedin } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const CardProject = ({
  imgSrc,
  altImg = "Imagem representativa de projeto",
  postLink,
  repoLink,
}: {
  highlight?: boolean;
  imgSrc: string;
  altImg?: string;
  postLink?: string;
  repoLink: string;
}) => {
  return (
    <div
      className={`group relative flex flex-col w-full aspect-18/9 transition-transform duration-300 hover:scale-105 hover:z-10`}
    >
      <img
        src={imgSrc}
        className="w-full h-full object-cover rounded-3xl object-top"
        alt={altImg}
      />
      <div className="absolute inset-0 flex justify-center items-center rounded-3xl opacity-0  group-hover:bg-black/40 group-hover:opacity-100 group-hover:backdrop-blur-xs transition-all duration-200">
        <div
          className={`flex gap-8 w-full justify-center ${!postLink && "px-4"}`}
        >
          {postLink && (
            <a className="w-12 h-12" href={postLink}>
              <FaLinkedin className="w-full h-full" color="white" />
            </a>
          )}
          <button
            className="cursor-pointer w-12 h-12"
            onClick={() => console.log("teste")}
          >
            <FaInfoCircle className="w-full h-full" color="white" />
          </button>
          <a className="w-12 h-12" href={repoLink}>
            <FaGithub className="w-full h-full" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
