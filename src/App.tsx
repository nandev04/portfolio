import About from "./sections/about/About";
import FeaturedProjects from "./sections/featured-projects/FeaturedProjects";
import Hero from "./sections/hero/Hero";
import Skills from "./sections/skills/Skills";

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
    </>
  );
};

export default App;
