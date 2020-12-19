import {ADD_DIALOGS_POST, UPDATE_DIALOGS_TYPING_TEXTAREA} from './../ActionTypes/dialogsPageActionTypes';

export const dialogsPageSetMessageIntoState = (message) => ({ type: ADD_DIALOGS_POST, message });
export const updateDialogsTypingTextareaActionCreator = (text) => ({ type: UPDATE_DIALOGS_TYPING_TEXTAREA, typingMessage: text });