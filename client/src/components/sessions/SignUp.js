import React, {useState} from 'react';

function SignUp({onLogin}) {
    const[firstName, setFirstName]=useState('')
    const[lastName, setLastName]=useState('')
    const[email, setEmail]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[passwordConfirmation,setPasswordConfirmation]=useState('')

    function onSubmit(e){
    e.preventDefault()
    console.log('yeet')
    fetch('/users',{
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
                }  
            })     
    }

  return (
    <div>
      <h1>Login</h1>
        
        <form onSubmit={onSubmit}> 
            <label>first name: </label>
            <input type='text' onChange={e => setFirstName(e.target.value)}></input>
            <label>last name: </label>
            <input type='text' onChange={e => setLastName(e.target.value)}></input>
            <label>email: </label>
            <input type='text' onChange={e => setEmail(e.target.value)}></input>
            <label>username: </label>
            <input type='text' onChange={e => setUsername(e.target.value)}></input>
            <label>password: </label>
            <input type='text' onChange={e => setPassword(e.target.value)}></input>
            <label>confirm password: </label>
            <input type='text' onChange={e => setPasswordConfirmation(e.target.value)}></input>
            

            <button>login</button>
        </form>
    </div>
  );
}

export default SignUp;