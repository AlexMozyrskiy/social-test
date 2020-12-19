import { headerIsAuthThunkCreator } from "./headerThunkCreators";
import { initializedAppActionCreator } from "./../ActionCreators/initializedAppActionCreator";



export const initializedAppThunkCreator = () => (dispatch) => {
    let dispatchResult = dispatch(headerIsAuthThunkCreator());

    Promise.all([dispatchResult])
        .then(() => {
            dispatch(initializedAppActionCreator());
        });
}