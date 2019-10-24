import React, { Component } from 'react';
import UserItems from './useritems';

export class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'Psycho',
        avaterUrl: 'https://picsum.photos/id/1057/367/267',
        htmlUrl: 'https://github.com/Hussain-Safwan'
      },
      {
        id: '2',
        login: 'Sinister',
        avaterUrl: 'https://picsum.photos/id/237/200/300',
        htmlUrl: 'https://github.com/Hussain-Safwan'
      },
      {
        id: '3',
        login: 'Aftermath',
        avaterUrl: 'https://picsum.photos/id/1044/367/267',
        htmlUrl: 'https://github.com/Hussain-Safwan'
      }
    ]
  }
  render() {
    return (
      <div style={userStyles}>
        {
          this.state.users.map(users => (
            <UserItems key={users.id} users={users}/>
          ))
        }
      </div>
    )
  }
}

const userStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem' 
}

export default Users
