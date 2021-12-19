import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import * as authService from '../../services/authService';

const Login = () => {
    const {login} = useAuthContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        
        authService.login(email,password)
            .then((authData) => {
                login(authData); 
                //addNotification('You logged in successfully', types.success);
                navigate('/home');
            })        
            .catch(err => {
                //addNotification('Invalid email or password', types.error);
                <p>err</p>
                console.log(err);
        });
    }
    
    return(
        <div className="login">
            <section className="login-sec">
                <form className="log-form" onSubmit={onLoginHandler} method="POST">
                    <label htmlFor="log-form-email">Email:</label>
                    <input id="log-form-email" type="email" name="email"/>
                    <label htmlFor="log-form-pass">Password:</label>
                    <input id="log-form-pass" type="password" name="password"/>
                    <button type="submit"><b>Submit</b></button>
                </form>
            </section>
        </div>
    );

}

export default Login;