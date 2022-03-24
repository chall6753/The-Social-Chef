import React from 'react';
import ChefCard from './ChefCard'
function ChefList({users}) {

console.log(users)
  return (
    <div>
      <h1>Chef List</h1>
      <ul>
        {users.map(user => {
          return <ChefCard user={user}/>  
        })
        }
      </ul>
        
    </div>
  );
}

export default ChefList;