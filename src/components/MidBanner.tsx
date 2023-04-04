import { TerrainIllustration } from "@/ui/illustrations";
import React from "react";

const MidBanner = () => {
  return (
    <section className="w-[95%] mx-auto relative mb-32">
      <TerrainIllustration className="w-full" />

      <h2 className="text-secondary-500 font-display text-5xl uppercase absolute top-[45%] left-[25%] w-[40%]">
        Beware of the bland and boring crypto courses that promise the moon and
        deliver only crumbs of basic knowledge.
      </h2>
    </section>
  );
};

export default MidBanner;
