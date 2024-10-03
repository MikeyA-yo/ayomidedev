import ProjectLayOut from "./projectLayout";
import "./projectcustom.css"
export default function Projects() {
  return (
    <>
      <div id="projects">
        <div className="hidden lg:block md:block">
          <ProjectLayOut  />
        </div>
        <div className="block lg:hidden md:hidden">
          <ProjectLayOut mobile />
        </div>
      </div>
    </>
  );
}
