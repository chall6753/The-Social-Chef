import React from "react"
import {NavLink} from "react-router-dom"
import Button from 'react-bootstrap/Button'

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
            <header className='topHeader'>
                <h3 style={{float: "left"}}>Welcome {currentUser.username}</h3>
                <div style={{float: "right"}} data-initials="GC"></div>
                <span style={{float: "right"}} onClick={logout}>Logout</span>
                
            </header>
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