import React from "react"
import {NavLink} from "react-router-dom"


function Header(){

    return(
        <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>

        </div>
    )
}

export default Header