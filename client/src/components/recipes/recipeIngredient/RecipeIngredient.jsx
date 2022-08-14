import React from 'react'

function RecipeIngredient() {
  return (
    <div className="recipe-ingredient">
        <ul>
            {recipeIngredients.length>0 && 
                recipeIngredients.map((ingredient)=>{
                    return <li key={ingredient.ingredient}>{ingredient.ingredient} {ingredient.quantity} {ingredient.unit}</li>
                }) 
            }
            </ul>
    </div>
  )
}

export default RecipeIngredient