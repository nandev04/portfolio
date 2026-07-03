import { useLayoutEffect, useRef, type ReactNode, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalContainer = ({
  children,
  spanRef,
  sectionARef,
}: {
  children: ReactNode;
  sectionARef: RefObject<HTMLDivElement | null>;
  spanRef: RefObject<HTMLSpanElement | null>;
}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: spanRef.current,
          start: "bottom bottom", // gatilho: span encosta no fim da viewport
          end: () => `+=${window.innerHeight}`,
          pin: sectionARef.current, // seção A congela
          pinSpacing: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        containerRef.current,
        { yPercent: 100 }, // começa 100% abaixo, fora da tela
        { yPercent: 0, ease: "none" }, // sobe até cobrir 100% da tela
      );
    });

    return () => ctx.revert();
  }, [sectionARef, spanRef]);

  return (
    <div ref={containerRef} className="">
      {children}
    </div>
  );
};

export default HorizontalContainer;
