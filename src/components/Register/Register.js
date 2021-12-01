import React from 'react';

const Register = () => {
return(
    <div className="register">
        <section className="register-sec">
            <form className="reg-form" action="">
                <label htmlFor="reg-form-firstName">First name: </label>
                <input id="reg-form-firstName" type="firstName" name="firstName"/>
                <label htmlFor="reg-form-lastName">Last name: </label>
                <input id="reg-form-lastName" type="lastName" name="lastName"/>
                <label htmlFor="reg-form-email">Email: </label>
                <input id="reg-form-email" type="email" name="email"/>
                <label htmlFor="reg-form-password">Password: </label>
                <input id="reg-form-password" type="password" name="password"/>
                <label htmlFor="reg-form-confirm">Confirm password: </label>
                <input id="reg-form-confirm" type="confirm" name="confirm"/>
                <button type="submit"><b>Submit</b></button>
            </form>
        </section>
    </div>
);

}

export default Register;