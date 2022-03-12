import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

function RecipeDetail() {
  const[recipe,setRecipe]=useState('')
  let recipeId = useParams().id
  console.log(recipeId)
  useEffect(()=>{
    fetch(`/recipes/${recipeId}`)
    .then((res => res.json()))
    .then((data)=> setRecipe(data))
  },[])
  console.log(recipe[0])
  if(recipe != ''){
    return (
    <div>
      <h1>{recipe[0].name}</h1>
      <h3>By: {recipe[0].user.username} </h3>
                <h3>Ingredients</h3>
                    <ul>
                        {recipe[0].recipe_ingredients.map((ingredient)=>{
                            return <li key={ingredient.id}>{ingredient.quantity + ' ' + ingredient.unit + ' ' + ingredient.ingredient.name}</li>
                        })}
                    </ul>
                <h3>Cooking Instructions</h3>
                <p>{recipe[0].instructions}</p>
                {/* <button type='button' onClick={handleRecipeDelete}>Delete</button> */}
        
    </div>
  );
  }
  else{return <p>loading...</p>}
  
}

export default RecipeDetail;