import { PlayerIllustration } from "@/ui/illustrations";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, PauseCircleIcon } from "@heroicons/react/24/solid";

const chapters = [
  {
    title: "Blockchain’s Role In Governance Blockchain’s Role In Governance",
    duration: "0:11:11",
    playing: false,
  },
  {
    title: "The Bullish Case For Arbitrum",
    duration: "0:11:11",
    playing: true,
  },
  {
    title: "Diving deep into defi 2.0",
    duration: "0:11:11",
    playing: false,
  }, {
    title: "Art, ownership, and revolution with NFTs",
    duration: "0:11:11",
    playing: false,
  }, {
    title: "Are launchpads a good idea?",
    duration: "0:11:11",
    playing: false,
  }
]

const Podcast = () => {
  return (
    <section className="w-[95%] mx-auto grid grid-cols-[20%,1fr] my-32 gap-10">
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

      {/* chapters */}
      <ul className="flex flex-col justify-evenly">
        {chapters.map((chapter, index) => (
          <li className={`${chapter.playing ? "bg-primary-500 text-black" : "border text-white"}  p-4 rounded-3xl flex items-center justify-between`} key={index}>
          <div className="flex items-center gap-4">
          
          {chapter.playing && (
            <button>
            <PlayCircleIcon className="w-8 h-8 text-white" />
          </button>
          )}      

          <h3 className="font-display text-2xl">
            {chapter.title}
          </h3>

          </div>
          <p className="">{chapter.duration}</p>
        </li>
        ))}
      </ul>
    </section>
  );
};

export default Podcast;
