import {ADD_DIALOGS_POST, UPDATE_DIALOGS_TYPING_TEXTAREA} from './../ActionTypes/dialogsPageActionTypes';

let initialState = {
    users: [                              // DB query imitation
        { id: 1, name: "Alexey" },
        { id: 2, name: "Tania" },
        { id: 3, name: "Ilia" },
        { id: 4, name: "Galina" },
        { id: 5, name: "Vladimir" },
        { id: 6, name: "Andrey" }
    ],
    messages: [                           // DB query imitation
        { id: 1, text: "Hi" },
        { id: 2, text: "How are you" },
        { id: 3, text: "ok thanks" },
        { id: 4, text: "where are you" },
        { id: 5, text: "i'm here" },
        { id: 6, text: "buy" }
    ],
    typingMessage: ''
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOGS_POST: {
            let superState = {          // создаем глубокие копии объектов и массивов, чтобы connect в контейнерной компоненте обновлял только изменившиеся данные
                ...state,
                messages: [...state.messages, { id: 6, text: action.message }],
            };
            return superState;
        }
        case UPDATE_DIALOGS_TYPING_TEXTAREA: {
            let superState = {
                ...state,
                typingMessage: action.typingMessage
            }
            return superState;
        };
        default: return state;
    }
};

export default dialogsPageReducer;