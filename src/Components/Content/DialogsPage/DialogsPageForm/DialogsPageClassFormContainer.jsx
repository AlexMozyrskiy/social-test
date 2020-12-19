import React from "react";
import DialogsPageForm from "./DialogsPageForm";

class DialogsPageClassFormContainer extends React.Component {

    onSubmit(formData) {
        this.props.dialogsPageSetMessageIntoStateThunkCreator(formData.message);
    }

    render() {
        return (
            <DialogsPageForm
                onSubmit={this.onSubmit.bind(this)}
            />
        );
    }
}

export default DialogsPageClassFormContainer;





// const mapStateToProps = (state) => {
//     return {
//         typingMessage: state.dialogsPage.typingMessage
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dialogsPageRewriteTypingMessageInState: (text) => {
//             dispatch(updateDialogsTypingTextareaActionCreator(text));
//         },
//         dialogsPageSavePostInState: () => {
//             dispatch(addDialogsPostActionCreator());
//         }
//     };
// }

// const DialogsPageFormContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPageForm);

// export default DialogsPageFormContainer;