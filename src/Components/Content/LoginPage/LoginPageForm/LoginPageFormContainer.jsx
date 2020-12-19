import React from "react";
import LoginPage from "./../LoginPage";
import { loginPageLoginThunkCreator } from "./../../../../Redux/ThunkCreators/loginPageThunkCreator";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginPageFormContainer extends React.Component {

    onSubmit(formData) {
        this.props.loginPageLoginThunkCreator(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }

    render() {
        if(this.props.isLoggedIn) return <Redirect to={`/profile/${this.props.myId}`} />
        return (
            <LoginPage
                onSubmit={this.onSubmit.bind(this)}
                {...this.props}
            />
        );
    }
}



const mapStateToProps = (state) => {
    return {
        loginForm: state.form.login,
        isLoggedIn: state.auth.isLoggedIn,
        myId: state.auth.id,
        isCaptchaActive: state.loginPage.isCapthaActive,
        captchaURL: state.loginPage.captchaURL
    }
}

const mapDispatchToProps = {
    loginPageLoginThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageFormContainer);