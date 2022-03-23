import React, {useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import '../App.css';
import Home from './Home'
import NavbarSide from './navigation/NavbarSide';
import Header from './Header'
import Login from './sessions/Login'
import RecipeList from './recipes/RecipeList'
import RecipeDetail from './recipes/RecipeDetail'
import ChefList from './users/ChefList'
import ChefDetail from './users/ChefDetail'
import SignUp from './sessions/SignUp'
import RecipeCreate from './recipes/RecipeCreate'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row, Col} from 'react-bootstrap'

function App() {
  const [users, setUsers]=useState([])
  const [recipes, setRecipes]=useState([])
  const [currentUser, setCurrentUser] = useState('')
  const navigate = useNavigate()

  useEffect(() =>{
    fetch("/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    .then(()=>fetch("/recipes"))
    .then(res => res.json())
    .then(data=>setRecipes(data))
  },[])

  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if (res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])
  
  function handleDeleteRecipe(e,recipeId){
    e.preventDefault()
    fetch(`/recipes/${recipeId}`,{
      method: 'DELETE',
    })
    .then(res=>{
      if (res.ok){
        setRecipes(recipes.filter(r=> r.id != recipeId)) //r.id of type number while recipeId type string 
        navigate('/recipes')
      }
    })
  }

  return (
    <div className="main">
      <Container>
        <Row>
          <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Row> 
      </Container>
      
      <Container margin='10px'>
        <Row>
          <Col lg={3}>
          <NavbarSide currentUser={currentUser}/>
        </Col>
        <Col lg={true}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recipes' element={<RecipeList recipes={recipes}/>}/>
            <Route path='/recipes/:id' element={<RecipeDetail currentUser={currentUser} handleDeleteRecipe={handleDeleteRecipe}/>}/>
            <Route path='/chefs' element={<ChefList users={users}/>}/>
            <Route path='/chefs/:id' element={<ChefDetail/>}/>
            <Route path='/login' element={<Login onLogin={setCurrentUser}/>}/>
            <Route path='/signup' element={<SignUp onLogin={setCurrentUser}/>}/>
            <Route path='/recipes/create' element={<RecipeCreate recipes ={recipes} setRecipes={setRecipes}/>}/>
          </Routes>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
