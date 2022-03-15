import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
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
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row, Col} from 'react-bootstrap'

function App() {
  const [users, setUsers]=useState([])
  const [recipes, setRecipes]=useState([])
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() =>{
    fetch("/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    .then(()=>fetch("/recipes"))
    .then(res => res.json())
    .then(data=>setRecipes(data))
    console.log('fetch')
  },[])

  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if (res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
    
    console.log('auth')
  },[])
  
  console.log(currentUser)
  console.log(users)
  console.log(recipes)
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
          <NavbarSide/>
        </Col>
        <Col lg={true}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/recipes' element={<RecipeList recipes={recipes}/>}/>
            <Route path='/recipes/:id' element={<RecipeDetail/>}/>
            <Route path='/chefs' element={<ChefList users={users}/>}/>
            <Route path='/chef/:id' element={<ChefDetail/>}/>
            <Route path='/login' element={<Login onLogin={setCurrentUser}/>}/>
            <Route path='/signup' element={<SignUp onLogin={setCurrentUser}/>}/>
          </Routes>
          </Col>
        </Row>
        
          
        
        
        
      </Container>
      <Container> 
        
        
      </Container>
    </div>
  );
}

export default App;
