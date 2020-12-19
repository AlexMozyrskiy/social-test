import DialogsPageMessagesListContainer from "./DialogsPageMessagesList/DialogsPageMessagesListContainer";
import DialogsPageUsersListContainer from "./DialogsPageUsersList/DialogsPageUsersListContainer";

const DialogsPageUsersAndMessagesList = () => {
    return (
        <div className="dialogs-page__wrapper">
            
            <DialogsPageUsersListContainer />

            <DialogsPageMessagesListContainer />

        </div>
    );
};

export default DialogsPageUsersAndMessagesList;