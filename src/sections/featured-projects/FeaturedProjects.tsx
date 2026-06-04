import Section from "../../components/ui/Section";
import Subtitle from "../../components/ui/Subtitle";
import CardProject from "./components/CardProject";

const FeaturedProjects = () => {
  return (
    <Section>
      <Subtitle>Featured Projects</Subtitle>

      <div className="ml-26 grid grid-cols-2 gap-6 max-w-180 h-auto">
        <CardProject highlight />
        <CardProject />
        <CardProject />
      </div>
    </Section>
  );
};

export default FeaturedProjects;
