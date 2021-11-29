const Register = () => {
return(
    <div class="register">
        <section class="register-sec">
            <form class="reg-form" action="">
                <label for="reg-form-firstName">First name: </label>
                <input id="reg-form-firstName" type="firstName" name="firstName"/>
                <label for="reg-form-lastName">Last name: </label>
                <input id="reg-form-lastName" type="lastName" name="lastName"/>
                <label for="reg-form-email">Email: </label>
                <input id="reg-form-email" type="email" name="email"/>
                <label for="reg-form-password">Password: </label>
                <input id="reg-form-password" type="password" name="password"/>
                <label for="reg-form-confirm">Confirm password: </label>
                <input id="reg-form-confirm" type="confirm" name="confirm"/>
                <button type="submit"><b>Submit</b></button>
            </form>
        </section>
    </div>
);

}

export default Register;