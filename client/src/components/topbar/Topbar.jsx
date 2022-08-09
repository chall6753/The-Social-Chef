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
            
                <div className='topbar'>
                    <div className="left">
                            <img src="https://icon-library.com/images/cook-icon/cook-icon-29.jpg" alt="" />
                        <h3>The Social Chef</h3>
                    </div>
                    <div className="right">
                        <ul>
                            <li><div data-initials={currentUser.first_name[0] + currentUser.last_name[0]}></div></li>
                            <li><Link to='/' onClick={logout}>Logout</Link></li>
                            <li><Link to='/account' >Account</Link> </li> 
                        </ul>
                        
                    </div>
                        
                    
                    
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