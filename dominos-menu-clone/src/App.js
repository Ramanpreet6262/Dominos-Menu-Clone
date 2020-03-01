import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import MenuPage from './Containers/MenuPage/MenuPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <MenuPage />
    </div>
  );
}

export default App;
