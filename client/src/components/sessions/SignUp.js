import React, {useState} from 'react';
import {Form, Container, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

function SignUp({onLogin}) {
    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName]=useState('')
    const[email, setEmail]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[passwordConfirmation,setPasswordConfirmation]=useState('')

    const navigate = useNavigate()

    function onSubmit(e){
    e.preventDefault()
    
    fetch('/api/users',{
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password_confirmation: passwordConfirmation,
        })})
        .then(
            res =>{
                if(res.ok){
                    res.json().then(user => onLogin(user))
                    navigate('/')
                }  
            })
               
    }

  return (
    <Container>
      <Form className='signup' onSubmit={onSubmit}>  
      <h1>Sign Up!</h1>
        <Form.Group>
          <Form.Label>first name: </Form.Label>
          <Form.Control type='text' onChange={e => setFirstName(e.target.value)}></Form.Control>
        </Form.Group>
          <Form.Label>last name: </Form.Label>
          <Form.Control type='text' onChange={e => setLastName(e.target.value)}></Form.Control>
          <Form.Label>email: </Form.Label>
          <Form.Control type='email' onChange={e => setEmail(e.target.value)}></Form.Control>
          <Form.Label>username: </Form.Label>
          <Form.Control type='text' onChange={e => setUsername(e.target.value)}></Form.Control>
          <Form.Label>password: </Form.Label>
          <Form.Control type='password' onChange={e => setPassword(e.target.value)}></Form.Control>
        <Form.Group>
          <Form.Label>confirm password: </Form.Label>
          <Form.Control type='password' onChange={e => setPasswordConfirmation(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='signup'>sign up</Button>
    </Form>

    </Container>
    
    
  );
}

export default SignUp;