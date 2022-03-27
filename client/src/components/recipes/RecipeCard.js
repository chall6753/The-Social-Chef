import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap'

function RecipeCard({recipe}) {

if (recipe != undefined){
  return (
    <Card>
      <Link to={`/recipes/${recipe.id}`}>
        <Card.Title>{recipe.name}</Card.Title>
      </Link>
    </Card>
  );
}
else {
  return null
}

  
}

export default RecipeCard;