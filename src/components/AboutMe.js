import React from "react";
import web from "../assets/icons/laptopcomputer.and.iphone.svg";
import mobile from "../assets/icons/apps.iphone.svg";
import changes from "../assets/icons/wand.and.stars.svg";
import landing from "../assets/icons/note.svg";
import research from "../assets/icons/magnifyingglass.svg";
import system from "../assets/icons/rectangles.group.svg";

const AboutMe = () => {
  return (
    <div className="flex flex-col w-full px-6">
      <div className="flex flex-auto items-center justify-center w-full py-40">
        <div className="flex max-w-4xl gap-8 items-start">
          <div className="myPic h-72 w-1/5 rounded-full "></div>
          <div className="flex flex-col  w-4/5 gap-3 *:m-0">
            <p className="text-black text-xl font-medium">Hello, I am</p>
            <h2 className="text-neutral-900 text-3xl font-medium capitalize">
              Hadjer Bouchenine
            </h2>
            <h2 className="text-green-600 text-3xl font-semibold capitalize">
              creative digital product designer
            </h2>
            <p className="text-zinc-700 text-xl font-medium leading-relaxed">
              I thrive on the art of crafting unique and captivating user
              interfaces that seamlessly blend usability and aesthetics, leaving
              a lasting impression.
            </p>
            <p className="text-zinc-700 text-xl font-medium leading-relaxed">
              Driven by a love for creative work, I thrive on the challenge of
              creating user-centered experiences that not only engage and
              delight users but also drive tangible business results.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex w-full items-start *:border-r *:border-zinc-300
      *:py-4 *:px-4 last:*:border-r-0 *:flex-1 *:flex *:flex-col *:items-center *:text-center *:gap-3 text-xl font-medium"
      >
        <div className="h-full">
          <img src={web} alt="web design icon" />
          <p>Web Design</p>
        </div>
        <div className="">
          <img src={changes} alt="web design icon" />
          <p>Changes & Redesign</p>
        </div>
        <div className="">
          <img src={mobile} alt="web design icon" />
          <p>Mobile Design</p>
        </div>
        <div className="">
          <img src={landing} alt="web design icon" />
          <p>Landing pages developement</p>
        </div>
        <div className="">
          <img src={system} alt="web design icon" />
          <p>Design system</p>
        </div>
        <div className="">
          <img src={research} alt="web design icon" />
          <p>UX research</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
