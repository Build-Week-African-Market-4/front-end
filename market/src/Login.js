import React from 'react';

function Login(props) {
    const { values, login, input, disabled, errors, } = props;

    const handleChange = event => {
        const { name, value, } = event.target;
        input(name, value);
    }

    const handleLogin = event => {
        event.preventDefault()
        login()
        // axios.post(‘http://tokenurl/api’, props.values)
        // //TBD here:
        // // The correct URL to get the token and the dot notation for the token.
        // .then(res => {
        //     console.log(res);
        //     localStorage.setItem(‘token’, res.data.payload);
        //     history.push(‘/homepage’);
        // //TBD here: Double check the history.push
        // })
        // .get( err => {
        //     console.log(err);
        // })
    }

    return (
        <form className = "login container" onSubmit = {handleLogin}>
            <div className = "login inputs">
                <label>Username
                    <input
                        value = {values.username}
                        onChange= {handleChange}
                        name = 'username'
                        type = 'text'
                    />
                </label>

                <label>Password
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
        </form>
    );
}

export default Login;
