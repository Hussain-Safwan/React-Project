import React, {Fragment, Component} from 'react';
import Navbar from './components/layouts/Navbar';
import UserItems from './components/users/useritems';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
 func = () => 'in the class';

  render() {
    const me = 'Saf';
    const bool = true;
    return (
      <nav className="bar-bg">
        <Navbar title="GitHub Finder" />
        <div className="container">
          <Users />
        </div>
      </nav>
    );
  }
}

export default App;
