const Hero = () => {
  return (
    <section className="relative justify-center flex flex-col justify-items-center bg-dark-grey-900 h-dvh px-5 overflow-hidden">
      <div className="flex mx-auto">
        <h1 className="title-hero mx-auto flex flex-col  items-center justify-center text-[clamp(4rem,17vw,14rem)]">
          <span className="bg-radial-[circle_at_bottom] from-[#ececec] from-15% to-dark-grey-700 to-55% bg-clip-text text-transparent">
            Software
          </span>

          <span className="relative mt-[-0.9em] leading-none">
            Developer.
            <span className="absolute -bottom-2.5 right-2 text-[clamp(1rem,5vw,3rem)] font-light font-signature -rotate-6 leading-none">
              Renan
            </span>
          </span>
        </h1>
      </div>
      <span className="glow-orb" />
    </section>
  );
};

export default Hero;
