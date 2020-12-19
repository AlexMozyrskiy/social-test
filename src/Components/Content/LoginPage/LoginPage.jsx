import React from "react"
import LoginReduxForm from "./LoginPageForm/LoginPageReduxForm";

const LoginPage = (props) => {
    return (
        <div className="login-page">
            <h2>Login</h2>

            <LoginReduxForm
                {...props}
            />
        </div>
    );
}

export default LoginPage;