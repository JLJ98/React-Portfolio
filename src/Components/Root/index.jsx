import {Link, Outlet} from 'react-router-dom'
import "./nav.css"
const Root = () => {
  return (
    <div className="nav-container"> 
        <ul className='nav'>
            <li>
                <Link className="NavItem" to="/">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
        </ul>
        <Outlet />
    </div>

  )
}

export default Root