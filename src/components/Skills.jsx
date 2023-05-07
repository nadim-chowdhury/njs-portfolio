import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import {
  SiExpress,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { BsFillBootstrapFill, BsGit } from "react-icons/bs";

export default function Skills() {
  return (
    <div className="py-2 sm:mx-3 lg:mx-0">
      <h2 className="title">My Skills</h2>
      <div className="grid grid-cols-5 gap-2 mt-4 mb-3 text-slate-700">
        <div className="skills-icon">
          <IoLogoHtml5 />
        </div>
        <div className="skills-icon">
          <IoLogoCss3 />
        </div>
        <div className="skills-icon">
          <SiJavascript />
        </div>
        <div className="skills-icon">
          <FaReact />
        </div>
        <div className="skills-icon">
          <SiNextdotjs />
        </div>
        <div className="skills-icon">
          <FaNodeJs />
        </div>
        <div className="skills-icon">
          <SiExpress />
        </div>
        <div className="skills-icon">
          <SiMongodb />
        </div>
        <div className="skills-icon">
          <FaSass />
        </div>
        <div className="skills-icon">
          <SiTailwindcss />
        </div>
        <div className="skills-icon">
          <BsFillBootstrapFill />
        </div>
        <div className="skills-icon">
          <SiJquery />
        </div>
        <div className="skills-icon">
          <BsGit />
        </div>
      </div>
    </div>
  );
}
