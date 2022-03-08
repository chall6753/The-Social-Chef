import React from 'react';
import {Routes, Route} from 'react-router-dom'
import '../App.css';
import Home from './Home'
import Navbar from './Navbar';


function App() {
  return (
    <div className="main">
      <header> 
        <Header/>
      </header>
      
      <div className="sidenav">
        <Navbar/>
      </div>
      <div className="body"> 
        <Routes>
           <Route exact path='/' element={<Home/>}/>
           
        </Routes>
      </div>
    </div>
  );
}

export default App;
