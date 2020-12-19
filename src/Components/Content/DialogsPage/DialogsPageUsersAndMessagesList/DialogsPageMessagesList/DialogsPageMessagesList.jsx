const DialogsPageMessagesList = (props) => {
    return (
        <ul className="dialogs-page__messages">
            { props.messagesList }
        </ul>
    );
};

export default DialogsPageMessagesList;