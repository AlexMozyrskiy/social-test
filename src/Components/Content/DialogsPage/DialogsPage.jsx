import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import DialogsPageFormConnectContainer from "./DialogsPageForm/DialogsPageFormConnectContainer";
import DialogsPageUsersAndMessagesList from "./DialogsPageUsersAndMessagesList/DialogsPageUsersAndMessagesList";

const dialogsPage = () => {
    return (
        <div className="dialogs-page">

            <h2 className="dialogs">Dialogs</h2>

            <DialogsPageUsersAndMessagesList />

            <DialogsPageFormConnectContainer />

        </div>
    );
};

export default compose(
    withAuthRedirect
)(dialogsPage);