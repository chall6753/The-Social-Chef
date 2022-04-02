import React, {useEffect, useState} from 'react';
import {Container, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


function Account({currentUser, setCurrentUser,users, setUsers}) {

const navigate = useNavigate()

function deleteAccount(){
    fetch(`/api/users/${currentUser.id}`,{
        method: 'DELETE'
    })
    .then(res => {
        if (res.ok){
            setCurrentUser('')
            res.json().then(users => setUsers(users))
            navigate('/')
        }
    })
    
}

    return(
        <Container>
            <h1>Welcome {currentUser.first_name}</h1>
            <Button onClick={deleteAccount}>Delete Account</Button>

        </Container>
    )
}

export default Account;