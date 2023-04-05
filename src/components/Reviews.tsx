import { StarIcon } from "@heroicons/react/24/solid";

const reviews = [
  {
    id: 1,
    content:
      "The Metaverse course showed new perspectives on virtual worlds. Highly educational and engaging.",
    author: "Yuki",
    course: "Metaverse",
  },
  {
    id: 2,
    content:
      "I gained comprehensive DeFi understanding and hands-on experience in this academy. The modules are well-structured and easily digestable.",
    author: "Lars Edwards",
    course: "Introduction to DeFi",
  },
  {
    id: 3,
    content:
      "The instructors have a way of breaking down complex NFT concepts into bite-sized, relatable pieces. I can't recommend this academy enough!",
    author: "Yuki",
    course: "Metaverse",
  },
  {
    id: 4,
    content:
      "The Metaverse course showed new perspectives on virtual worlds. Highly educational and engaging.",
    author: "Mike Pullen",
    course: "NFT's",
  },
];

const Reviews = () => {
  return (
    <section className="my-32 overflow-x-hidden ">
      <header className="ml-12">
        <h3>(Reviews)</h3>
      </header>

      <div className="flex gap-10 mt-10 w-max animate-marquee-long">
        {reviews.map((review) => (
          <article
            key={review.id}
            className={`border border-primary-500 rounded-3xl p-4 flex flex-col justify-between min-w-[380px] max-w-[420px]`}
          >
            <header className="mb-8">
              <h2 className="">{review.content}</h2>
            </header>

            <footer className="flex items-center justify-between pt-6 border-t border-primary-500">
              <div className="flex items-center gap-2">
                <div className="h-12 bg-gray-300 rounded-full aspect-square"></div>

                <div className="text-gray-400">
                  <h3 className="font-bold">{review.author}</h3>
                  <p className="text-sm">Course: {review.course}</p>
                </div>
              </div>

              <div className="inline-flex items-center self-start space-x-1">
                <StarIcon className="w-4 h-4 text-primary-500" />
                <StarIcon className="w-4 h-4 text-primary-500" />
                <StarIcon className="w-4 h-4 text-primary-500" />
                <StarIcon className="w-4 h-4 text-primary-500" />
                <StarIcon className="w-4 h-4 text-primary-500" />
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
