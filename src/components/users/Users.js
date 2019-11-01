import React from 'react';
import UserItems from './useritems';
import Spinner from '../layouts/Spinner';
import propTypes from 'prop-types';

const Users = ({users, loading}) => {
  if (loading){
    return <Spinner/>;
  }
  else{
    return (
      <div style={userStyles}>
        {
          users.map(users => (
            <UserItems key={users.id} users={users}/>
          ))
        }
      </div>
    )
  }
}

Users.propTypes = {
  users : propTypes.array.isRequired,
  loading : propTypes.bool.isRequired
}

const userStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem' 
}

export default Users
