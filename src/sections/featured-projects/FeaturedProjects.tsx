import Subtitle from "../../components/ui/Subtitle";
import CardProject from "./components/CardProject";
import easylistImg from "./assets/easylist-img.png";

const FeaturedProjects = () => {
  return (
    <section className="mt-40">
      <div className="min-h-96 max-w-490 mx-auto">
        <div className="mx-16 mb-24">
          <Subtitle>Featured Projects</Subtitle>

          <div className="ml-28  grid grid-cols-2 gap-6 max-w-280">
            <CardProject
              postLink="#"
              repoLink="#"
              imgSrc={easylistImg}
              highlight
            />
            <CardProject repoLink="#" imgSrc={easylistImg} />
            <CardProject repoLink="#" imgSrc={easylistImg} />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-dark-grey-900 rounded-l-2xl py-1 px-6 mb-60">
          <span className="-ml-30 font-quinary mix-blend-difference text-white uppercase italic">
            Mais projetos na seção pinned no GitHub
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
