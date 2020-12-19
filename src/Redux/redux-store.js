import {createStore, combineReducers, applyMiddleware} from "redux";
import profilePageReducer from "./Reducers/profilePageReducer";
import dialogsPageReducer from "./Reducers/dialogsPageReducer";
import sideBarReducer from "./Reducers/sideBarReducer";
import usersPageReducer from "./Reducers/usersPageReducer";
import preloaderActiveReducer from "./Reducers/preloaderReducer";
import setUserDataIntoStateReducer from "./Reducers/setUserDataIntoStateReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import initializedAppSuccesReducer from "./Reducers/initializedAppSuccesReducer";
import loginPageReducer from "./Reducers/loginPageReducer";
import { compose } from "redux";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    preloaderActive: preloaderActiveReducer,
    auth: setUserDataIntoStateReducer,
    initializedApp: initializedAppSuccesReducer,
    loginPage: loginPageReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleWare)
  ));                                       // это для использования extension'а redux dev tools в Google Chrome

// const store = createStore(reducers, applyMiddleware(thunkMiddleWare));       // это включим когда будеи деплоить проект а прошлый стор закоментируем

export default store;