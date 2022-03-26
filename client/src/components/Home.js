import React, {useEffect, useState} from 'react';
import RecipeCard from './recipes/RecipeCard'
import ChefCard from './users/ChefCard'
import {Container} from 'react-bootstrap'
import '../App.css';

function Home({currentUser, recipes, users}) {
  const [userRecipes,setUserRecipes]= useState([])
  const [randRecipes, setRandRecipes]=useState('')
  const [randChefs, setRandChefs] = useState('')

  useEffect(() => setUserRecipes(recipes.filter(r => r.user.id == currentUser.id)),[currentUser,recipes])

  useEffect(
    function handleRandRecipes(){
      let r = []
      for (let i=0; i<4; i++){
        r.push(recipes[Math.floor(Math.random() * recipes.length)])
      }
      setRandRecipes(r)
      let u =[]
      for (let i=0; i<4; i++){
        u.push(users[Math.floor(Math.random() * users.length)])
      }
      setRandChefs(u)
    }
  ,[recipes, users])

  if (currentUser != ''){  //if a user is logged in show their recipes on the home page
    return (
      <div>
        <h1>The Social Chef!</h1>
          <h3>My Recipes</h3>
          <ul>
            {userRecipes.map(r => <RecipeCard recipe={r}/>)}
          </ul>
      </div>
    );
  }
  else{ //if no one logged in render 4 random recipes and 4 random chefs
    return (
      <Container>
        <Container>
          <h1>The Social Chef!</h1>
          <h3>Start sharing and exploring recipes by signing up or logging in!</h3>
        </Container>
        <Container>
          <h2>Check out these recipes!</h2>
          <ul>
            {randRecipes != ''  ? randRecipes.map(r => <RecipeCard recipe={r}/>) : null}
          </ul>
          <h2>Some of the Chefs!</h2>
          <ul>
            {randChefs != ''  ? randChefs.map(u => <ChefCard user={u}/>) : null}
          </ul>
        </Container>
      </Container>
    );
  }
}

export default Home;