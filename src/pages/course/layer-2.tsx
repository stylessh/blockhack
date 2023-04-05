import {
  BitcoinPlantIllustration,
  BookIllustration,
  DEFIIllustration,
  EtherCapsuleIllustration,
  EtherIllustration,
  EtherOpenIllustration,
  Layer2Illustration,
  MetaverseIllustration,
  MostPopularIllustration,
  Web3AndBlockchainIllustration,
  WireframeIllustration,
} from "@/ui/illustrations";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";

import { Disclosure } from "@headlessui/react";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Footer from "@/components/Footer";

const compositions = [
  {
    id: 1,
    title: "Course composition 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus, erat quis congue rutrum, massa metus auctor dolor, vitae varius mauris mauris id sem.",
  },
  {
    id: 2,
    title: "Course composition 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus, erat quis congue rutrum, massa metus auctor dolor, vitae varius mauris mauris id sem.",
  },
  {
    id: 3,
    title: "Course composition 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus, erat quis congue rutrum, massa metus auctor dolor, vitae varius mauris mauris id sem.",
  },
  {
    id: 4,
    title: "Course composition 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus, erat quis congue rutrum, massa metus auctor dolor, vitae varius mauris mauris id sem.",
  },
];

const program = [
  {
    id: 1,
    title: "Chapter 1: Introduction to Layer 2 Solutions",
    lessons: 3,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. Understanding blockchain scalability challenges",
        time: "5m",
      },
      {
        id: 2,
        title:
          "2. Defining Layer 2: off-chain scaling solutions",
        time: "15m",
      },
      {
        id: 3,
        title: "3. Layer 2 vs. Layer 1: key differences and advantages",
        time: "8m",
      },
    ],
  },
  {
    id: 2,
    title: "Chapter 2: Layer 2 technologies and techniques",
    lessons: 4,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. State channels and payment channels",
        time: "5m",
      },
      {
        id: 2,
        title: "2. Sidechains and plasma",
        time: "15m",
      },
      {
        id: 3,
        title: "3. Rollups: optimistic and ZK-rollups",
        time: "8m",
      },
      {
        id: 4,
        title: "4. Sharding: horizontal scaling for blockchains",
        time: "5m",
      },
    ],
  },
  {
    id: 3,
    title: "Chapter 3: Layer 2 platforms and protocols",
    lessons: 4,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. Overview of major Layer 2 solutions",
        time: "5m",
      },
      {
        id: 2,
        title: "2. Ethereum Layer 2 ecosystem",
        time: "15m",
      },
      {
        id: 3,
        title: "3. Layer 2 solutions for other blockchains",
        time: "8m",
      },
      {
        id: 4,
        title: "4. Cross-chain interoperability and bridges",
        time: "5m",
      },
    ],
  },
  {
    id: 4,
    title: "Chapter 4: Layer 2 applications and use cases",
    lessons: 4,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. Decentralized finance (DeFi) and Layer 2",
        time: "5m",
      },
      {
        id: 2,
        title: "2. Gaming, NFTs, and virtual worlds",
        time: "15m",
      },
      {
        id: 3,
        title: "3. Decentralized identity and data privacy",
        time: "8m",
      },
      {
        id: 4,
        title: "4. Enterprise and supply chain management",
        time: "5m",
      },
    ],
  },
  {
    id: 5,
    title: "Chapter 5: Developing on Layer 2",
    lessons: 4,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. Smart contracts on Layer 2",
        time: "5m",
      },
      {
        id: 2,
        title: "2. Tools and SDKs for Layer 2 development",
        time: "15m",
      },
      {
        id: 3,
        title: "3. Deployment and testing strategies",
        time: "8m",
      },
      {
        id: 4,
        title: "4. Layer 2 security and auditing best practices",
        time: "5m",
      },
    ],
  },
  {
    id: 6,
    title: "Chapter 6: Layer 2 tokenomics and network economics",
    lessons: 4,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. Token models for Layer 2 solutions",
        time: "5m",
      },
      {
        id: 2,
        title: "2. Incentives and staking in Layer 2 networks",
        time: "15m",
      },
      {
        id: 3,
        title: "3. Gas fees and transaction costs",
        time: "8m",
      },
      {
        id: 4,
        title: "4. Managing network congestion and load",
        time: "5m",
      },
    ],
  },
  {
    id: 7,
    title: "Chapter 7: Layer 2 governance and ecosystem",
    lessons: 4,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. Decentralized autonomous organizations (DAOs) in Layer 2",
        time: "5m",
      },
      {
        id: 2,
        title: "2. Governance tokens and voting mechanisms",
        time: "15m",
      },
      {
        id: 3,
        title: "3. The role of validators and arbitrators",
        time: "8m",
      },
      {
        id: 4,
        title: "4. Layer 2 infrastructure and service providers",
        time: "5m",
      },
    ],
  },
  {
    id: 8,
    title: "Chapter 8: Risk management and security in Layer 2",
    lessons: 4,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. Identifying and mitigating Layer 2 risks",
        time: "5m",
      },
      {
        id: 2,
        title: "2. Fraud proofs and data availability",
        time: "15m",
      },
      {
        id: 3,
        title: "3. Centralization concerns and trade-offs",
        time: "8m",
      },
      {
        id: 4,
        title: "4. Wallet security and key management",
        time: "5m",
      },
    ],
  },
  {
    id: 9,
    title: "Chapter 9: The future of Layer 2 and blockchain scalability",
    lessons: 4,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. Ongoing developments and innovations",
        time: "5m",
      },
      {
        id: 2,
        title: "2. Layer 2 solutions for emerging blockchain networks",
        time: "15m",
      },
      {
        id: 3,
        title: "3. Interoperable and cross-chain Layer 2 networks",
        time: "8m",
      },
      {
        id: 4,
        title: "4. The long-term vision for scalable and efficient blockchains",
        time: "5m",
      },
    ],
  },
  {
    id: 10,
    title: "Chapter 10: Practical Layer 2 integration and adoption",
    lessons: 4,
    averageTime: "15m",
    episodes: [
      {
        id: 1,
        title: "1. Setting up Layer 2 wallets and accounts",
        time: "5m",
      },
      {
        id: 2,
        title: "2. Interacting with Layer 2 protocols and applications",
        time: "15m",
      },
      {
        id: 3,
        title: "3. Layer 2 migration strategies for developers",
        time: "8m",
      },
      {
        id: 4,
        title: "4. Case studies and real-world implementations",
        time: "5m",
      },
    ],
  },
];

const Layer2 = () => {
  return (
    <>
      <Head>
        <title>Layer 2's Course - BLOCKHACK</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-white bg-black">
        {/* hero */}
        <section className="relative grid min-h-[calc(100vh-5em)] overflow-hidden place-items-center">
          <WireframeIllustration className="absolute inset-0 z-0" />
          <EtherIllustration className="absolute bottom-0 w-32 right-5 md:bottom-20 md:right-20" />
          <EtherOpenIllustration className="absolute left-0 w-32 top-5 md:top-20 md:left-20" />

          <article className="relative z-10 w-[90%] max-w-screen-md p-10 shadow-2xl bg-secondary-500 rounded-2xl">
            <h1 className="text-6xl text-center text-white md:text-8xl font-display">
              Layer 2's
            </h1>

            <Layer2Illustration className="mx-auto -mt-10 w-96" />

            <p className="mx-auto mt-4 text-center md:w-1/2">
              Give your React knowledge an upgrade and start writing hooks
              today.
            </p>

            <Link
              href="#"
              className="block px-8 py-1 mx-auto mt-6 text-2xl text-white border border-white rounded-full w-max font-display"
            >
              Start now
            </Link>

            {/* floating reviews */}
            <article className="absolute z-20 hidden px-6 py-4 text-center text-black bg-white border border-black md:block -left-32 bottom-10 rounded-2xl">
              <h3 className="font-bold">“Perfect course”</h3>
              <p className="text-sm">Ralph Edwards</p>

              <div className="inline-flex items-center self-start mt-2 space-x-1">
                <StarIcon className="w-4 h-4 text-secondary-500" />
                <StarIcon className="w-4 h-4 text-secondary-500" />
                <StarIcon className="w-4 h-4 text-secondary-500" />
                <StarIcon className="w-4 h-4 text-secondary-500" />
                <StarIcon className="w-4 h-4 text-secondary-500" />
              </div>
            </article>

            <article className="absolute z-20 hidden px-6 py-4 text-center text-black bg-white border border-black md:block -right-32 top-10 rounded-2xl">
              <h3 className="font-bold">“Great content”</h3>
              <p className="text-sm">Steven Mendes</p>

              <div className="inline-flex items-center self-start mt-2 space-x-1">
                <StarIcon className="w-4 h-4 text-secondary-500" />
                <StarIcon className="w-4 h-4 text-secondary-500" />
                <StarIcon className="w-4 h-4 text-secondary-500" />
                <StarIcon className="w-4 h-4 text-secondary-500" />
                <StarIcon className="w-4 h-4 text-secondary-500" />
              </div>
            </article>
          </article>
        </section>

        {/* about */}
        <section className="w-[95%] mx-auto grid gap-y-10 md:grid-cols-[20%,1fr] py-12 mb-32">
          <article>
            <h2>(About course)</h2>
          </article>

          <article>
            <header>
              <p className="text-xl md:w-1/2">
                This course plan provides a comprehensive framework for
                mastering Layer 2 solutions, covering their fundamentals,
                technologies, platforms, applications, development, tokenomics,
                governance, risk management, future developments, and practical
                integration.
              </p>
            </header>

            <ol className="mt-24 grid md:grid-cols-3 gap-20 md:w-[60%]">
              <li className="relative">
                <p className="font-display text-[15em] text-secondary-500 leading-[0.8] border-b text-center">
                  30
                </p>
                <h3 className="w-[80%] font-bold mt-2 uppercase">Lessons</h3>
              </li>

              <li className="relative">
                <p className="font-display text-[15em] text-secondary-500 leading-[0.8] border-b text-center">
                  12
                </p>
                <h3 className="w-[80%] font-bold mt-2 uppercase">
                  Study hours
                </h3>
              </li>

              <li className="relative">
                <p className="font-display text-[15em] text-secondary-500 leading-[0.8] border-b text-center">
                  08
                </p>
                <h3 className="w-[80%] font-bold mt-2 uppercase">Interviews</h3>
              </li>
            </ol>
          </article>
        </section>

        {/* composition */}
        <section className="relative w-[95%] mx-auto border rounded-2xl grid gap-y-10 md:grid-cols-2 px-8 py-12 mb-32">
          <article>
            <h2 className="mb-4 text-6xl font-display">
              Layer 2's course composition.
            </h2>

            <p className="md:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              commodi incidunt quo sed amet officia. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Iste, aliquam?
            </p>

            <Link
              href="#"
              className="inline-block px-8 py-1 mt-6 text-2xl text-white border border-white rounded-full w-max font-display"
            >
              Start now
            </Link>
          </article>

          <article className="p-4 bg-primary-500 rounded-2xl">
            {compositions.map((comp) => (
              <Disclosure
                key={comp.id}
                as="div"
                className="border-b border-black"
              >
                <Disclosure.Button className="flex items-center justify-between w-full py-4 font-semibold text-black uppercase">
                  <p>{comp.title}</p>

                  <ArrowDownCircleIcon className="w-6 h-6 ui-open:-rotate-180" />
                </Disclosure.Button>
                <Disclosure.Panel className="text-black w-[80%] pb-4">
                  {comp.content}
                </Disclosure.Panel>
              </Disclosure>
            ))}
          </article>

          <EtherCapsuleIllustration className="hidden md:block absolute top-0 w-36 left-[45%]" />
          <BitcoinPlantIllustration className="absolute right-0 w-20 md:-right-5 -bottom-5" />
          <BookIllustration className="hidden md:block absolute w-32 left-[30%] top-1/2" />
        </section>

        {/* program */}
        <section className="w-[95%] mx-auto mb-32 grid gap-y-10 md:grid-cols-[20%,1fr]">
          <article>
            <h2>(Course program)</h2>
          </article>

          <article className="overflow-hidden border divide-y rounded-2xl">
            {program.map((chapter) => (
              <Disclosure as="div" key={chapter.id}>
                <Disclosure.Button className="flex flex-wrap items-center justify-between w-full gap-4 px-4 py-6 ui-open:mb-4 ui-open:bg-primary-500 ui-open:text-black ui-open:rounded-b-3xl">
                  <div className="flex gap-2 font-semibold text-white uppercase ui-open:text-black">
                    <ArrowDownCircleIcon className="w-6 h-6 ui-open:-rotate-180" />
                    <p className="text-sm text-left">{chapter.title}</p>
                  </div>

                  <p className="font-normal">
                    {chapter.lessons} lessons | {chapter.averageTime}
                  </p>
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 pb-4 space-y-8 text-white">
                  {chapter.episodes.map((ep) => (
                    <div key={ep.id}>
                      <button className="flex items-center justify-between w-full">
                        <div className="flex gap-2">
                          <PlayCircleIcon className="w-6 h-6" />
                          <p className="text-sm">{ep.title}</p>
                        </div>

                        <p>{ep.time}</p>
                      </button>
                    </div>
                  ))}
                </Disclosure.Panel>
              </Disclosure>
            ))}
          </article>
        </section>

        {/* pricing */}
        <section className="w-[90%] md:w-[55%] mx-auto grid md:grid-cols-2 gap-20">
          <article className="p-4 text-black divide-y divide-black bg-primary-500 rounded-2xl">
            <header className="py-4">
              <h2 className="text-4xl text-center font-display">
                Course: Layer 2's
              </h2>
            </header>

            <div className="py-4 text-center">
              <p className="text-xl">
                <span className="font-bold leading-none text-8xl font-display">
                  $99
                </span>{" "}
                per month
              </p>
            </div>

            <div className="py-4">
              <ul className="space-y-2 list-disc list-inside">
                <li>The first course description</li>
                <li>The second course description</li>
                <li>The third course description</li>
                <li>The fourth course description</li>
              </ul>

              <button className="w-full py-2 mt-6 text-2xl uppercase border border-black rounded-full font-display">
                Buy now
              </button>
            </div>
          </article>

          <article className="relative p-4 text-white divide-y divide-white bg-secondary-500 rounded-2xl">
            <MostPopularIllustration className="absolute left-0 w-20 -top-10 md:-left-10" />

            <header className="py-4">
              <h2 className="text-4xl text-center font-display">
                Annual subscription
              </h2>
            </header>

            <div className="py-4 text-center">
              <p className="text-xl">
                <span className="font-bold leading-none text-8xl font-display">
                  $300
                </span>{" "}
                per year
              </p>
            </div>

            <div className="py-4">
              <ul className="space-y-2 list-disc list-inside">
                <li>The first course description</li>
                <li>The second course description</li>
                <li>The third course description</li>
                <li>The fourth course description</li>
              </ul>

              <button className="w-full py-2 mt-6 text-2xl uppercase border border-white rounded-full font-display">
                Buy now
              </button>
            </div>
          </article>
        </section>

        <Reviews />
        <About />
      </main>

      <Footer />
    </>
  );
};

export default Layer2;
