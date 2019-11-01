import React from 'react';
import {Link} from 'react-router-dom';

const useritems = ({users : {login, avatar_url, html_url}}) => {
    return (
      <div className="card text-center">
        <img 
          src={avatar_url}
          className="round-img"
          alt=""
          style={{width: '60px', height: '60px'}}
          />
        <h3> {login} </h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">View Profile</Link>
        </div>
      </div>
    )
}

export default useritems
