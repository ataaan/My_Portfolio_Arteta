import { Link } from 'react-router-dom'
import "../style/About.css"

function About() {
  return (
    <>
      <h1 className = "page-title">About Me!</h1>
      
      <div class = "about-img-container">
        <img src="/assets/arteta-about.png" className="about-image" alt="Jonathan-about"/>
      </div>

      <div className = "about-content">
        <p className = "name-role-description">
          I’m <span>Jonathan P. Arteta,</span><br />
          Aspiring Front-end Developer / UI/UX Designer.
        </p>

        <p className = "about-description">
          I enjoy turning ideas into functional and visually engaging <br />
          web applications while continuously improving my skills in <br />
          frontend development and UI/UX design. My goal is to <br />
          create responsive, user-friendly interfaces that combine <br />
          functionality, usability, and clean design.
        </p>

        <Link to = "/about" className="resume-button">
            Resume
        </Link>
      </div>
    </>
  );
}

export default About;
