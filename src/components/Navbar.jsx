import React from "react";

const Navbar = () => {
  return (
    <header className="pb-14 md:pb-16">
      <div className="navbar fixed top-0 left-0 z-50 w-full bg-black text-white">
        <div className="flex items-center justify-between p-2 md:p-4">
          <button className="p-2">Menu</button>
          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <img
              src="/cote-royale/images/logo.svg"
              alt="Cote Royale Paris"
              className="w-32 md:w-44"
              width={180}
              height={30}
            />
          </div>
          <div className="flex">Icons</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
