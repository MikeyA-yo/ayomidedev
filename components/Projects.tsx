import ProjectLayOut from "./projectLayout";

export default function Projects() {
  return (
    <>
      <div id="projects">
        <div className="hidden lg:block md:block">
          <ProjectLayOut />
        </div>
        <div className="block lg:hidden md:hidden">
          <ProjectLayOut mobile />
        </div>
      </div>
    </>
  );
}
