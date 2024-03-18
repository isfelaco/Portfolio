import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav flex-sm-column align-items-start">
      <NavLink className="nav-link text-sm" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" to="/experience">
        Experience
      </NavLink>
      <NavLink className="nav-link " to="/projects">
        Projects
      </NavLink>
      <NavLink className="nav-link" to="/coursework">
        Course Work
      </NavLink>
    </ul>
  );
}

export default function Home() {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row align-items-center" style={{ height: "100%" }}>
        <p className="Title col-7">Isabella Felaco</p>
        <div className="col-md-auto">
          <NavBar />
        </div>
      </div>
    </div>
  );
}
