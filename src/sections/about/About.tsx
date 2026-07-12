import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../config/gsap.config";

const About = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { yPercent: -5, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            toggleActions: "play none none reverse",
            start: "top 87%",
            trigger: wrapperRef.current,
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-12 ">
      <div className="bg-dark-grey-800 bg-about-shape bg-cover bg-center bg-no-repeat rounded-l-4xl md:ml-50 min-h-80 p-8 ml-15">
        <h2 className=" text-white -ml-18 text-[clamp(3rem,6vw,4.5rem)] font-secondary font-semibold mix-blend-difference mb-4 md:-ml-32">
          Prazer, sou o Renan
        </h2>
        <p
          ref={wrapperRef}
          className="font-secondary text-white font-normal mb-14"
        >
          Desde cedo me interesso por tecnologia — essa curiosidade foi
          crescendo e me levou para o desenvolvimento, onde fui descobrindo que
          gosto tanto de construir interfaces quanto de pensar na estrutura por
          trás delas. Tenho interesse por diversas áreas: front-end, back-end,
          arquitetura de sistemas, DevOps e dados. Gosto de entender como as
          peças se conectam — desde a experiência do usuário até a
          infraestrutura que sustenta tudo isso. Estou cursando Engenharia de
          Software e acredito que o melhor jeito de aprender é construindo. Por
          isso esse portfólio existe.
        </p>
      </div>
    </section>
  );
};

export default About;
