import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 w-full px-20 py-40 *:h-[500px]">
      <div className="flex w-full gap-10 *:flex-1">
        <div className="flex flex-col gap-6">
          <div className=" text-green-500 text-xl font-medium capitalize">
            Best projects
          </div>
          <div className="text-neutral-900 text-4xl font-bold pr-24 ">
            Designing Unique Products with Exceptional UX
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-zinc-700 text-xl font-medium leading-relaxed">
              Behind every great user interface design, there lies a story and
              an exciting, lengthy process.
            </p>
            <p className="text-zinc-700 text-xl font-medium leading-relaxed">
              Here, I have listed some of my best projects, which have received
              excellent feedback from clients and have been loved by users.
            </p>
            <p className="text-zinc-700 text-xl font-medium leading-relaxed">
              These projects are presented as case studies, taking you on a
              journey through the process of crafting remarkable products.
            </p>
          </div>
        </div>
        <div className="project1"></div>
      </div>
      <div className="flex w-full gap-10 *:flex-1">
        <div className="project2"></div>
        <div className="project3"></div>
      </div>
    </div>
  );
};

export default Projects;
