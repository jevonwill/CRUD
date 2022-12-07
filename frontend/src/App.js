import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import './App.css';
import './pages/Home';
import './pages/AddEdit';
import './pages/View';
import Home from './pages/Home.jsx'
import AddEdit from './pages/AddEdit';
import View from './pages/View';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
          <ToastContainer position='top-center'/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/edit/:id' element={<AddEdit/>}/>
            <Route path='view/:id' element={<View/>}/>
            <Route path='add' element={<AddEdit/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
