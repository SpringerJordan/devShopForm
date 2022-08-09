import React from 'react';
import Login from './components/Login.js';
import './App.css'
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp.js';
import Pricing from './components/Pricing.js';
import BasicTable from './components/BasicTable.js';





function App() {
  return (
    <div className="App">

    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Pricing/>} />
          <Route path="/signUp" exact element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/BasicTable" element={<BasicTable/>} />


          {/* <Route path="/" element={<Login/>} /> */}
        </Routes>
      </BrowserRouter>
    </Container>

    </div>
  );
}
export default App;