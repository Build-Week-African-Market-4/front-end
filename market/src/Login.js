import React from 'react';

function Login(props) {
    const { values, login, change, disabled, errors, } = props;

    const handleChange = event => {
        const { name, value, } = event.target;
        change(name, value);
    }

    const handleLogin = event => {
        event.preventDefault()
        login()
    }

    return (
        <form className = "login container" onSubmit = {handleLogin}>
            <div className = "login inputs">
                <label>Username
                    <input
                        // value = {values.username}
                        onChange= {handleChange}
                        name = 'username'
                        type = 'text'
                    />
                </label>

                <label>Password
                    <input
                        // value = {values.password}
                        onChange = {handleChange}
                        name = 'password'
                        type = 'password'
                    />
                </label>         
            </div>

            <div className = "login submit">
                <button disabled = {disabled}>Login</button>

                <div className = 'errors'>
                    {/* <div>{errors.username}</div>
                    <div>{errors.password}</div> */}
                </div>
            </div>
        </form>
    );
}

export default Login;