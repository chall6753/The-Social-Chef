import {useState, useEffect} from 'react';
import RecipeCard from '../recipeCard/RecipeCard.jsx'
import './recipeList.scss'
import SearchBar from '../../searchBar/SearchBar'

function RecipeList({recipes}) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)
  const [search, setSearch] = useState('')

  useEffect(()=>{
    setFilteredRecipes(recipes)
  },[recipes])

  const handleSearch = (e)=> {
    setSearch(e.target.value)
  }

  useEffect(()=>{
    setFilteredRecipes(recipes.filter((recipe)=>{
      if (search ===''){
        return recipe
      }
      else{
        return recipe.name.toLowerCase().includes(search)
      }
    }))
    
  },[search])

  return (
    <div className='recipe-list-container'>
      <div className="top">
        <h1>Recipe List</h1>
        <SearchBar handleSearch={handleSearch}/>
      </div>
      
      <ul>
        {filteredRecipes.slice(0,15).map(recipe => {
          return <RecipeCard key={recipe.id} recipe={recipe}/> 
        })
        }
      </ul>
    </div>
  );
}

export default RecipeList;