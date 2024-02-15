import React from "react";

const Header = () => {
  return (
    <div className="flex w-full py-4 justify-center items-center fixed ">
      <div className="min-w-3/5 p-2.5 bg-zinc-800 rounded-full justify-between items-center gap-12 flex">
        <div className="logo flex items-end px-6 h-8 text-white text-3xl font-semibold">
          joo.
        </div>
        <nav className="flex list-none text-neutral-400 *:px-4 *:text-center *:text-base *:font-medium *:capitalize hover:*:text-white hover:*:cursor-pointer">
          <li className="">About me</li>
          <li className="">Best Projects</li>
          <li className="">Blog</li>
          <li className="">Testimonials</li>
        </nav>
        <button className="px-4 py-2.5 bg-green-700 rounded-full justify-center items-center gap-2.5 inline-flex text-center text-white text-base font-semibold uppercase">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Header;
