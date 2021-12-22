import React from 'react';

import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)   
            .then(authData => {
                login(authData);
                
                navigate('/home');
            });
    }
return(
    <div className="register">
        <section className="register-sec">
            <form className="reg-form" method="POST" onSubmit={registerSubmitHandler}>
                <label htmlFor="reg-form-firstName">First name: </label>
                <input id="reg-form-firstName" type="firstName" name="firstName"/>
                <label htmlFor="reg-form-lastName">Last name: </label>
                <input id="reg-form-lastName" type="lastName" name="lastName"/>
                <label htmlFor="reg-form-email">Email: </label>
                <input id="reg-form-email" type="email" name="email"/>
                <label htmlFor="reg-form-password">Password: </label>
                <input id="reg-form-password" type="password" name="password"/>
                <label htmlFor="reg-form-confirm">Confirm password: </label>
                <input id="reg-form-confirm" type="password" name="confirm"/>
                <button type="submit"><b>Submit</b></button>
            </form>
        </section>
    </div>
);

}

export default Register;