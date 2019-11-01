import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
      <div>
        <nav className="navbar bg-primary"> <Link to='/'> <i className="fab fa-github"> GitHub Finder</i> </Link>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul> 
        </nav>
      </div>
    )
}

Navbar.defaultProps = {
  title: 'GitHub Finder'
}

export default Navbar
