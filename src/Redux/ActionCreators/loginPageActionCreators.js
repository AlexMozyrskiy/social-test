import { SET_CAPTCHA_INTO_STATE, UN_SET_CAPTCHA_INTO_STATE } from './../ActionTypes/loginPageActionTypes';

export const setCaptchaIntoStateActionCreator = (captchaURL) => ({ type: SET_CAPTCHA_INTO_STATE, isActive: true, captchaURL });
export const unSetCaptchaIntoStateActionCreator = () => ({ type: UN_SET_CAPTCHA_INTO_STATE, isActive: false });
