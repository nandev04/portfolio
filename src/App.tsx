import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import FeaturedProjects from "./sections/featured-projects/FeaturedProjects";
import Hero from "./sections/hero/Hero";
import Skills from "./sections/skills/Skills";
import { emailInit } from "./config/emailjs.config";
import { Toaster } from "react-hot-toast";
const App = () => {
  emailInit();

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          className: "font-secondary text-[.925rem]",
        }}
      />
      <div className="sticky top-0 z-0">
        <Hero />
      </div>

      <div className="relative z-10 bg-light-grey-default shadow-[0_-32px_24px_rgba(0,0,0,.6)] overflow-hidden">
        <About />
        <Skills />
        <div className="relative box-border">
          <img
            className="pointer-events-none absolute top-0 w-full h-full opacity-5"
            src={"/shapes/featured-project-shape.svg"}
          />
          <FeaturedProjects />
        </div>
        <Contact />
      </div>
    </>
  );
};

export default App;
