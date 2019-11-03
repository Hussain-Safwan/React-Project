import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';

import Repos from '../repos/Repos';
import Spinner from '../layouts/Spinner';


const User = ({ user, loading, repos, getUser, getUserRepos, match }) => {

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    email,
    company,
    hireable,
    login,
    html_url,
    blog,
    followers,
    following,
    public_repos,
    public_gists
  } = user;

  if (loading) {
    return <Spinner />
  }

  return (
    <Fragment>
      <Link to='/' className='btn btn-light' >Back to searches</Link> <br /> <br />
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }} /> <br />
          <strong>{name}</strong>
          <p> <i class="fas fa-map-marker-alt"></i>  {location}</p>
          Hireable {hireable ? <i className='fas fa-check text-success'></i> : <i className='fas fa-times-circle'></i>}
        </div>
        <div>
          {bio && (
            <div className='hilight-back'>
              {bio}
            </div>
          )} <br />
          <a href={html_url} className='btn round-btn btn-dark my-1'>  <i className="fab fa-github"></i> GitHub Profile</a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <i class="fas fa-user"></i> {login}
                </Fragment>
              )}
            </li>

            <li>
              {email && (
                <Fragment>
                  <i class="fas fa-envelope"></i> {email}
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <i class="fas fa-briefcase"></i> {company}
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <i class="fas fa-briefcase"></i> <i class="fas fa-globe"></i> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className='card text-center'>
        <div className='badge badge-primary'> Followers <strong>{followers} </strong> </div>
        <div className='badge badge-success'> Following <strong>{following} </strong> </div>
        <div className='badge badge-light'> Public Repos <strong>{public_repos} </strong> </div>
        <div className='badge badge-dark'> Public Gists <strong>{public_gists} </strong> </div>
      </div>
      <Repos repos={repos}/>
      </Fragment>
  )
}

export default User
