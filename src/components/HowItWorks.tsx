import {
  DocumentIllustration,
  LupeIllustration,
  RocketIllustration,
} from "@/ui/illustrations";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="w-[95%] mx-auto grid grid-cols-[20%,1fr] border rounded-3xl px-6 py-12 m-32">
      <article>
        <h2>(How it works)</h2>
      </article>

      <article>
        <header>
          <p className="w-1/2 text-xl">
            Don't fall into the trap of uninspiring education. Our crypto
            courses are like a freshly baked apple pie - warm, personalized, and
            bursting with delicious knowledge that's easy to digest. So, say
            goodbye to boring and hello to a learning experience that will have
            you feeling like a crypto pro in no time! And the icing on the cake
            - get insights from industry experts and insiders.
          </p>
        </header>

        <ol className="mt-24 grid grid-cols-3 gap-20 w-[60%]">
          <li className="relative">
            <p className="font-display text-[15em] text-secondary-500 leading-[0.8] border-b text-center">
              01
            </p>
            <h3 className="w-[80%] font-bold mt-2 uppercase">
              Choose your learning path
            </h3>

            <DocumentIllustration className="absolute left-10 top-16" />
          </li>

          <li className="relative">
            <p className="font-display text-[15em] text-secondary-500 leading-[0.8] border-b text-center">
              02
            </p>
            <h3 className="w-[80%] font-bold mt-2 uppercase">
              Personalize your learning experience
            </h3>

            <LupeIllustration className="absolute left-10 top-12" />
          </li>

          <li className="relative">
            <p className="font-display text-[15em] text-secondary-500 leading-[0.8] border-b text-center">
              03
            </p>
            <h3 className="w-[80%] font-bold mt-2 uppercase">
              Dominate your future
            </h3>

            <RocketIllustration className="absolute left-5 top-16" />
          </li>
        </ol>
      </article>
    </section>
  );
};

export default HowItWorks;
