import React from 'react';




function Login({setUsername}) {


  return (
    <div>
      <h1>Login</h1>
        
        <form> 
            <input type='text' onChange={e => setUsername(e.value)}></input>
        </form>
    </div>
  );
}

export default Login;