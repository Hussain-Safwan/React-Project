import React from 'react';

const Navbar = () => {
    return (
      <div>
        <nav className="navbar bg-primary"> <i class="fab fa-github"> GitHub Finder</i>  </nav>
      </div>
    )
}

Navbar.defaultProps = {
  title: 'GitHub Finder'
}

export default Navbar
