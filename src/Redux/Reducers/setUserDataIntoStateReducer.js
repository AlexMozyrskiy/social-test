import { SET_USER_DATA_INTO_STATE, UN_SET_USER_DATA_INTO_STATE } from './../ActionTypes/setUserDataIntoStateActionType';

const initialState = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false
};

const setUserDataIntoStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA_INTO_STATE: {
            let superState = {          // создаем глубокие копии объектов и массивов, чтобы connect в контейнерной компоненте обновлял только изменившиеся данные
                ...state,
                // ...data,
                ...action.data,
            };
            return superState;
        }
        case UN_SET_USER_DATA_INTO_STATE: {
            let superState = {          // создаем глубокие копии объектов и массивов, чтобы connect в контейнерной компоненте обновлял только изменившиеся данные
                ...state,
                login: null,
                email: null,
                isLoggedIn: false
            };
            return superState;
        }
        default: return state;
    }
}

export default setUserDataIntoStateReducer;