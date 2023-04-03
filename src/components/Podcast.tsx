import { PlayerIllustration } from "@/ui/illustrations";
import { ChevronLeftIcon, PauseCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Podcast = () => {
  return (
    <section className="w-[95%] mx-auto grid grid-cols-[20%,1fr] my-32 gap-y-10">
      <header className="col-span-2">
        <h3>(Podcast)</h3>
      </header>

      {/* player */}
      <article className="bg-primary-500 rounded-3xl overflow-x-hidden">
        <PlayerIllustration className="w-full" />

        <div className="p-4">
          <h3 className="w-max text-black font-bold text-2xl">
            Blockchain’s Role In Governance Blockchain’s Role In Governance
          </h3>

          {/* player controls */}
          <div className="flex items-center justify-center my-4 text-black space-x-8">
            <button>
              <ChevronLeftIcon className="w-8 h-8" />
            </button>

            <button>
              <PauseCircleIcon className="w-16 h-16" />
            </button>

            <button>
              <ChevronLeftIcon className="w-8 h-8 rotate-180" />
            </button>
          </div>

          {/* progress bar */}
          <div className="flex items-center gap-4 text-sm text-black rounded-md">
            <p>0:11:11</p>

            <div className="w-full h-1 border border-black rounded-full">
              <div className="w-1/2 h-full bg-black rounded-full"></div>
            </div>

            <p>0:20:00</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Podcast;
