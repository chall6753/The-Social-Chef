import React from "react"
import {Link, useNavigate} from "react-router-dom"
import {Nav} from 'react-bootstrap'
import './topbar.scss'

function Header({currentUser, setCurrentUser}){
    const navigate = useNavigate()

    function logout(e){
        e.preventDefault()
        fetch('/api/logout',{
            method: 'DELETE'
        })
        .then(setCurrentUser('')).then(navigate('/'))       //when session userid is deleted we want to set current user back to default of ''
    }

    if (currentUser !== ''){
        return(
            
                <div classname='topbar'>
                    <h3 >Welcome {currentUser.username}</h3>
                    <div data-initials={currentUser.first_name[0] + currentUser.last_name[0]}></div>
                    <Link  onClick={logout}>Logout</Link>
                    <Link to='/account' >Account</Link>
                </div>
            
            
        )
    }
    else{
       return(
        <div className="topbar">
            
                <Link className='link' to='/login'>Login</Link>
                <Link className='link' to='/signup'>Sign Up</Link>
            
            
        </div>
    ) 
    }
    
}

export default Header