import { dialogsPageSetMessageIntoState } from "./../ActionCreators/dialogsPageActionCreator";


export const dialogsPageSetMessageIntoStateThunkCreator = (message) => (dispatch) => {
    dispatch(dialogsPageSetMessageIntoState(message));
}