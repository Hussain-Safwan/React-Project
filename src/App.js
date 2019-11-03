import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

//Components import
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users'
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  const getUser = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
    // this.setState({ user: res.data, loading: false });
  }

  const getUserRepos = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
    // this.setState({ repos: res.data, loading: false });
  }

  const searchUsers = async (text) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
    // this.setState({ users: res.data.items, loading: false });
  }

  const clearUsers = async () => {
    setUsers([]);
    setLoading(false);
    // this.setState({ users: [], loading: false });
  }

  const showAlert = async (msg, type) => {
    setAlert({ msg: msg, type: type })
    // this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => setAlert(null), 3000); 
  }


    return (
      <Router>
        <Navbar title="GitHub Finder" />
        <div className="container">
          <Alert alert={alert} />
          <Switch>

            <Route exact path='/' render={prop => (
              <Fragment>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false}
                  showAlert={showAlert}
                />
                <Users
                  users={users}
                  loading={loading} />
              </Fragment>
            )} />

            <Route exact path='/user/:login' render={props => (
              <User
                {...props}
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                repos={repos}
                loading={loading} />
            )}
            />

            <Route exact path='/about' component={About} />

          </Switch>
        </div>
      </Router>
    );
  }

export default App;
