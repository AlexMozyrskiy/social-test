import { IS_PRELOADER_ACTIVE } from "./../ActionTypes/preloaderActionType";

const initialState = {
    isPreloaderActive: false
}

const preloaderActiveReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_PRELOADER_ACTIVE: {
            let superState = {
                ...state,
                isPreloaderActive: action.isActive
            }
            return superState;
        }
        default: return state;
    }
}

export default preloaderActiveReducer;