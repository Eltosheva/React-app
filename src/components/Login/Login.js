const Login = () => {

    const onLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        console.log(formData.get('email'));
    }

    return(
    <div class="login">
        <section class="login-sec">
            <form class="log-form" action="">
                <label for="log-form-email"> Email: </label>
                <input id="log-form-email" type="email" name="email"/>
                <label for="log-form-pass">Password: </label>
                <input id="log-form-pass" type="password" name="password"/>
                <button type="submit"><b>Submit</b></button>
            </form>
        </section>
    </div>
);

}

export default Login;