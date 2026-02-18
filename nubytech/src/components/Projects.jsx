import "../css/projects.css";
import repair from "../assets/repair.svg";

function Projects() {
  return (
    <>
      <section className="projects">
        <div>
          <h1>
            <img src={repair} alt="" /> Rome Wasn't Built in a Day, We're
            working on something exciting!
          </h1>
          <h2>Check back soon to see our amazing projects...</h2>{" "}
        </div>
      </section>
    </>
  );
}

export default Projects;
