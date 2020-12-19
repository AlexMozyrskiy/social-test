import { profilePageAPI } from "./../../Api/api";
import { preloaderActive } from "./../../Redux/ActionCreators/preloaderActionCreator";
import { profilePageSetUserIntoState, profilePageSetUserStatusIntoState, addProfilePost } from "./../../Redux/ActionCreators/profilePageActionCreators";

export const profilePageGetUserThunkCreator = (userIdFromUrl) => async (dispatch) => {
    dispatch(preloaderActive(true));

    const data = await profilePageAPI.getUserForProfilePage(userIdFromUrl);

    dispatch(preloaderActive(false));

    dispatch(profilePageSetUserIntoState(data));
}

export const profilePageGetUserStatusThunkCreator = (userIdFromUrl) => async (dispatch) => {
    dispatch(preloaderActive(true));

    const data = await profilePageAPI.getUserStatus(userIdFromUrl);

    dispatch(preloaderActive(false));

    dispatch(profilePageSetUserStatusIntoState(data));
}

export const profilePageUpdateUserStatusThunkCreator = (status) => async (dispatch) => {
    dispatch(preloaderActive(true));

    await profilePageAPI.updateStatus(status);

    dispatch(preloaderActive(false));

    dispatch(profilePageSetUserStatusIntoState(status));
}

export const profilePageSetMessageIntoStateThunkCreator = (message) => (dispatch) => {
    dispatch(addProfilePost(message));
}