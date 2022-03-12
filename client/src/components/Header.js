import React from "react"
import {NavLink} from "react-router-dom"


function Header({currentUser, setCurrentUser}){
    
    function logout(e){
        e.preventDefault()
        console.log('yeet')
        fetch('/logout',{
            method: 'DELETE',
        })
        .then(setCurrentUser(''))       //when session userid is deleted we want to set current user back to default of ''
    }

    if (currentUser !== ''){
        console.log('user is not nil')
        return(
            <div>
                <h3>Welcome {currentUser.username}</h3>
                <button type='button' onClick={logout}>logout</button>
            </div>
        )
    }
    else{
       return(
        <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
        </div>
    ) 
    }
    
}

export default Header