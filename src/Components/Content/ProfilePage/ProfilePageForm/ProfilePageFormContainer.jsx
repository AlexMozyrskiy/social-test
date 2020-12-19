import React from "react";
import ProfilePageForm from './ProfilePageForm';
import { connect } from "react-redux";
import { profilePageSetMessageIntoStateThunkCreator } from "./../../../../Redux/ThunkCreators/profilePageThunkCreator";

class ProfilePageFormContainer extends React.Component {
    
    onSubmit(formData) {
        this.props.profilePageSetMessageIntoStateThunkCreator(formData.post);
    }

    render() {
        return (
            <ProfilePageForm
                {...this.props}
                onSubmit={this.onSubmit.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // typingMessage: state.profilePage.typingMessage
    };
}

const mapDispatchToProps = {
    profilePageSetMessageIntoStateThunkCreator,
    // updateProfileTypingTextarea
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageFormContainer);








// const mapStateToProps = (state) => {
//     return {
//         typingMessage: state.profilePage.typingMessage
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         profilePageSavePostInState: () => {
//             dispatch(addProfilePostActionCreator());
//         },
//         profilePageRewriteTypingMessageInState: (text) => {
//             dispatch(updateProfileTypingTextareaActionCreator(text));
//         }
//     };
// }

// const ProfilePageFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePageForm);

// export default ProfilePageFormContainer;