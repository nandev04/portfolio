import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type EmblaApi = NonNullable<ReturnType<typeof useEmblaCarousel>[1]>;

const useDotButton = (emblaApi: EmblaApi | undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback((api: EmblaApi) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return { selectedIndex, onDotButtonClick };
};

const Carousel = ({ slides }: { slides: React.JSX.Element[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div>
      <div
        className="overflow-x-clip overflow-y-visible py-6 max-w-280 mx-auto"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y touch-pinch-zoom select-none">
          {slides.map((slide, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 px-2 sm:px-4 md:px-8">
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => onDotButtonClick(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === selectedIndex
                ? "w-10 bg-dark-grey-900"
                : "w-4 bg-dark-grey-900/25"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
