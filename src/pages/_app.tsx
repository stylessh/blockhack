import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto, Bebas_Neue } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--roboto",
  subsets: ["latin"],
});

const bebas_neue = Bebas_Neue({
  weight: "400",
  variable: "--bebas-neue",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
          --bebas-neue-font: ${bebas_neue.style.fontFamily};
        }
      `}</style>

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
