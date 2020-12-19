import * as usersPageActionTypes from './../ActionTypes/usersPageActionTypes';

const initialState = {
    users: [],
    paginationPointsToDisplay: 10,
    firstPaginationButtonNum: 1,
    lastPaginationButtonNum: 10,
    usersPerPage: 3,
    usersCount: 0,
    allInBaseUsersCount: 0,
    currentPage: 1,
    isPreloaderActive: false,
    buttonFollowDisabled: []
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case usersPageActionTypes.USERS_PAGE_SET_USERS_INTO_STATE_ACTION_TYPE: {
            let superState = {          // создаем глубокие копии объектов и массивов, чтобы connect в контейнерной компоненте обновлял только изменившиеся данные
                ...state,
                users: action.users
            };
            return superState;
        }
        case usersPageActionTypes.USERS_PAGE_FOLLOW_USER_ACTION_TYPE: {
            let superState = {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: true};
                    } else return user;
                })
            };
            return superState;
        }
        case usersPageActionTypes.USERS_PAGE_UNFOLLOW_USER_ACTION_TYPE: {
            let superState = {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: false};
                    } else return user;
                })
            };
            return superState;
        }
        case usersPageActionTypes.USERS_PAGE_SET_NEW_CURRENT_PAGE_ACTION_TYPE: {
            let superState = {
                ...state,
                currentPage: action.pageNumber,
            }
            return superState;
        }
        case usersPageActionTypes.USERS_PAGE_SET_NEW_USERS_COUNT_ACTION_TYPE: {
            let superState = {
                ...state,
                usersCount: action.usersCount
            }
            return superState;
        }
        case usersPageActionTypes.USERS_PAGE_SET_USERS_COUNT_IN_BASE_ACTION_TYPE: {      // всего юзеров в базе
            let superState = {
                ...state,
                allInBaseUsersCount: action.allInBaseUsersCount
            }
            return superState;
        }
        case usersPageActionTypes.USERS_PAGE_IS_PRELOADER_ACTIVE: {
            let superState = {
                ...state,
                isPreloaderActive: action.isPreloaderActive
            }
            return superState;
        }
        case usersPageActionTypes.USERS_PAGE_BUTTON_FOLLOWED_DISABLED_ACTION_TYPE: {
            let superState = {
                ...state,
                buttonFollowDisabled: action.isButtonFollowClicked 
                    ? [...state.buttonFollowDisabled, action.userId] 
                    : state.buttonFollowDisabled.filter(id => id !== action.userId)
            }
            return superState;
        }
        case usersPageActionTypes.USERS_PAGE_SET_NEW_PAGINATION_FIRST_PAGE_NUM: {
            let superState = {
                ...state,
                firstPaginationButtonNum: action.pageNum
            }
            return superState;
        }
        case usersPageActionTypes.USERS_PAGE_SET_NEW_PAGINATION_LAST_PAGE_NUM: {
            let superState = {
                ...state,
                lastPaginationButtonNum: action.pageNum
            }
            return superState;
        }
        default: return state;
    }
}

export default usersPageReducer;