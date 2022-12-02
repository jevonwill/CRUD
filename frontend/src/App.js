import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import './App.css';
import './pages/home';
import './pages/addEdit';
import './pages/view';
import home from './pages/home';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
          <ToastContainer position='top-center'/>
          <Routes>
            <Route path='/' element={<home/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
