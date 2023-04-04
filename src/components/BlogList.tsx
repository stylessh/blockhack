import React from "react";
import PostCard from "./PostCard";

const posts = [
  {
    title: "The Future of Decentralized Finance and How to Navigate It",
    date: "2022-10-10",
  },
  {
    title: "he Evolution of NFTs: From Digital Art to Real-World Utility",
    date: "2022-12-23",
  },
  {
    title:
      "The Environmental Impact of Cryptocurrencies: Exploring Sustainable Alternatives",
    date: "2023-01-25",
    featured: true,
  },
  {
    title:
      "Layer 2 vs. Layer 1: A Comparison of Scaling Solutions for Ethereum",
    date: "2021-03-10",
  },
];

const BlogList = () => {
  return (
    <section className="w-[95%] mx-auto grid grid-cols-[20%,1fr] my-32">
      <article>
        <h3>(Blog)</h3>
      </article>

      <article className="grid grid-cols-[60%,1fr] gap-10">
        {posts.map((post, i) => (
          <PostCard {...post} key={i} />
        ))}
      </article>
    </section>
  );
};

export default BlogList;
