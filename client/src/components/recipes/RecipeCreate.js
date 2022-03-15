import React, {useState, useEffect}from 'react'
import {Container} from 'react-bootstrap'
import AddIngredient from './AddIngredient'

function RecipeCreate({handleCreateRecipe}){
    const[username,setUsername]=useState('bobby')
    const[recipeName,setRecipeName]=useState('soup')
    const[recipeIngredients,setRecipeIngredients]=useState([])
    const[instructions,setInstructions]=useState('')
    
    function createRecipe(e){
        e.preventDefault()
        fetch('http://localhost:9292/recipe_create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                recipeName: recipeName,
                recipeIngredients: recipeIngredients,
                instructions: instructions
            }),
        })
        .then((r)=>r.json())
        .then((recipe) => handleCreateRecipe(recipe))
        
        }
    
        function addIngredient(ingredientName,quantity,unit){
            let ingredient = {ingredient:ingredientName, quantity:quantity, unit: unit}
            let updatedIngredients = [...recipeIngredients,ingredient]
            setRecipeIngredients(updatedIngredients)
        }
        
    return (
        <Container>
            
            <h1>Create New Recipe</h1>
            <form>
                <label>Chef: </label>
                <input type='text' onChange={(e)=>setUsername(e.target.value)}></input>
                <label>Recipe Name</label>
                <input type="text" onChange={(e)=>setRecipeName(e.target.value)}></input>
                <br></br>
                <h2>Ingredients</h2>
                <AddIngredient addIngredient={addIngredient}/>
                <ul>
                {recipeIngredients.length>0 && 
                    recipeIngredients.map((ingredient)=>{
                        return <li key={ingredient.ingredient}>{ingredient.ingredient} {ingredient.quantity} {ingredient.unit}</li>
                    }) 
                }
                </ul>
                <h2>Instructions</h2>
                <label>Cooking Instructions: </label>
                <textarea type='paragraph_text' cols='80' onChange={(e)=>setInstructions(e.target.value)}></textarea>
            </form>  
            <button type='submit' onClick={createRecipe}>Submit Recipe</button>          
        
        </Container>
    )
}

export default RecipeCreate