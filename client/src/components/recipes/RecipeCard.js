import React from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap'

function RecipeCard({recipe}) {


  return (
    <Card>
     
      <Link to={`/recipes/${recipe.id}`}>
        <Card.Title>{recipe.name}</Card.Title>
      </Link>
      
        
    </Card>
  );
}

export default RecipeCard;