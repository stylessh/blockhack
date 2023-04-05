import Link from "next/link";
import { EthereumIcon } from "@/ui/icons";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { Menu } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <header className="bg-transparent text-white font-display absolute left-0 top-0 right-0 w-[95%] mx-auto my-4 flex items-center justify-between z-50">
      <Link href="/" className="text-3xl">
        BLOCKHACK
      </Link>

      <Menu
        as="nav"
        className="absolute right-0 z-50 flex flex-col items-center outline-none -top-5 md:-translate-x-1/2 md:left-1/2"
      >
        <Menu.Items className="flex flex-col text-center text-black divide-y divide-black shadow-2xl w-72 top-12 bg-primary-500 rounded-2xl">
          <Menu.Item>
            <Link href="#" className="py-2 text-2xl">
              Courses
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="#" className="py-2 text-2xl">
              About
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="#" className="py-2 text-2xl">
              Blog
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="#" className="py-2 text-2xl">
              Podcast
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="#" className="py-2 text-2xl">
              Account
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="#" className="py-2 text-2xl">
              Support
            </Link>
          </Menu.Item>
        </Menu.Items>

        <Menu.Button className="flex items-center justify-center w-32 h-12 text-black shadow-2xl bg-primary-500 rounded-b-2xl">
          {({ open }) => (
            <>
              {open ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </>
          )}
        </Menu.Button>
      </Menu>

      {/* button */}
      <div className="items-center hidden space-x-2 md:flex">
        <button className="inline-flex items-center px-8 py-1 text-2xl text-white transition border border-white rounded-full hover:bg-white/10">
          <EthereumIcon className="mr-2" />
          ETHEREUM
        </button>

        <button className="px-8 py-1 text-2xl transition border rounded-full text-primary-500 border-primary-500 hover:bg-primary-500/10">
          LOGIN
        </button>
      </div>
    </header>
  );
};

export default Navbar;
