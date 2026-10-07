import { Link } from 'react-router-dom'
import "../style/Project.css"


function Project() {
  return (
    <>

    <h1 className = "page-title">Project</h1>

    <div className = "web-dev-proj-container">

      <Link className="view-website-button">
        View Website
      </Link>

      <p className = "proj-title-desc">Web Development</p>
      
      <p className = "proj-name">Brgy<span>X</span>press</p>
      
      <p className = "web-dev-proj-desc">
        A web-based platform that simplifies barangay document request by allowing 
        residents to request, track, and receive documents online through doorstep 
        delivery. It help modernize barangay services  by reducing manual transactions, 
        waiting times and unnecessary visits to the barangay office.
      </p>

      <div className = "project-img-container">
        <img src="/assets/image 1.png" className="image1-proj" alt="Image1-project"/>
        <img src="/assets/image 2.png" className="image1-proj" alt="Image1-project"/>
      </div>

      <div className = "button-container">
        <Link className="next-proj-button">
          Back
        </Link>      
        <Link className="back-proj-button">
          Next
        </Link> 
      </div>

    </div>
    </>
  );
}

export default Project;