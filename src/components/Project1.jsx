import { Link } from 'react-router-dom'
import "../style/Project.css"
import "../style/Project1.css"


function Project1() {
  return (
    <>

    <h1 className = "page-title">Project</h1>

    <div className = "web-dev-proj-container">

      <p className = "proj-title-desc"> Graphic Design</p>
      
      <p className = "proj-name">Logo Design for Bella Vista Resort</p>
      
      <p className = "web-dev-proj-desc">
        A custom logo designed for a resort brand, focusing on creating a clean, memorable, 
        and welcoming visual identity. The design combines visual elements that reflect the 
        resort’s atmosphere and natural environment while maintaining a modern look.
      </p>

      <div className = "project-img-container">
        <img src="/assets/image 3.png" className="image3-proj" alt="Image3-project"/>
        <img src="/assets/image 4.png" className="image4-proj" alt="Image4-project"/>
        <img src="/assets/image 5.png" className="image5-proj" alt="Image5-project"/>
        <img src="/assets/image 6.png" className="image6-proj" alt="Image6-project"/>

      </div>

      <div className = "button-container">
        <Link to = "/project" className="back-proj1-button">
          Back
        </Link>  
        <Link to = "/project2" className="next-proj1-button">
          Next
        </Link>      
      </div>

    </div>
    </>
  );
}

export default Project1;