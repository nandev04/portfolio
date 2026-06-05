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
      <div className="relative z-10 bg-light-grey-default">
        <About />
        <Skills />
      </div>
      <div className="relative z-20 bg-linear-to-b from-light-grey-default from-50% via-[#d7d7d7] via-80% to-dark-grey-900 to-110%">
        <FeaturedProjects />
      </div>
      <div className="relative z-20 bg-amber-300">
        <Contact />
      </div>
    </>
  );
};

export default App;
