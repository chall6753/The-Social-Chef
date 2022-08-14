import React from 'react';
import {Link} from 'react-router-dom';
import './recipeCard.scss'

function RecipeCard({recipe}) {

if (recipe != undefined){
  return (
    <div className="recipe-card">
      <Link className='link' to={`/recipes/${recipe.id}`}>
        <h2>{recipe.name}</h2>
      </Link>
    </div>
      
  
  );
}
else {
  return null
}

  
}

export default RecipeCard;