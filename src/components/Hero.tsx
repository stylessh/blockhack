import { PhoneIllustration } from "@/ui/illustrations";

const Hero = () => {
  return (
    <section className="mt-10 mb-32 w-[95%] m-auto relative overflow-hidden">
      <article className="border rounded-[50px] overflow-hidden grid md:grid-cols-2 md:h-[580px]">
        <article className="grid mt-16 place-items-center md:mt-0">
          <div className="w-[80%]">
            <h1 className="uppercase text-4xl md:text-7xl w-[80%] font-display leading-none">
              Stuck in the world of blockchain?
            </h1>
            <p className="my-2 md:w-[80%]">
              Navigating the crypto world can be Challenging, But Blockhacks is
              here to lead the way.
            </p>
            <p className="font-semibold">
              Are You Ready to Start Your Journey?
            </p>
            <button className="inline-flex items-center px-8 py-1 mt-5 text-xl text-white border border-white rounded-full text-md font-display">
              START JOURNEY TODAY
            </button>
          </div>
        </article>

        <PhoneIllustration className="top-0 right-0 w-full h-full mt-12 md:mt-0 md:w-auto md:absolute" />
      </article>
    </section>
  );
};

export default Hero;
