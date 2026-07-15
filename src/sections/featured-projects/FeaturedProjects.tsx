import Subtitle from "../../components/Subtitle";
import CardProject from "./components/CardProject";
import easylistImg from "./assets/easylist-img.png";
import Carousel from "./components/Carousel";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../config/gsap.config";

const FeaturedProjects = () => {
  const wrapperCarouselRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef(null);

  useLayoutEffect(() => {
    const ctxCarousel = gsap.context(() => {
      gsap.fromTo(
        wrapperCarouselRef.current,
        { yPercent: -5, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            toggleActions: "play none none reverse",
            start: "top 90%",
            trigger: wrapperCarouselRef.current,
            invalidateOnRefresh: true,
          },
        },
      );
    }, wrapperCarouselRef);

    return () => ctxCarousel.revert();
  }, []);

  useLayoutEffect(() => {
    const ctxSubtitle = gsap.context(() => {
      gsap.fromTo(
        subtitleRef.current,
        { xPercent: -100 },
        {
          xPercent: 0,
          scrollTrigger: {
            start: "top bottom",
            end: "top 80%",
            scrub: 1.6,
            trigger: subtitleRef.current,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => ctxSubtitle.revert();
  }, []);

  return (
    <section className="mt-40">
      <div className="max-w-490 mx-auto">
        <div className="mx-8 mb-24 md:mx-16 md:mb-24">
          <Subtitle ref={subtitleRef}>Projects</Subtitle>

          <div ref={wrapperCarouselRef} className="mx-auto gap-6 max-w-460">
            <Carousel
              slides={[
                <CardProject
                  postLink="#"
                  repoLink="#"
                  imgSrc={easylistImg}
                  highlight
                />,
                <CardProject repoLink="#" imgSrc={easylistImg} />,
                <CardProject repoLink="#" imgSrc={easylistImg} />,
                <CardProject repoLink="#" imgSrc={easylistImg} />,
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-dark-grey-900 rounded-l-2xl py-1 px-4 md:px-4  mb-70">
          <span className="-ml-30 font-quinary mix-blend-difference text-white uppercase italic text-[clamp(0.75rem,2.5vw,1.25rem)] ">
            Mais projetos na seção pinned no GitHub
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
