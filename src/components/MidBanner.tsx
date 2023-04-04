import { TerrainIllustration } from "@/ui/illustrations";

const MidBanner = () => {
  return (
    <section className="w-[95%] mx-auto relative mb-32 bg-primary-500 rounded-[50px] p-8 md:p-0">
      <TerrainIllustration className="hidden w-full md:block" />

      <h2 className="text-secondary-500 font-display text-4xl md:text-5xl uppercase md:absolute top-[45%] left-[25%] md:w-[40%]">
        Beware of the bland and boring crypto courses that promise the moon and
        deliver only crumbs of basic knowledge.
      </h2>
    </section>
  );
};

export default MidBanner;
