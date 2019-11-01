import React, { Component, Fragment } from 'react';
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

class App extends Component {

  state = {
    users: [],  //list of users, from search results
    user : {},  //single user, view details
    repos: [],
    loading: false,
    alert: null
  }

  // async componentDidMount(){
  //   console.log('secret : ', process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   this.setState({ loading : true });
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users : res.data, loading : false });
  // }

  getUser = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ user: res.data, loading: false });
  }

  getUserRepos = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ user: res.data, loading: false });
  }

  searchUsers = async (text) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false });
  }

  clearUsers = async () => {
    this.setState({ users: [], loading: false });
  }

  showAlert = async (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => { this.setState({ alert: null }) }, 3000);
  }

  render() {

    return (
      <Router>
        <Navbar title="GitHub Finder" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>

            <Route exact path='/' render={prop => (
              <Fragment>
                <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  showClear={this.state.users.length > 0 ? true : false}
                  showAlert={this.showAlert}
                />
                <Users 
                users={this.state.users} 
                loading={this.state.loading} />
              </Fragment>
            )} />

            <Route exact path='/user/:login' render={props => (
              <User 
              {...props} 
              getUser={this.getUser} 
              getUserRepos={this.getUserRepos}
              user={this.state.user}
              repos={this.state.repos} 
              loading={this.state.loading} />
            )}
            />

            <Route exact path='/about' component={About} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
