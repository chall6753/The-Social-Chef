import React from 'react';
import {Link} from 'react-router-dom';

function RecipeCard({recipe}) {


  return (
    <div>
     
      <Link to={`/recipes/${recipe.id}`}>
        <h1>{recipe.name}</h1>
      </Link>
      
        
    </div>
  );
}

export default RecipeCard;