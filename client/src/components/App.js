import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import '../App.css';
import Home from './Home'
import Navbar from './navigation/Navbar';
import Header from './Header'
import Login from './sessions/Login'
import RecipeList from './recipes/RecipeList'
import RecipeDetail from './recipes/RecipeDetail'
import ChefList from './users/ChefList'
import ChefDetail from './users/ChefDetail'



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
  },[])

  useEffect(()=>{
    fetch('/auth')
    .then(res => {
      if (res.ok){
        res.json().then(user => setCurrentUser(user))
      }
    })
  },[])

  console.log(recipes)

  return (
    <div className="main">
      <header> 
        <Header/>
      </header>
      
      <div className="sidenav">
        <Navbar/>
      </div>
      <div className="body"> 
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/recipes' element={<RecipeList recipes={recipes}/>}/>
           <Route path='/recipes/:id' element={<RecipeDetail/>}/>
           <Route path='/chefs' element={<ChefList/>}/>
           <Route path='/chef/:id' element={<ChefDetail/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
