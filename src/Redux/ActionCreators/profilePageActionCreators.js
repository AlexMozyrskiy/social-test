import {
    ADD_PROFILE_POST, UPDATE_PROFILE_TYPING_TEXTAREA,
    PROFILE_PAGE_SET_USER_INTO_STATE, PROFILE_PAGE_GET_USER_STATUS,
    PROFILE_PAGE_SET_USER_STATUS_INTO_STATE
} from './../ActionTypes/profilePageActionTypes';

export const addProfilePost = (text) => ({ type: ADD_PROFILE_POST, text });
export const updateProfileTypingTextarea = (text) => ({ type: UPDATE_PROFILE_TYPING_TEXTAREA, typingMessage: text });
export const profilePageSetUserIntoState = (user) => ({ type: PROFILE_PAGE_SET_USER_INTO_STATE, user });
export const profilePageGetUserStatus = (id) => ({ type: PROFILE_PAGE_GET_USER_STATUS, id });
export const profilePageSetUserStatusIntoState = (status) => ({ type: PROFILE_PAGE_SET_USER_STATUS_INTO_STATE, status });