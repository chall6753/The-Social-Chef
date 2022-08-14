import React from 'react';
import {Link} from 'react-router-dom'
import './chefCard.scss'
function ChefCard({user}) {


if (user != undefined){
   return (
    <div className="chef-card">
      <Link className='link' to={`/chefs/${user.id}`}>
        <h2>{user.username}</h2>
      </Link>
    </div>
      
    
  );
}
else{
  return null
}
 
}

export default ChefCard;