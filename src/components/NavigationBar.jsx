import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <nav className="NavigationBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default NavigationBar
