import { SET_USER_DATA_INTO_STATE, UN_SET_USER_DATA_INTO_STATE } from "../ActionTypes/setUserDataIntoStateActionType";

export const setUserDataIntoState = (email, id, login, isLoggedIn) => ({type: SET_USER_DATA_INTO_STATE, data: {email, id, login, isLoggedIn}});
export const unSetUserDataIntoState = () => ({type: UN_SET_USER_DATA_INTO_STATE});