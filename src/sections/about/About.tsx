import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../config/gsap.config";

const About = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { yPercent: -10, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
          scrollTrigger: {
            toggleActions: "play none none reverse",
            start: "-10% 80%",
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
        <h2 className=" text-white -ml-20 text-[clamp(3rem,6vw,4.5rem)] font-secondary font-semibold mix-blend-difference mb-4 md:-ml-32">
          Prazer, sou o Renan
        </h2>
        <p
          ref={wrapperRef}
          className="font-secondary text-white font-normal mb-14 max-w-600"
        >
          Desde cedo me interesso por tecnologia, essa curiosidade foi crescendo
          e me levou para o desenvolvimento, onde fui descobrindo que gosto
          tanto de construir interfaces quanto de pensar na estrutura por trás
          delas. Atualmente meu foco é o desenvolvimento full stack, com
          back-end e front-end, mas venho ampliando esse olhar para a área de
          dados. Gosto de entender como as peças se conectam, desde a
          experiência do usuário até a infraestrutura e os dados que sustentam
          tudo isso. Estou cursando Engenharia de Software e acredito que o
          melhor jeito de aprender é construindo. Por isso esse portfólio
          existe.
        </p>
      </div>
    </section>
  );
};

export default About;
