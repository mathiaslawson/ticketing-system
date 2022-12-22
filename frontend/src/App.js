import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
     <>
            <Router>
              <div className='container'>
                <Header />
                <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/login" element={<Login />} />
                     <Route path="/register" element={<Register />} />
                </Routes>
              </div>
            </Router>
     </>
  )
}

export default App;
