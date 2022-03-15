import React from "react"
import {NavLink} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'

function NavbarSide(){

    return(
      <div>
          <Navbar className='sidenav'>
                <Nav>
                    <ul>
                    <NavLink className='sidenavLink' to='/'>Home</NavLink>       
                    <NavLink className='sidenavLink' to="/recipes" exact="true">Recipes</NavLink>
                    <NavLink className='sidenavLink' to="/chefs" exact="true">Chefs</NavLink>
                    <NavLink className='sidenavLink' to='/login' exact='true'>Login</NavLink> 
                    </ul>
                </Nav> 
                
            </Navbar>
      </div>  
            
            
            

       
    )
}

export default NavbarSide