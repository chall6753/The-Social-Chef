import React, {useState} from 'react';
import ChefCard from '../chefCard/ChefCard'
import './chefList.scss'
function ChefList({users}) {
  const [filteredUsers, setFilteredUsers] = useState(users)

  return (
    <div className='chef-list-container'>
      <div className="top">
         <h1>Chef List</h1>
        <label>search</label>
        <input type="text" />
      </div>
     
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