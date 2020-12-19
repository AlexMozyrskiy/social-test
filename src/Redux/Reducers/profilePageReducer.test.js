import { addProfilePost } from "./../ActionCreators/profilePageActionCreators";
import profilePageReducer from "./../Reducers/profilePageReducer";

const initialState = {
    posts: [                           // DB query imitation
        { id: 1, text: "Some Post1" },
        { id: 2, text: "Some Post2" },
        { id: 3, text: "Some Post3" },
        { id: 4, text: "Some Post4" },
        { id: 5, text: "Some Post5" },
        { id: 6, text: "Some Post6" }
    ],
    user: {
        id: null,
        fullName: "",
        aboutMe: "",
        lookingForAJob: "",
        photos: {
            small: "",
            large: ""
        }
    },
    typingMessage: '',
    status: "",
    isPreloaderActive: false
};

const postBody = "testing";

it("after add post length array posts should be increment", () => {
    // 1. test data
    let action = addProfilePost(postBody);

    // 2. action
    let newState = profilePageReducer(initialState, action);

    // 3. expectation
    expect(newState.posts.length).toBe(initialState.posts.length + 1);
});

it("after adding new post in array last post in state.posts", () => {
    // 1. test data
    let action = addProfilePost(postBody);

    // 2. action
    let newState = profilePageReducer(initialState, action);

    // 3. expectation
    expect(newState.posts[newState.posts.length - 1].text).toBe(postBody);
});