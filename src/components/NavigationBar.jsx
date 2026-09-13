import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <nav className="NavigationBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/project">Project</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default NavigationBar
