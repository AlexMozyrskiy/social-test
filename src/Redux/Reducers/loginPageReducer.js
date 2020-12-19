import { SET_CAPTCHA_INTO_STATE, UN_SET_CAPTCHA_INTO_STATE } from "./../ActionTypes/loginPageActionTypes";

const initialState = {
    isCapthaActive: false,
    captchaURL: ""
}

const loginPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CAPTCHA_INTO_STATE: {
            let superState = {
                ...state,
                isCapthaActive: true,
                captchaURL: action.captchaURL
            }
            return superState;
        }
        case UN_SET_CAPTCHA_INTO_STATE: {
            let superState = {
                ...state,
                isCapthaActive: false,
                captchaURL: ""
            }
            return superState;
        }
        default: return state;
    }
}

export default loginPageReducer;