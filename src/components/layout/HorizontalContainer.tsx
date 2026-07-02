import { useLayoutEffect, useRef, type ReactNode, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalContainer = ({
  children,
}: {
  children: ReactNode;
  triggerRef: RefObject<HTMLSpanElement | null>;
}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const gsapCtx = gsap.context(() => {
      gsap.to(containerRef.current, {
        x: "-100vw",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.8,
          start: "bottom bottom",
          end: "+=100%",
          markers: true,
        },
      });
    }, containerRef);

    return () => gsapCtx.revert();
  }, []);

  return (
    <div ref={containerRef} className="">
      {children}
    </div>
  );
};

export default HorizontalContainer;
