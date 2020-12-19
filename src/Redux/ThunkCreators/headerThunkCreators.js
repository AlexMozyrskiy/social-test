import { headerAPI } from "./../../Api/api";
import { loginAPI } from "./../../Api/api";
import { setUserDataIntoState, unSetUserDataIntoState } from "./../ActionCreators/setUserDataIntoStateActionCreator";
import { preloaderActive } from "./../../Redux/ActionCreators/preloaderActionCreator";


export const headerIsAuthThunkCreator = () => async (dispatch) => {
    dispatch(preloaderActive(true));

    const data = await headerAPI.isAuth();

    dispatch(preloaderActive(false));

    if (data.resultCode === 0) {
        const { email, id, login } = data.data;
        const isLoggedIn = true;
        dispatch(setUserDataIntoState(email, id, login, isLoggedIn));
    }
}

export const headerIsLogoutThunkCreator = () => async (dispatch) => {
    dispatch(preloaderActive(true));

    const data = await loginAPI.logout();
    
    dispatch(preloaderActive(false));

    if (data.resultCode === 0) {
        dispatch(unSetUserDataIntoState());
    }
}