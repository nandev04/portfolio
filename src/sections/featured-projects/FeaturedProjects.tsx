import Section from "../../components/ui/Section";
import Subtitle from "../../components/ui/Subtitle";
import CardProject from "./components/CardProject";
import easylistImg from "./assets/easylist-img.png";
import shape from "../../../public/shapes/featured-project-shape.svg";

const FeaturedProjects = () => {
  return (
    <div className="relative min-h-300">
      <img className="absolute top-0 w-full h-full opacity-2" src={shape} />
      <Section>
        <Subtitle>Featured Projects</Subtitle>

        <div className="ml-28 grid grid-cols-2 gap-6 max-w-280">
          <CardProject
            postLink="#"
            repoLink="#"
            imgSrc={easylistImg}
            highlight
          />
          <CardProject repoLink="#" imgSrc={easylistImg} />
          <CardProject repoLink="#" imgSrc={easylistImg} />
        </div>
      </Section>
    </div>
  );
};

export default FeaturedProjects;
