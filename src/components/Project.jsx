import { Link } from 'react-router-dom'
import "../style/Project.css"


function Project() {
  return (
    <>

    <h1 className = "page-title">Project</h1>

    <div className = "web-dev-proj-container">
      <p className = "proj-title-desc">Web Development</p>
      
      <p className = "prog-name">Brgy<span>X</span>press</p>
      
      <p className = "web-dev-proj-desc">
        A web-based platform that simplifies barangay document request by allowing 
        residents to request, track, and receive documents online through doorstep 
        delivery. It help modernize barangay services  by reducing manual transactions, 
        waiting times and unnecessary visits to the barangay office.
      </p>

      <div class = "proj-container">
        <img src="/assets/arteta-about.png" className="website-img1" alt="Jonathan-about"/>
      </div>

      <Link className="view-website-button">
        View Website
      </Link>   

    </div> 
    </>
  );
}

export default Project;
