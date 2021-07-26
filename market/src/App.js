import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Login from './Login';
import formSchema from './formSchema';
import axios from 'axios';
import { reach } from 'yup';

const initialLoginValues = {
  username: '',
  password: '',
}

const initialLoginErrors = {
  username: '',
  password: '',
}

function App() {
  const [items, setItems] = useState([])
  return (
  
    <Route exact path='/'>
    <Home items={items} />
    </Route>
    
  );
}

export default App;
