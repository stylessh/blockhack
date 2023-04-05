import { CoinIllustration } from "@/ui/illustrations";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10 bg-primary-500">
      <section className="w-[95%] mx-auto text-black grid gap-y-10 md:grid-cols-[60%,1fr]">
        <header className="md:col-span-2">
          <h3>(Subscribe)</h3>
        </header>

        <article className="relative">
          <h3 className="mt-10 font-display text-6xl md:text-[8em]">
            GET ALPHA ON E-MAIL
          </h3>

          <CoinIllustration className="absolute hidden w-32 -right-16 top-16 md:block" />

          <form className="flex md:w-[70%] px-4 py-2 border border-black rounded-full mt-6">
            <input
              type="text"
              placeholder="Enter your e-mail"
              className="flex-1 text-black bg-transparent outline-none placeholder:text-gray-700"
            />

            <button className="text-2xl font-display">SIGN UP</button>
          </form>
        </article>

        <article className="flex items-center md:justify-end">
          <ul className="space-y-3 uppercase md:text-right">
            <li>
              <Link href="#">Courses</Link>
            </li>
            <li>
              <Link href="#">Login</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Podcast</Link>
            </li>
            <li>
              <Link href="#">Account</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </article>
      </section>

      <section className="border-t border-black w-[95%] mx-auto mt-10 flex flex-col md:flex-row items-center justify-between py-4 text-black">
        <a href="mailto:contact@blockhack.com" className="underline">
          contact@blockhack.com
        </a>

        <p className="text-center">
          Blockhack is a registered trademark of Blockhack, Inc. All rights
          reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
