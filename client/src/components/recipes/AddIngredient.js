import React, {useState} from "react";

function AddIngredient({addIngredient}){
    const[ingredientName,setIngredientName]=useState('')
    const[quantity,setQuantity]=useState('')
    const[unit,setUnit]=useState('')
    
    
    function handleAddIngredient(e){
        e.preventDefault()
        addIngredient(ingredientName, quantity, unit)
    }
    
    return(
        <div>
            
                <label>Ingredient: </label>
                <input type="text" onChange={(e)=>setIngredientName(e.target.value)}></input>
                <label>Quantity:</label>
                <input type="text" onChange={(e)=>setQuantity(e.target.value)}></input>
                <label>Unit:</label>
                <input type='text' onChange={(e)=>setUnit(e.target.value)}></input>
                <button type="submit" onClick={handleAddIngredient}>Add Ingredient</button>
                
        </div>
    );
}

export default AddIngredient;