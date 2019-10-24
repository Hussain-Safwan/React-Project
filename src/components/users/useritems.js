import React from 'react';

const useritems = ({users : {login, avaterUrl, htmlUrl}}) => {
    // const {login, avaterUrl, htmlUrl} = props.users;
    return (
      <div className="card text-center">
        <img 
          src={avaterUrl}
          className="round-img"
          alt=""
          style={{width: '60px', height: '60px'}}
          />
        <h3> {login} </h3>
        <div>
          <a href={htmlUrl} className="btn btn-dark btn-sm my-1">View Profile</a>
        </div>
      </div>
    )
}

export default useritems
