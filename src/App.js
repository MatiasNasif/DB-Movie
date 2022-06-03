// import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Search from "./components/Search";



const App = () => {
 

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route path="/"  /> */}
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search/>}  /> 

          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
