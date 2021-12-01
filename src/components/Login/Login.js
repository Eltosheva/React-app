import React from 'react';
import * as authService from '../../services/AuthService';

const Login = () => {

    const onLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        
        authService.login(email, password)
        .then((authData) => {
            console.log("Logged");
            console.log(authData);
        })
        .catch(err => {
            // TODO: show notification
            console.log(">?"+ err);
        });
    }

    return(
    <div className="login">
        <section className="login-sec">
            <form className="log-form" onSubmit={onLogin} method="POST">
                <label htmlFor="log-form-email"> Email: </label>
                <input id="log-form-email" type="email" name="email"/>
                <label htmlFor="log-form-pass">Password: </label>
                <input id="log-form-pass" type="password" name="password"/>
                <button type="submit"><b>Submit</b></button>
            </form>
        </section>
    </div>
);

}

export default Login;