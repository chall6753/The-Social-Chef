import React from "react"
import {NavLink} from "react-router-dom"


function Header(){

    return(
        <div>
            <NavLink to="/recipes" exact="true">Recipes</NavLink>
            <NavLink to="/chefs" exact="true">Chefs</NavLink>
            

        </div>
    )
}

export default Header