import React from 'react';
import {Routes, Route} from 'react-router-dom'
import '../App.css';
import Home from './Home'
import Navbar from './navigation/Navbar';
import Header from './Header'

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
           <Route path='/' element={<Home/>}/>
           
        </Routes>
      </div>
    </div>
  );
}

export default App;
