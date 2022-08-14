import React, {useState, useEffect}from 'react'
import {useNavigate} from 'react-router-dom'
import {Container, Form, Card} from 'react-bootstrap'
import './recipeCreate.scss' 


function RecipeCreate({recipes, setRecipes}){
    const[recipeName,setRecipeName]=useState('')
    const[recipeIngredients,setRecipeIngredients]=useState([])
    const[instructions,setInstructions]=useState('')
    const navigate = useNavigate()
    const[ingredientName,setIngredientName]=useState('')
    const[quantity,setQuantity]=useState('')
    const[unit,setUnit]=useState('')
    
    function createRecipe(e){
        e.preventDefault()
        fetch('/api/recipes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: recipeName,
                recipe_ingredients: recipeIngredients,
                instructions: instructions
            }),
        })
        .then((res)=>{
            if (res.ok){
                res.json().then((recipe)=> {
                    setRecipes([...recipes,recipe])
                    navigate(`/recipes/${recipe.id}`)
                    }) //updates recipes state so page rerenders with new recipe in the list
            }
            else{
                res.json().then(res=>window.alert(res.errors))
            }
        })
        }
    
        function handleAddIngredient(ingredientName,quantity,unit){
            console.log(ingredientName)
            let ingredient = {ingredient:ingredientName, quantity:quantity, unit: unit}
            let updatedIngredients = [...recipeIngredients,ingredient]
            setRecipeIngredients(updatedIngredients)
        }
        console.log(ingredientName)
    return (
        <div className="create-new-recipe">
            <h1>Create New Recipe</h1>
            <div className="input">
                <label>Name:</label>
                <input type="text" onChange={(e)=>setRecipeName(e.target.value)}></input>
            </div>
            <h2>Ingredients</h2>
            <div className="input">
                <label>Ingredient:</label>
                <input type="text" onChange={(e)=>setIngredientName(e.target.value)}></input>
            </div>
            <div className="input">
                <label>Quantity:</label>
                <input type="text" onChange={(e)=>setQuantity(e.target.value)}></input>
            </div>
            <div className="input">
                <label>Unit:</label>
                <input type='text' onChange={(e)=>setUnit(e.target.value)}></input>
            </div>
            <button type="submit" onClick={()=>handleAddIngredient(ingredientName, quantity, unit)}>Add Ingredient</button>
                    
            <ul>
            {recipeIngredients.length>0 && 
                recipeIngredients.map((ingredient)=>{
                    return <li key={ingredient.ingredient}>{ingredient.quantity} {ingredient.unit} {ingredient.ingredient}</li>
                }) 
            }
            </ul>
            <h2>Instructions</h2>
            <div className="instruction-container">
                <label>Instructions: </label>
                <textarea onChange={(e)=>setInstructions(e.target.value)}></textarea>
                
            </div>
               <button type='submit' onClick={createRecipe}>Submit Recipe</button>
        </div>
                   
        
        
    )
}

export default RecipeCreate