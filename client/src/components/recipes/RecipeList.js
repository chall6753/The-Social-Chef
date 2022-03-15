import React from 'react';
import RecipeCard from './RecipeCard'

function RecipeList({recipes}) {

console.log(recipes)
  return (
    <div >
      <h1>Recipe List</h1>
        
      <ul>
        {recipes.map(recipe => {
          return <RecipeCard recipe={recipe}/> 
        })
        }
      </ul>
    </div>
  );
}

export default RecipeList;