import { useLayoutEffect, useRef, useState } from "react";
import ButtonStack from "./components/ButtonStack";
import FrontendOptions from "./components/FrontendOptions";
import ToolsOptions from "./components/ToolsOptions";
import BackDevopsOptions from "./components/BackDevopsOptions";
import Subtitle from "../../components/Subtitle";
import { gsap } from "../../config/gsap.config";

export type optionsStack = "backend" | "frontend" | "tools";

const Skills = () => {
  const [options, setOptions] = useState<optionsStack>("frontend");

  const wrapperButtonsRef = useRef<HTMLDivElement | null>(null);
  const wrapperStackRef = useRef<HTMLDivElement | null>(null);
  const wrapperSubtitleRef = useRef(null);

  useLayoutEffect(() => {
    const ctxButtons = gsap.context(() => {
      gsap.fromTo(
        "button",
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            toggleActions: "play none none reverse",
            start: "top 90%",
            trigger: wrapperButtonsRef.current,
          },
        },
      );
    }, wrapperButtonsRef);

    return () => ctxButtons.revert();
  }, []);

  useLayoutEffect(() => {
    const ctxStack = gsap.context(() => {
      gsap.fromTo(
        wrapperStackRef.current,
        { yPercent: -5, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            toggleActions: "play none none reverse",
            start: "top 80%",
            trigger: wrapperStackRef.current,
          },
        },
      );
    }, wrapperStackRef);

    return () => ctxStack.revert();
  }, [options]);

  useLayoutEffect(() => {
    const ctxSubtitle = gsap.context(() => {
      gsap.fromTo(
        wrapperSubtitleRef.current,
        { xPercent: -100 },
        {
          xPercent: 0,
          scrollTrigger: {
            start: "top bottom",
            end: "top 80%",
            scrub: 1.4,
            trigger: wrapperSubtitleRef.current,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => ctxSubtitle.revert();
  }, []);

  return (
    <>
      <section className="min-h-96 py-24 px-8 md:px-16 max-w-490 mx-auto">
        <Subtitle ref={wrapperSubtitleRef}>Skills</Subtitle>
        <div ref={wrapperButtonsRef} className="flex gap-6 justify-center">
          <ButtonStack setState={() => setOptions("frontend")}>
            Front-End
          </ButtonStack>
          <ButtonStack setState={() => setOptions("backend")}>
            Back-End & Devops
          </ButtonStack>
          <ButtonStack setState={() => setOptions("tools")}>
            Ferramentas
          </ButtonStack>
        </div>
        <div className="mt-16 max-w-400 mx-auto min-h-[60dvh] mb-20 box-border">
          <div ref={wrapperStackRef}>
            {options === "frontend" && <FrontendOptions />}
            {options === "backend" && <BackDevopsOptions />}
            {options === "tools" && <ToolsOptions />}
          </div>
        </div>
        <div className="absolute right-0">
          <div className="relative">
            <span className="absolute w-36 h-36 bg-dark-grey-900 rounded-full right-[-8%] top-[-60%]"></span>
            <span className="text-decoration">/TECHNOLOGY</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
