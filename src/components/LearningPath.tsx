import {
  BitcoinToEthereumIllustration,
  EthereumDeskIllustration,
  StairsIllustration,
} from "@/ui/illustrations";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const LearningPath = () => {
  return (
    <section className="w-[95%] mx-auto grid grid-cols-[20%,1fr] my-32">
      <article>
        <h3>(Our learning paths)</h3>
      </article>

      <article className="space-y-10">
        <header>
          <h2 className="text-2xl font-bold w-[50%] uppercase">
            Discover the Building Blocks of the Crypto Revolution one at a time
            “Continue building your knowledge in crypto”.
          </h2>
        </header>

        {/* card one */}
        <article className="grid grid-cols-2 p-6 text-black bg-primary-500 rounded-3xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-secondary-500 text-[8em] font-display leading-none">
              Rollups
            </h2>
            <p className="my-4 font-semibold w-[80%]">
              This course plan provides a comprehensive framework for mastering
              Rollups, covering their fundamentals, types, platforms,
              applications, development, tokenomics, governance, risk
              management, future developments, and practical integration.
            </p>

            <Link
              href="/course/rollups"
              className="block mt-2 text-3xl underline uppercase font-display"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-col items-end text-right">
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-semibold">4,8</p>

                <div className="inline-flex items-center space-x-1">
                  <StarIcon className="w-6 h-6 text-secondary-500" />
                  <StarIcon className="w-6 h-6 text-secondary-500" />
                  <StarIcon className="w-6 h-6 text-secondary-500" />
                  <StarIcon className="w-6 h-6 text-secondary-500" />
                  <StarIcon className="w-6 h-6 text-secondary-500" />
                </div>
              </div>

              <h3 className="text-xl text-gray-500">49 feedback</h3>
            </div>

            <StairsIllustration className="mr-8" />
          </div>
        </article>

        {/* card two */}
        <article className="grid grid-cols-2 p-6 text-white bg-black border rounded-3xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-secondary-500 text-[8em] font-display leading-none">
              Layer 2’s
            </h2>
            <p className="my-4 font-semibold w-[80%]">
              This course plan provides a comprehensive framework for mastering
              Layer 2 solutions, covering their fundamentals, technologies,
              platforms, applications, development, tokenomics, governance, risk
              management, future developments, and practical integration.
            </p>

            <Link
              href="#"
              className="block mt-2 text-3xl underline uppercase font-display"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-col items-end text-right">
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-semibold">4,9</p>

                <div className="inline-flex items-center space-x-1">
                  <StarIcon className="w-6 h-6 text-primary-500" />
                  <StarIcon className="w-6 h-6 text-primary-500" />
                  <StarIcon className="w-6 h-6 text-primary-500" />
                  <StarIcon className="w-6 h-6 text-primary-500" />
                  <StarIcon className="w-6 h-6 text-primary-500" />
                </div>
              </div>

              <h3 className="text-xl text-gray-500">21 feedback</h3>
            </div>

            <BitcoinToEthereumIllustration className="mr-8" />
          </div>
        </article>

        {/* card three */}
        <article className="grid grid-cols-2 p-6 text-white border bg-secondary-500 rounded-3xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-primary-500 text-[8em] font-display leading-none">
              Metaverse
            </h2>
            <p className="my-4 font-semibold w-[80%]">
              This course plan offers a comprehensive journey into the
              Metaverse, covering its fundamentals, economy, governance,
              development, the future of work and education, marketing, emerging
              trends, and practical exploration.
            </p>

            <Link
              href="#"
              className="block mt-2 text-3xl underline uppercase font-display"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-col items-end text-right">
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-semibold">4,9</p>

                <div className="inline-flex items-center space-x-1">
                  <StarIcon className="w-6 h-6 text-primary-500" />
                  <StarIcon className="w-6 h-6 text-primary-500" />
                  <StarIcon className="w-6 h-6 text-primary-500" />
                  <StarIcon className="w-6 h-6 text-primary-500" />
                  <StarIcon className="w-6 h-6 text-primary-500" />
                </div>
              </div>

              <h3 className="text-xl text-gray-300">60 feedback</h3>
            </div>

            <EthereumDeskIllustration className="mr-8" />
          </div>
        </article>

        <Link
          href="#"
          className="block mt-2 text-3xl underline uppercase font-display"
        >
          More Courses
        </Link>
      </article>
    </section>
  );
};

export default LearningPath;
