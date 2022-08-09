import React from 'react';
import RecipeCard from '../recipeCard/RecipeCard.jsx'
import './recipeList.scss'

function RecipeList({recipes}) {

  return (
    <div className='recipe-list-container'>
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