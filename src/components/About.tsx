import {
  HeartIllustration,
  LikeIllustration,
  StarIllustration,
} from "@/ui/illustrations";

const About = () => {
  return (
    <section className="w-[95%] mx-auto my-32 grid grid-cols-3 gap-10">
      <header className="col-span-3">
        <h3>(About)</h3>
      </header>

      <article className="flex flex-col justify-between p-4 border rounded-xl bg-secondary-500">
        <h4 className="text-6xl font-display">Hours of Content</h4>
        <LikeIllustration className="w-[40%] mx-auto my-10" />
        <p className="text-6xl text-right font-display">200+</p>
      </article>

      <article className="flex flex-col justify-between p-4 border rounded-xl">
        <h4 className="text-6xl font-display">happy newsletter subscribers</h4>
        <HeartIllustration className="w-[35%] mx-auto my-10" />
        <p className="text-6xl text-right font-display">4000+</p>
      </article>

      <article className="flex flex-col justify-between p-4 text-black border rounded-xl bg-primary-500">
        <h4 className="text-4xl font-display">
          experienced crypto veterans are dishing out insider knowledge like
          never before
        </h4>
        <StarIllustration className="w-[40%] mx-auto my-10" />
        <p className="text-6xl text-right font-display">25+</p>
      </article>
    </section>
  );
};

export default About;
