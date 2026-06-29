import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import FeaturedProjects from "./sections/featured-projects/FeaturedProjects";
import Hero from "./sections/hero/Hero";
import Skills from "./sections/skills/Skills";

const App = () => {
  return (
    <>
      <div className="sticky top-0 z-0">
        <Hero />
      </div>
      <div className="relative z-10 bg-light-grey-default shadow-[0_-32px_24px_rgba(0,0,0,.6)] overflow-hidden">
        <About />
        <Skills />
        <FeaturedProjects />
      </div>
      <div className="relative z-20">
        <Contact />
      </div>
    </>
  );
};

export default App;
