import { INITIALIZED_APP } from '../ActionTypes/initializedAppActionType';

const initialState = {
    isInizializeApp: false
}

const initializedAppSuccesReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_APP: {
            let superState = {
                ...state,
                isInizializeApp: true
            }
            return superState;
        }
        default: return state;
    }
}

export default initializedAppSuccesReducer;