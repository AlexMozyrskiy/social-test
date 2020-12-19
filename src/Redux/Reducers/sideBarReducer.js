let initialState = {
    myFriends: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Ilia" },
        { id: 3, name: "Tania" }
    ]
};

let sideBarReducer = (state = initialState, action) => {
    return state;
};

export default sideBarReducer;