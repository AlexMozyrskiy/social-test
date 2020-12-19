import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../../../utils/validators/validators";
import InputWithValidate from "../../../common/FormsControls/ChilderenFormsControls/InputWithValidate";

const LoginPageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={InputWithValidate} name="login" type="text" placeholder="Enter your Login" validate={[requiredField]} />
            <Field component={InputWithValidate} name="password" type="password" placeholder="Enter your Password" validate={[requiredField]} />
            <Field component="input" name="rememberMe" type="checkbox" /> remember me
            { props.error && <p className="login-page__error">{ props.error }</p> }
            { props.isCaptchaActive &&
                <div>
                    <img src={props.captchaURL} alt="captcha"></img>
                    <Field component={InputWithValidate} name="captcha" type="text" placeholder="Enter symbols on picture" validate={[requiredField]} />
                </div>
            } 
            <button>Login</button>
        </form>
    );
}

export default 
    reduxForm({
        // a uniq name for the form
        form: "login"
    })
(LoginPageForm);