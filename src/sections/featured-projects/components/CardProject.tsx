import { FaLinkedin } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const CardProject = ({
  highlight = false,
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
      className={`${highlight && "col-span-2"} group relative flex flex-col w-full aspect-18/9 `}
    >
      <img
        src={imgSrc}
        className="w-full h-full object-cover rounded-3xl transition-transform duration-200 group-hover:scale-105 glow-cards object-top "
        alt={altImg}
      />
      <div className="absolute inset-0 flex justify-center items-center rounded-3xl opacity-0 group-hover:bg-black/40 group-hover:opacity-100 group-hover:backdrop-blur-xs transition-all duration-200 group-hover:scale-105">
        <div
          className={`flex gap-4 w-full ${highlight ? "max-w-1/6" : "max-w-1/4"} ${!postLink && "px-4"}`}
        >
          {postLink && (
            <a className="w-full" href={postLink}>
              <FaLinkedin className="w-full h-full" color="white" />
            </a>
          )}
          <button
            className="cursor-pointer w-full"
            onClick={() => console.log("teste")}
          >
            <FaInfoCircle className="w-full h-full" color="white" />
          </button>
          <a className="w-full h-full" href={repoLink}>
            <FaGithub className="w-full h-full" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
