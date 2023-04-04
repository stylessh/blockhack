import Link from "next/link";
import { EthereumIcon } from "@/ui/icons";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { Menu } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <header className="bg-black text-white font-display w-[95%] mx-auto my-4 flex items-center justify-between">
      <Link href="/" className="text-3xl">
        BLOCKHACK
      </Link>

      <Menu
        as="nav"
        className="absolute top-0 z-50 flex flex-col items-center -translate-x-1/2 outline-none left-1/2"
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
      <div className="flex items-center space-x-2">
        <button className="inline-flex items-center px-8 py-1 text-2xl text-white border border-white rounded-full">
          <EthereumIcon className="mr-2" />
          ETHEREUM
        </button>

        <button className="px-8 py-1 text-2xl border rounded-full text-primary-500 border-primary-500">
          LOGIN
        </button>
      </div>
    </header>
  );
};

export default Navbar;
