import React from 'react';
import Button from 'react-bootstrap/Button';
import Sidebar from './components/sidebar';
import Home from './components/home'
import Create from './components/create'
import Search from './components/search'
import Header from './components/header';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Header />
      </div>
      <div className='Main'>
        <div>
          <Sidebar />
        </div>
        <div className='feed'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
