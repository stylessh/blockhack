import Link from "next/link";
import React, { FC } from "react";

type PostCardProps = {
  title: string;
  date: string;
  featured?: boolean;
};

const PostCard: FC<PostCardProps> = ({ title, date, featured }) => {
  return (
    <article
      className={`${
        featured
          ? "bg-secondary-500 text-white border"
          : "border border-primary-500 hover:bg-primary-500/10 transition"
      } rounded-3xl p-4 flex flex-col justify-between`}
    >
      <header className="mb-8">
        <h2 className="text-3xl md:text-6xl font-display">{title}</h2>
      </header>

      <footer className="flex items-center justify-between pt-6 border-t">
        <Link href="#" className="text-2xl underline uppercase font-display">
          Learn more
        </Link>

        <p>{date}</p>
      </footer>
    </article>
  );
};

export default PostCard;
