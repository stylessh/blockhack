import { EthereumIcon } from "@/ui/icons";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <header className="bg-black text-white font-display w-[95%] mx-auto my-4 flex items-center justify-between">
      <Link href="/" className="text-3xl">
        BLOCKHACK
      </Link>

      <nav className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary-500 text-black w-32 h-12 grid place-items-center rounded-b-3xl rounded-t-sm cursor-pointer">
        <Bars3Icon className="w-8 h-8" />
      </nav>

      {/* button */}
      <div className="flex items-center space-x-2">
        <button className="text-white border border-white rounded-full py-1 px-8 text-2xl inline-flex items-center">
          <EthereumIcon className="mr-2" />
          ETHEREUM
        </button>

        <button className="text-primary-500 border border-primary-500 rounded-full py-1 px-8 text-2xl">
          LOGIN
        </button>
      </div>
    </header>
  );
};

export default Navbar;
