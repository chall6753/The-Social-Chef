import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Comment from './Comment'
import AddComment from './AddComment'

function RecipeDetail({currentUser, handleDeleteRecipe}) {
  const[recipe,setRecipe]=useState('')
  const[showForm, setShowForm]=useState(0)
  const[comments,setComments]=useState([])
  
  let recipeId = useParams().id
  
  useEffect(()=>{
    fetch(`/api/recipes/${recipeId}`)
    .then((res => res.json()))
    .then((data)=> {
      setRecipe(data)
      setComments(data.comments)
    } )
  },[])
  
  function toggleCommentForm(){
    setShowForm(!showForm)
  }
  function handleAddComment(e,comment,rating){
    e.preventDefault()
    fetch('/api/comments',{
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify({
        recipe_id: recipe.id,
        user_id: currentUser.id,
        comment: comment,
        rating: rating
      }) 
    })
    .then(res=>{
      if(res.ok) {
        res.json().then(res=> setComments([res,...comments]))
      }})
    toggleCommentForm() //hides comment form after they submit their comment
    }
  
  //show delete and edit buttons if user logged in was the creator of the recipe
  function showDeleteEdit(){
    if (recipe.user.username == currentUser.username){
      return <Button onClick={(e) => handleDeleteRecipe(e,recipeId)}>Delete</Button>
    }
  }
  
  if(recipe != ''){
    return (
    <div>
      <h1>{recipe.name}</h1>
      <h3>By: {recipe.user.username} </h3>
                <h3>Ingredients</h3>
                    <ul>
                        {recipe.recipe_ingredients.map((ingredient)=>{
                            return <li key={ingredient.id}>{ingredient.quantity + ' ' + ingredient.unit + ' ' + ingredient.ingredient.name}</li>
                        })}
                    </ul>
                <h3>Cooking Instructions</h3>
                <p>{recipe.instructions}</p>
                {showDeleteEdit()}
                <h3>Comments</h3>
                {currentUser != '' ? <button type='button' onClick={toggleCommentForm}>Add Comment</button> : ""}
                {showForm == 1 ? <AddComment recipe={recipe} currentUser={currentUser} handleAddComment={handleAddComment}/>:null}
                        
                <ul>
                  {comments.map((comment) => {
                    return <Comment comment={comment}/>
                  })}
                </ul>
        
    </div>
  );
  }
  else{return <p>loading...</p>}
  
}

export default RecipeDetail;