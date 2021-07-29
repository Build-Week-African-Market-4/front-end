import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home'
import Login from './Login';
import ItemForm from './ItemForm';
import ItemsList from './ItemsList'
import Header from './Header'
import Footer from './Footer'
import formSchema from './validation/formSchema';
import schema from './validation/schema';
import axios from 'axios';
import { reach } from 'yup';
import { Route } from 'react-router-dom';
import * as yup from 'yup'

const initialLoginValues = {
  username: '',
  password: '',
}

const initialLoginErrors = {
  username: '',
  password: '',
}

const initialItemValues = {
  image: '',
  title: '',
  price: '',
}

const initialItemErrors = {
  image: '',
  title: '',
  price: '',
}

const initialItems = []
const initialDisabled = true

function App() {
  //States
  const [login, setLogin] = useState(null)
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);

  const [items, setItems] = useState(initialItems)
  const [itemValues, setItemValues] = useState(initialItemValues);
  const [itemErrors, setItemErrors] = useState(initialItemErrors);

  const [sortType, setSortType] = useState('');

  const [disabled, setDisabled] = useState(initialDisabled);
  
  //---------- Login Functions ----------  
  //Posts new login
  const postLogin = newLogin => {
    axios.post("http://tokenurl/api/login", newLogin)
      .then(response => {
          setLogin(response.data);
          //localStorage.setItem('token', response.data.payload)
      })
      .catch(error => {
          console.log(error);
      })
      .finally(() => {
          setLoginValues(initialLoginValues);
      })
  }

  //Submit new login credentials
  const submitLogin = () => {
      const newLogin = {
          username: loginValues.username.trim(),
          password: loginValues.password.trim(),
      }
      postLogin(newLogin);
  }

  //Validate and set new login input changes
  const loginInputChange = (name, value) => {
    // validate(name, value)
    setLoginValues({
      ...loginValues,
      [name]: value
    })
  }

  //Check validity of login values every time a login value is changed
  useEffect(() => {
    formSchema.isValid(loginValues).then(valid => setDisabled(!valid))
  }, [loginValues])


  //Validate login values and display login errors if not valid
  const validate = (name, value) => {
    reach(formSchema, name)
      .validate(value)
      .then(() => setLoginErrors({ ...loginErrors, [name]: '' }))
      .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0]}))
  }

//---------- Submit Item Functions ---------- 
   //Get item data
   const getItems = () => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setItems(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  //Posts new item to item listings
  const postItem = newItem => {
    axios.post("https://fakestoreapi.com/products", newItem)
      .then(response => {
          setItems([...items,response.data]);
          console.log([...items,response.data])
      })
      .catch(error => {
          console.log(error);
      })
      .finally(() => {
          setItemValues(initialItemValues);
      })
  }

  //Submit new item values
  const submitItem = () => {
    const newItem = {
        image: itemValues.image.trim(),
        title: itemValues.title.trim(),
        price: itemValues.price.trim(),
        
    }
    postItem(newItem);
  }

  //Validate and set new item input changes
  const itemInputChange = (title, value) => {
    validateItem(title, value)
    setItemValues({
      ...itemValues,
      [title]: value
    })
  }

  //Get items from API once
  useEffect(() => {
    getItems()
  },[])

  //Check validity of item values every time a item value is changed
  useEffect(() => {
    formSchema.isValid(itemValues).then(valid => setDisabled(!valid))
  }, [itemValues])

  //Validate item values and display item errors if not valid
  const validateItem = (title, value) => {
      yup
      .reach(schema, title)
      .validate(value)
      .then(() => setItemErrors({ ...itemErrors, [title]: '' }))
      .catch(err => setItemErrors({ ...itemErrors, [title]: err.errors[0]}))
  }

  return (
    <div className = "marketApp">
      <Header items={items}/>

      <Route exact path = '/'>
          <Home items = {items} />
      </Route>    
      <Route path='/items-list'>
        <ItemsList 
            items = {items}
             // sort = {sortItemsBy}
             sortType = {sortType}
             setSortType = {setSortType}
             setItems = {setItems}
        />
      </Route>
      <Route path = '/login'>
          <Login
              values = {loginValues}
              login = {submitLogin}
              input = {loginInputChange}
              disabled = {disabled}
              errors = {loginErrors}
          />
      </Route>

      <Route path = '/listItem'>
          <ItemForm
              values = {itemValues}
              submit = {submitItem}
              change = {itemInputChange}
              disabled = {disabled}
              errors = {itemErrors}
          />
      </Route>
      <Footer />
    </div>
  );
}

export default App;

