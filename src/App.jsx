import React from "react";
import {BrowserRouter,Routes,Route}from "react-router-dom";
import './App.css';
import Register from './Register';
import Log from './Log';
import Home from './Home';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/register" element={<Register/>}/> 
    //     <Route path="/log" element={<Log/>}/> 
    //     <Route path="/register" element={<Home/>}/> 
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Register/>} />
        <Route path="/log" element={<Log/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
