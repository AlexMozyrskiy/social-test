import { NavLink } from "react-router-dom";
import DialogsPageUsersList from "./DialogsPageUsersList";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    const usersList = state.dialogsPage.users.map(user => <li key={ user.id } className="dialogs-page__single-user"><NavLink to= { "/dialogs/" + user.id } className="dialogs-page__single-user-a" activeClassName="dialogs-page__single-user-a-active">{ user.name }</NavLink></li>);

    return {
        usersList: usersList
    };
}

const DialogsPageUsersListContainer = connect(mapStateToProps)(DialogsPageUsersList);

export default DialogsPageUsersListContainer;