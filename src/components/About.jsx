import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div>
        <h1>About Me</h1>
        <p className = "name/role-description">
          I’m Jonathan P. Arteta, <br />
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

      <div class = "img-container">
            <img src="/assets/arteta-about.png" className="about-image" alt="Jonathan-about"/>
      </div>
    </>
  );
}

export default About;
