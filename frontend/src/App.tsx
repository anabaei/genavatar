import React from 'react';
import Button from 'react-bootstrap/Button';
import Sidebar from './components/sidebar';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        
      </div>
      <div className='Main'>
        <div className='side-bar'>
          <Sidebar />
        </div>
        <div className='feed'>
          <Button variant="primary">Primary</Button>
        </div>
    
      </div>
    </div>
  );
}

export default App;
