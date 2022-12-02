import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import './App.css';
import './pages/Home';
import './pages/AddEdit';
import './pages/View';
import Home from './pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
       <div className="App">
          <ToastContainer position='top-center'/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
