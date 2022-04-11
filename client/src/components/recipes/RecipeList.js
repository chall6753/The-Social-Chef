import React from 'react';
import RecipeCard from './RecipeCard'

function RecipeList({recipes}) {

  return (
    <div >
      <h1>Recipe List</h1>
        
      <ul>
        {recipes.map(recipe => {
          return <RecipeCard key={recipe.id} recipe={recipe}/> 
        })
        }
      </ul>
    </div>
  );
}

export default RecipeList;