import { Link } from 'react-router-dom'
import "../style/Project.css"
import "../style/Project1.css"
import "../style/Project2.css"


function Project2() {
  return (
    <>

    <h1 className = "page-title">Project</h1>

    <div className = "web-dev-proj-container">

      <p className = "proj-title-desc"> Graphic Design</p>
      
      <p className = "proj-name">Calling Card for Bella Vista Resort</p>
      
      <p className = "web-dev-proj-desc">
            Designed a calling card for a resort, focusing on clear information, clean layout, 
            and a welcoming visual style that reflects the resort’s brand identity.
      </p>

      <div className = "project-img-container">
        <img src="/assets/image 7.png" className="image7-proj" alt="Image7-project"/>
        <img src="/assets/image 8.png" className="image8-proj" alt="Image8-project"/>
      </div>

      <div className = "button-container">
        <Link to = "/project1" className="back-proj1-button">
          Back
        </Link>  
        <Link className="next-proj1-button">
          Next
        </Link>      
      </div>

    </div>
    </>
  );
}

export default Project2;