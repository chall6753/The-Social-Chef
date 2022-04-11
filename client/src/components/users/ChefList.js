import React from 'react';
import ChefCard from './ChefCard'
function ChefList({users}) {

  return (
    <div>
      <h1>Chef List</h1>
      <ul>
        {users.map(user => {
          return <ChefCard key={user.id} user={user}/>  
        })
        }
      </ul>
        
    </div>
  );
}

export default ChefList;