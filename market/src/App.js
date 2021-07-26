import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
function App() {
  const [items, setItems] = useState([])
  return (
  
    <Route exact path='/'>
    <Home items={items} />
    </Route>
    
  );
}

export default App;
