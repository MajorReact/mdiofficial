import Image from "next/image";
import React from "react";

const SkillsItem = ({ skillsImg, skillsTitle }) => {
  return (
    <div className="rounded-xl p-6 shadow-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={skillsImg} width="64px" height="64px" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{skillsTitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
