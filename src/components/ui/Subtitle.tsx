import { useLayoutEffect, useRef, type ReactNode } from "react";
import { FaTerminal } from "react-icons/fa";
import { gsap } from "../../config/gsap.config";

const Subtitle = ({ children }: { children: ReactNode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        { xPercent: -100 },
        {
          xPercent: 0,
          scrollTrigger: {
            start: "bottom 90%",
            end: "bottom 60%",
            scrub: 1.4,
            trigger: wrapperRef.current,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="flex items-center gap-4 mb-16">
      <FaTerminal className="w-15 h-15 text-dark-grey-800" />
      <h2 className="font-tertiary text-dark-grey-800 font-extrabold text-6xl uppercase">
        {children}
      </h2>
    </div>
  );
};

export default Subtitle;
