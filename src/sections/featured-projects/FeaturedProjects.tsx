import Section from "../../components/ui/Section";
import Subtitle from "../../components/ui/Subtitle";
import CardProject from "./components/CardProject";
import easylistImg from "./assets/easylist-img.png";

const FeaturedProjects = () => {
  return (
    <div className="relative min-h-dvh box-border">
      <img
        className="pointer-events-none absolute top-0 w-full h-full opacity-5"
        src={"/shapes/featured-project-shape.svg"}
      />
      <Section>
        <Subtitle>Featured Projects</Subtitle>

        <div className="ml-28 mb-20 grid grid-cols-2 gap-6 max-w-280">
          <CardProject
            postLink="#"
            repoLink="#"
            imgSrc={easylistImg}
            highlight
          />
          <CardProject repoLink="#" imgSrc={easylistImg} />
          <CardProject repoLink="#" imgSrc={easylistImg} />
        </div>
        <div className="absolute right-0 pr-4 bg-dark-grey-900 rounded-l-2xl py-1">
          <span className="ml-[-26%] font-quinary mix-blend-difference text-white uppercase">
            Mais projetos na seção pinned no GitHub
          </span>
        </div>
      </Section>
    </div>
  );
};

export default FeaturedProjects;
