const DialogsPageUsersList = (props) => {
    return (
        <ul className="dialogs-page__users">
            { props.usersList }            
        </ul>
    );
};

export default DialogsPageUsersList;