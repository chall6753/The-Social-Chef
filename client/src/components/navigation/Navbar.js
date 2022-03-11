import React from "react"
import {NavLink} from "react-router-dom"


function Navbar(){

    return(
        <div>
            <NavLink to="/" exact="true">Home</NavLink>
            <NavLink to="/recipes" exact="true">Recipes</NavLink>
            <NavLink to="/chefs" exact="true">Chefs</NavLink>
            <NavLink to='/login' exact='true'>Login</NavLink>
            

        </div>
    )
}

export default Navbar