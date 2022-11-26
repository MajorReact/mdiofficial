import React from "react";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github.png";
import NodeJS from "../public/assets/skills/node.png";
import NextJS from "../public/assets/skills/nextjs.png";
import PHP from "../public/assets/skills/php-logo.png";
import Mongo from "../public/assets/skills/mongo.png";
import Express from "../public/assets/skills/express.jpg";
import Redux from "../public/assets/skills/redux-js.png";
import GraphQL from "../public/assets/skills/graphql-logo.png";
import SkillsItem from "./SkillsItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 py-16 mb-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </div>
        <h2 className="py-4">Programming Languages</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem skillsImg={Javascript} skillsTitle="ES5/6" />
          <SkillsItem skillsImg={PHP} skillsTitle="PHP" />
        </div>
        <h3 className="py-4">FRAMEWORKS:</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem skillsImg={NodeJS} skillsTitle="Node" />
          <SkillsItem skillsImg={ReactImg} skillsTitle="ReactJS" />
          <SkillsItem skillsImg={Redux} skillsTitle="Redux" />
          <SkillsItem skillsImg={Express} skillsTitle="Express" />
          <SkillsItem skillsImg={Mongo} skillsTitle="Mongo" />
          <SkillsItem skillsImg={NextJS} skillsTitle="NextJS" />
        </div>
        <h3 className="py-4">OTHERS</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem skillsImg={Github} skillsTitle="Github" />
          <SkillsItem skillsImg={GraphQL} skillsTitle="GraphQL" />
          <SkillsItem skillsImg={Tailwind} skillsTitle="Tailwind" />
          <SkillsItem skillsImg={Css} skillsTitle="CSS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
