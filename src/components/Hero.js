import React from "react";

const Hero = () => {
  return (
    <div className="hero-background flex flex-col w-full h-dvh gap-10 px-6 justify-center items-center rounded-b-[72px]">
      <div className="text-center text-green-500 text-xl font-medium capitalize">
        Hadjer Bouchenine
      </div>
      <h1 className="max-w-6xl text-center text-white text-6xl font-semibold">
        Designing Seamless
        <br />
        Experiences <br />
        That Captivate{" "}
        <span className="eye asset w-14 h-14 inline-flex items-center align-middle"></span>{" "}
        and Delight{" "}
        <span className="shine asset w-14 h-14 inline-flex items-center align-middle"></span>
      </h1>
      <div className="flex items-center p-1 border-2 border-green-700 rounded-full">
        <button className="px-6 py-2.5 bg-green-700 rounded-full justify-center items-center gap-2.5 inline-flex text-center text-white text-2xl  font-semibold uppercase">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Hero;
