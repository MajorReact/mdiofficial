import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import NodeJS from "../public/assets/skills/node.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Express from "../public/assets/skills/express.png";
import Mongo from "../public/assets/skills/mongo.png";
import Vercel from "../public/assets/skills/vercel.png";

import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Technologies Used</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem skillsImg={Javascript} skillsTitle="JavaScript" />
          <SkillsItem skillsImg={Css} skillsTitle="CSS" />
          <SkillsItem skillsImg={Html} skillsTitle="HTML" />
          <SkillsItem skillsImg={ReactImg} skillsTitle="ReactJS" />
          <SkillsItem skillsImg={Github} skillsTitle="Github" />
          <SkillsItem skillsImg={Tailwind} skillsTitle="Tailwind" />
          <SkillsItem skillsImg={NextJS} skillsTitle="NextJS" />
          <SkillsItem skillsImg={Vercel} skillsTitle="Vercel" />
        </div>
        <h3 className="pt-5 my-5">Familiar with:</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem skillsImg={NodeJS} skillsTitle="NodeJS" />
          <SkillsItem skillsImg={Express} skillsTitle="ExpressJS" />
          <SkillsItem skillsImg={Mongo} skillsTitle="Mongo" />
          <SkillsItem skillsImg={ReactImg} skillsTitle="Heroku" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
