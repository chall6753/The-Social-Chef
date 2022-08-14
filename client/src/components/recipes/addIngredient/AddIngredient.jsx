import React, {useState} from "react";
import './addIngredient.scss'

function AddIngredient({addIngredient}){
    const[ingredientName,setIngredientName]=useState('')
    const[quantity,setQuantity]=useState('')
    const[unit,setUnit]=useState('')
    
    
    function handleAddIngredient(e){
        e.preventDefault()
        addIngredient(ingredientName, quantity, unit)
    }
    
    return(
        <div className="add-ingredient-container">
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
            
            <button type="submit" onClick={handleAddIngredient}>Add Ingredient</button>   
        </div>
    );
}

export default AddIngredient;