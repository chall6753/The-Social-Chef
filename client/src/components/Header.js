import React from "react"
import {NavLink, useNavigate} from "react-router-dom"
import {Navbar,Container, Nav} from 'react-bootstrap'

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
            <Navbar>
                <Container>
                    <h3 style={{float: "left"}}>Welcome {currentUser.username}</h3>
                    <div style={{float: "right"}} data-initials={currentUser.first_name[0] + currentUser.last_name[0]}></div>
                    <Nav.Link style={{float: "right"}} onClick={logout}>Logout</Nav.Link>
                    <NavLink to='/account' style={{textDecoration: "none"}}>Account</NavLink>
                </Container>
            </Navbar>
            
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