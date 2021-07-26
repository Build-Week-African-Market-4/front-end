import React, { useState, useEffect } from 'react';
import './App.css';
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
  const {logins, setLogins} = useState([])
  const {loginValues, setLoginValues} = useState(initialLoginValues);
  const {loginErrors, setLoginErrors} = useState(initialLoginErrors);
  const [disabled, setDisabled] = useState(true);

  const postLogin = newLogin => {
    axios.post("#", newLogin)
      .then(response => {
          setLogins(response.data);
      })
      .catch(error => {
          console.log(error);
      })
      .finally(() => {
          setLoginValues(initialLoginValues);
      })
  }

  const submitLogin = () => {
      const newLogin = {
          username: loginValues.username.trim(),
          password: loginValues.password.trim(),
      }
      postLogin(newLogin);
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setLoginValues({
      ...loginValues,
      [name]: value
    })
  }

  useEffect(() => {
    formSchema.isValid(loginValues).then(valid => setDisabled(!valid))
  }, [loginValues])

  const validate = (name, value) => {
    reach(formSchema, name)
      .validate(value)
      .then(() => setLoginErrors({ ...loginErrors, [name]: '' }))
      .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0]}))
  }

  return (
    <div className = "marketApp">      
      <Route path = '/login'>
          <Login
              values = {loginValues}
              login = {submitLogin}
              input = {inputChange}
              disabled = {disabled}
              errors = {loginErrors}
          />
      </Route>
    </div>
  );
}

export default App;
