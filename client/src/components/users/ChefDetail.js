import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import RecipeCard from '../recipes/RecipeCard'

function ChefDetail() {
const[chef, setChef]=useState('')
let userId = useParams().id


  useEffect(()=> {
    fetch(`/api/chefs/${userId}`)
    .then((res) => res.json())
    .then((data) => setChef(data))
  },[])
console.log(chef.recipes)

if (chef != ''){
   return (
    <div>
      <h1>{chef.username}</h1>
      <p>{chef.bio}</p>
      <ul>
        {chef.recipes != undefined ?chef.recipes.map((recipe)=>{
          return <RecipeCard recipe={recipe}/>
        }):null}
      </ul>
        
        
    </div>
  );
}
 else {return <p>loading</p>}
}

export default ChefDetail;