import DialogsPageMessagesList from "./DialogsPageMessagesList";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const messagesList = state.dialogsPage.messages.map(message => <li key={ message.id } className="dialogs-page__single-message">{ message.text }</li>);

    return {
        messagesList: messagesList
    };
}

const DialogsPageMessagesListContainer = connect(mapStateToProps)(DialogsPageMessagesList);

export default DialogsPageMessagesListContainer;