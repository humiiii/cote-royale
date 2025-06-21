import clsx from "clsx";
import React, { useState } from "react";
import {
  HiBars3,
  HiMagnifyingGlass,
  HiShoppingBag,
  HiUser,
  HiXMark,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const navLinks = ["ignis", "aqua", "terra"];

const NavIcons = ({ className = "", tabIndex }) => {
  return (
    <div className={clsx("flex items-center gap-8", className)}>
      <Link to={"/cote-royale/"} tabIndex={tabIndex} className="text-white">
        <HiMagnifyingGlass size={24} />
      </Link>
      <Link to={"/cote-royale/"} tabIndex={tabIndex} className="text-white">
        <HiUser size={24} />
      </Link>
      <Link to={"/cote-royale/"} tabIndex={tabIndex} className="text-white">
        <HiShoppingBag size={24} />
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <header className="pb-14 md:pb-16">
      <div className="navbar fixed top-0 left-0 z-50 w-full bg-black text-white">
        <div className="flex items-center justify-between p-2 md:p-4">
          <button
            onClick={toggleDrawer}
            className="cursor-pointer p-2 text-white transition-colors duration-300 hover:bg-white/20"
          >
            <HiBars3 size={24} />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <Link to={"/cote-royale/"}>
              <img
                src="/cote-royale/images/logo.svg"
                alt="Cote Royale Paris"
                className="w-32 md:w-44"
                width={180}
                height={30}
              />
            </Link>
          </div>
          <div className="flex">
            <NavIcons className="hidden md:flex" />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "nav-drawer-blur fixed inset-0 z-40 bg-black/40 opacity-0 transition-all duration-700",
          isDrawerOpen
            ? "pointer-events-auto opacity-100 backdrop-blur-xs"
            : "pointer-events-none backdrop-blur-none",
        )}
        onClick={toggleDrawer}
      />

      <div
        className={clsx(
          "nav-drawer fixed top-0 left-0 z-50 h-full w-full bg-neutral-900 p-6 transition-transform duration-700 sm:w-96",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="mb-6 flex justify-end">
          <button
            className="p2 text-white transition-colors duration-300 hover:bg-white/10"
            onClick={toggleDrawer}
            tabIndex={isDrawerOpen ? 0 : -1}
          >
            <HiXMark size={24} />
          </button>
        </div>
        <nav className="space-y-4">
          <Link
            onClick={() => setIsDrawerOpen(false)}
            className="block border-b border-white/10 py-2 text-xl font-semibold tracking-wide text-white uppercase hover:text-gray-300"
            to={`/cote-royale/`}
            tabIndex={isDrawerOpen ? 0 : -1}
          >
            <p className="capitalize">home</p>
          </Link>
          {navLinks.map((link, index) => (
            <Link
              onClick={() => setIsDrawerOpen(false)}
              key={index}
              className="block border-b border-white/10 py-2 text-xl font-semibold tracking-wide text-white uppercase hover:text-gray-300"
              to={`/cote-royale/fragrance/${link}`}
              tabIndex={isDrawerOpen ? 0 : -1}
            >
              <p className="capitalize">{link}</p>
            </Link>
          ))}
          <div className="pt-4 md:hidden">
            <NavIcons
              className="justify-around"
              tabIndex={isDrawerOpen ? 0 : -1}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
