import {
    ADD_PROFILE_POST, UPDATE_PROFILE_TYPING_TEXTAREA,
    PROFILE_PAGE_SET_USER_INTO_STATE, PROFILE_PAGE_IS_PRELOADER_ACTIVE,
    PROFILE_PAGE_SET_USER_STATUS_INTO_STATE
} from './../ActionTypes/profilePageActionTypes';

const initialState = {
    posts: [                           // DB query imitation
        { id: 1, text: "Some Post1" },
        { id: 2, text: "Some Post2" },
        { id: 3, text: "Some Post3" },
        { id: 4, text: "Some Post4" },
        { id: 5, text: "Some Post5" },
        { id: 6, text: "Some Post6" }
    ],
    user: {
        id: null,
        fullName: "",
        aboutMe: "",
        lookingForAJob: "",
        photos: {
            small: "",
            large: ""
        }
    },
    typingMessage: '',
    status: "",
    isPreloaderActive: false
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE_POST: {
            let superState = {          // создаем глубокие копии объектов и массивов, чтобы connect в контейнерной компоненте обновлял только изменившиеся данные
                ...state,
                posts: [...state.posts, { id: 6, text: action.text }],
                typingMessage: ""
            };
            return superState;
        }
        case UPDATE_PROFILE_TYPING_TEXTAREA: {
            let superState = {
                ...state,
                typingMessage: action.typingMessage
            };
            return superState;
        }
        case PROFILE_PAGE_SET_USER_INTO_STATE: {
            let superState = {
                ...state,
                user: action.user
                    // name: action.user.fullName,
                    // aboutMe: action.user.aboutMe,
                    // lookingForAJob: action.user.lookingForAJob
            }
            return superState;
        }
        case PROFILE_PAGE_IS_PRELOADER_ACTIVE: {
            let superState = {
                ...state,
                isPreloaderActive: action.isPreloaderActive
            }
            return superState;
        }
        case PROFILE_PAGE_SET_USER_STATUS_INTO_STATE: {
            let superState = {
                ...state,
                status: action.status
            }
            return superState;
        }
        default: return state;
    }
}

export default profilePageReducer;