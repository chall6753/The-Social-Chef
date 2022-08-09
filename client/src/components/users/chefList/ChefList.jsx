import React, {useState, useEffect} from 'react';
import ChefCard from '../chefCard/ChefCard'
import './chefList.scss'
function ChefList({users}) {
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [search, setSearch] = useState('')

  useEffect(()=>{
    setFilteredUsers(users)
  },[users])

  const handleSearch = (e)=> {
    setSearch(e.target.value)
  }

  useEffect(()=>{
    setFilteredUsers(users.filter((user)=>{
      if (search ===''){
        return user
      }
      else{
        return user.username.toLowerCase().includes(search)
      }
    }))
    
  },[search])
  

  return (
    <div className='chef-list-container'>
      <div className="top">
        <h1>Chef List</h1>
        <label>search</label>
        <input onChange={handleSearch} type="text"/>
      </div>
     
      <ul>
        {filteredUsers.slice(0,15).map(user => {
          return <ChefCard key={user.id} user={user}/>  
        })
        }
      </ul>
        
    </div>
  );
}

export default ChefList;