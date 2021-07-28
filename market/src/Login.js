import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: center;
`

const Form = styled.form`
    text-align: center;
    width: 20%;
`

function Login(props) {
    const { values, login, input, disabled, errors, } = props;

    const handleChange = event => {
        const { name, value, } = event.target;
        input(name, value);
    }

    const handleLogin = event => {
        event.preventDefault()
        login()
        axios.post("https://african-marketplace-lambda.herokuapp.com/api/auth/login", {username: values.username, password: values.password})
        .then(res => {
             console.log(res);
             localStorage.setItem('token', res.data.payload);
             window.location.href='/';
         })
         .get( err => {
             console.log(err);
         })
    };

    return (
        <Wrapper>
        <Form className = "login container" onSubmit = {handleLogin}>
            <div className = "login inputs">
                <label>Username: &nbsp;
                    <input
                        value = {values.username}
                        onChange= {handleChange}
                        name = 'username'
                        type = 'text'
                    />
                </label>

                <label>Password: &nbsp;
                    <input
                        value = {values.password}
                        onChange = {handleChange}
                        name = 'password'
                        type = 'password'
                    />
                </label>         
            </div>

            <div className = "login submit">
                <button disabled = {disabled}>Login</button>

                <div className = 'errors'>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
        </Form></Wrapper>
    );
}

export default Login;
