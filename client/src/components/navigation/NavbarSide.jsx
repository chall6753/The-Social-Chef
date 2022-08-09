import React from "react"
import { Link} from 'react-router-dom'
import './navBar.scss' 


function NavbarSide({currentUser}){

    if (currentUser != ''){
        return(
           
                
            <nav className='side-nav'>
                <ul>
                    <Link className='sideLink' to='/'>Home</Link>      
                    <Link className='sideLink' to="/recipes" exact="true">Recipes</Link>   
                    <Link className='sideLink' to="/chefs" exact="true">Chefs</Link>   
                    <Link className='sideLink' to='/recipes/create' exact='true'>Share Recipe</Link> 
                </ul>
                      
                
            </nav>   
                        
                  
                
                  
        )
    }
    else{
        return(
            <nav className='side-nav'>
                <ul>
                    <Link className='sideLink' to='/'>Home</Link>
                    <Link className='sideLink' to="/recipes" exact="true">Recipes</Link>      
                    <Link className='sideLink' to="/chefs" exact="true">Chefs</Link>
                </ul>
                 
            </nav>         
        )
    }
   
}

export default NavbarSide