import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        
        authService.login(email, password)
        .then((authData) => {
            login(authData); 

            navigate('/home');
        })        .catch(err => {
            // TODO: show notification
            console.log(err);
        });
    }
    
    return(
        <div className="login">
            <section className="login-sec">
                <form className="log-form" onSubmit={onLoginHandler} method="POST">
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