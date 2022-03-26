import React, {useState, useEffect}from 'react'
import {useNavigate} from 'react-router-dom'
import {Container, Form, Card} from 'react-bootstrap'
import AddIngredient from './AddIngredient'

function RecipeCreate({recipes, setRecipes}){
    
    const[recipeName,setRecipeName]=useState('')
    const[recipeIngredients,setRecipeIngredients]=useState([])
    const[instructions,setInstructions]=useState('')
    const navigate = useNavigate()
    
    function createRecipe(e){
        e.preventDefault()
        fetch('/recipes', {
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
                navigate('/recipes') //once the recipe submit button and succesful creation of recipe navigate to recipe list
                res.json().then((recipe)=> setRecipes([...recipes,recipe])) //updates recipes state so page rerenders with new recipe in the list
            }
        })
        }
    
        function addIngredient(ingredientName,quantity,unit){
            let ingredient = {ingredient:ingredientName, quantity:quantity, unit: unit}
            let updatedIngredients = [...recipeIngredients,ingredient]
            setRecipeIngredients(updatedIngredients)
        }
        console.log(recipeIngredients)
    return (
        <Container>
            <Card>
            <h1>Create New Recipe</h1>
                <Form>
                    
                    <label>Recipe Name</label>
                    <input type="text" onChange={(e)=>setRecipeName(e.target.value)}></input>
                </Form>
            </Card>
            <Card>
                <Form>
                    <h2>Ingredients</h2>
                    <AddIngredient addIngredient={addIngredient}/>
                    <ul>
                    {recipeIngredients.length>0 && 
                        recipeIngredients.map((ingredient)=>{
                            return <li key={ingredient.ingredient}>{ingredient.ingredient} {ingredient.quantity} {ingredient.unit}</li>
                        }) 
                    }
                    </ul>
                </Form>
            </Card>
                <Card>
                    <Form>
                        <h2>Instructions</h2>
                        <label>Cooking Instructions: </label>
                        <textarea type='paragraph_text' cols='80' onChange={(e)=>setInstructions(e.target.value)}></textarea>
                    </Form>
                </Card>
                
            <button type='submit' onClick={createRecipe}>Submit Recipe</button>          
        
        </Container>
    )
}

export default RecipeCreate