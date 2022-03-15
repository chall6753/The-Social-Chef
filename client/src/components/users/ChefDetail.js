import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import RecipeCard from '../recipes/RecipeCard'

function ChefDetail() {
const[recipe, setRecipe]=useState('')
let userId = useParams().id


  useEffect(()=> {
    fetch(`/chefs/${userId}`)
    .then((res) => res.json())
    .then((data) => setRecipe(data))
  },[])
console.log(recipe)

if (recipe != ''){
   return (
    <div>
      <h1>{recipe.username}</h1>
      <ul>
        {recipe.recipes.map((recipe)=>{
          return <RecipeCard recipe={recipe}/>
        })}
      </ul>
        
        
    </div>
  );
}
 else {return <p>loading</p>}
}

export default ChefDetail;