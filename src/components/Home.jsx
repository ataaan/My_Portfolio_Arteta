import "../style/Home.css"

function App() {
  return (
    <>
      <nav className = "NavigationBar">
        <a href = "#home" className = "active">Home</a>
        <a href = "#about">About</a>
        <a href = "#project">Project</a>
        <a href = "#contact">Contact</a>
      </nav>
      
        <div className = "content" id = "home">
            <p className = "hello">HELLO, THERE!</p>

            <h1>
              I'm <span>Jonathan P. Arteta</span>
            </h1>

            <h2>
              Front-end Developer / UI/UX Designer
            </h2>

            <p className = "description">
              Currently looking for opportunities where i can apply my skills <br />
              and continue  grow as a developer and as a designer.
            </p>

            <button className = "about-button">
              More about me
            </button>
        </div>
        
    <div class = "img-container">
          <img src="/assets/arteta.png" className="person-image" alt="Jonathan"/>
    </div>    
</>
  );
}

export default App;