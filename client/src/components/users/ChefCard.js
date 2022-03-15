import React from 'react';
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
function ChefCard({user}) {


  return (
    <Card>
      <Link to={`/chefs/${user.id}`}>{user.username}</Link>
    </Card>
  );
}

export default ChefCard;