import {
  BitcoinToEthereumIllustration,
  DEFIIllustration,
  EthereumDeskIllustration,
  StairsIllustration,
  Web3AndBlockchainIllustration,
} from "@/ui/illustrations";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const LearningPath = () => {
  return (
    <section className="w-[95%] mx-auto grid gap-y-10 md:grid-cols-[20%,1fr] my-32">
      <article>
        <h3>(Our learning paths)</h3>
      </article>

      <article className="space-y-10">
        <header>
          <h2 className="text-2xl font-bold md:w-[50%] uppercase">
            Discover the Building Blocks of the Crypto Revolution one at a time
            “Continue building your knowledge in crypto”.
          </h2>
        </header>

        {/* card one */}
        <article className="grid p-6 text-black md:grid-cols-2 bg-primary-500 rounded-3xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-secondary-500 text-6xl md:text-[8em] font-display leading-none">
              Web3 and Blockchain
            </h2>
            <p className="my-4 font-semibold w-[80%]">
              Master the fundamentals of blockchain technology and Web3. Grasp
              core concepts, consensus mechanisms, and smart contracts, paving
              the way for advanced understanding and applications.
            </p>

            <Link
              href="/course/web3-and-blockchain"
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

            <Web3AndBlockchainIllustration className="w-full md:w-96 md:mr-8" />
          </div>
        </article>

        {/* card two */}
        <article className="grid p-6 text-white bg-black border md:grid-cols-2 rounded-3xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-secondary-500 text-6xl md:text-[8em] font-display leading-none">
              Layer 2’s
            </h2>
            <p className="my-4 font-semibold w-[80%]">
              This course plan provides a comprehensive framework for mastering
              Layer 2 solutions, covering their fundamentals, technologies,
              platforms, applications, development, tokenomics, governance, risk
              management, future developments, and practical integration.
            </p>

            <Link
              href="/course/layer-2"
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

            <BitcoinToEthereumIllustration className="w-full md:mr-8" />
          </div>
        </article>

        {/* card three */}
        <article className="grid p-6 text-white border md:grid-cols-2 bg-secondary-500 rounded-3xl">
          <div className="flex flex-col justify-center">
            <h2 className="text-primary-500 text-6xl md:text-[8em] font-display leading-none">
              DeFi
            </h2>
            <p className="my-4 font-semibold w-[80%]">
              Explore decentralized finance, its core concepts, and
              applications. Learn how to leverage DeFi protocols to manage
              digital assets, earn passive income, and understand emerging
              trends.
            </p>

            <Link
              href="/course/defi"
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

            <DEFIIllustration className="w-full md:w-96 md:mr-8" />
          </div>
        </article>

        <Link
          href="/course"
          className="block mt-2 text-3xl underline uppercase font-display"
        >
          More Courses
        </Link>
      </article>
    </section>
  );
};

export default LearningPath;
