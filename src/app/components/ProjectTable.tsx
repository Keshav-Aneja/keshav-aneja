"use client";
import { useState } from "react";
import ButtonPrime from "../components/ButtonPrime";
import ProjectCard from "../components/ProjectCard";
import TechMenu from "../Project/Tech.json";
import ProjectData from "../Project/Project.json";

interface ProjectProps {
  setProjectOpen: any;
  setOpenProjectId: any;
}
const ProjectTable: React.FC<ProjectProps> = ({
  setProjectOpen,
  setOpenProjectId,
}) => {
  const [selected, setSelected] = useState(0);
  const techSelected = TechMenu[selected]["Skill"];
  let filter = "";
  if (selected === 0) {
    filter = "";
  } else if (selected === 1) {
    filter = "next.js";
  } else if (selected === 2) {
    filter = "python";
  } else if (selected === 3) {
    filter = "html";
  } else if (selected === 4) {
    filter = "javascript";
  } else if (selected === 5) {
    filter = "remotion";
  }
  const filteredProjects =
    filter === ""
      ? ProjectData
      : ProjectData.filter((project) => project.tech.includes(filter));
  return (
    <div className="w-full h-[100%] md:h-[80%] border-2 border-tertiary rounded-3xl overflow-y-hidden">
      <div className="ButtonMenu w-full flex gap-2 p-4 flex-wrap justify-center md:justify-start">
        {TechMenu.map((skill, i) => (
          <ButtonPrime
            key={i}
            index={i}
            onSelect={setSelected}
            selected={selected}
          >
            {skill.Skill}
          </ButtonPrime>
        ))}
      </div>

      <div className="line bg-tertiary w-[100%] h-[2px] md:mb-6"></div>
      <div className="Project-Display w-full h-[80%] overflow-y-scroll overflow-x-hidden p-0 md:p-4 flex justify-center md:justify-between flex-wrap items-start z-[10]">
        {filteredProjects.length === 0 ? (
          <div className="text-5xl text-primary font-coolvetica text-center w-full tracking-wider">
            No Projects Found
          </div>
        ) : (
          filteredProjects.map((data, i) => (
            <ProjectCard
              id={data.id}
              key={data.id}
              title={data.title}
              img={data.bannerImg}
              setProjectOpen={setProjectOpen}
              setOpenProjectId={setOpenProjectId}
            ></ProjectCard>
          ))
        )}
        <div className="empty-block w-full h-32"></div>
      </div>
    </div>
  );
};
export default ProjectTable;
