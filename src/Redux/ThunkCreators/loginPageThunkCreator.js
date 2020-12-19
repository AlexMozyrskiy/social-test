import { stopSubmit } from "redux-form";
import { loginAPI } from "./../../Api/api";
import { preloaderActive } from "./../ActionCreators/preloaderActionCreator"
import { headerIsAuthThunkCreator } from "./headerThunkCreators";
import { setCaptchaIntoStateActionCreator, unSetCaptchaIntoStateActionCreator } from "./../ActionCreators/loginPageActionCreators";

export const loginPageLoginThunkCreator = (login, password, rememberMe, captcha) => async (dispatch) => {

    dispatch(preloaderActive(true));

    if (typeof rememberMe === 'undefined') {
        rememberMe = false;
    }

    const data = await loginAPI.login(login, password, rememberMe, captcha);

    dispatch(preloaderActive(true));

    if (data.resultCode === 0) {
        dispatch(headerIsAuthThunkCreator())
        dispatch(unSetCaptchaIntoStateActionCreator());
    } else if (data.resultCode === 10) {             // captcha
        loginAPI.getCaptcha()
            .then(captchaURL => {
                dispatch(setCaptchaIntoStateActionCreator(captchaURL));
            })
    } else {
        const errorMessge = data.messages.length > 0 ? data.messages[0] : "Some Error";
        dispatch(stopSubmit("login", { _error: errorMessge }));
    }

    dispatch(preloaderActive(false));
}

export const loginPageLogoutThunkCreator = () => async (dispatch) => {

    dispatch(preloaderActive(true));

    const data = await loginAPI.logout();

    dispatch(preloaderActive(false));

    if (data.resultCode === 0) {
        dispatch(headerIsAuthThunkCreator());
    }
}