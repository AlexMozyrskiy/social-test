import { Field, reduxForm } from "redux-form";
import TextareaWithValidate from "../../../common/FormsControls/ChilderenFormsControls/TextareaWithValidate";
import { requiredField, maxLengthCreator } from "./../../../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const DialogsPageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className="dialogs-page__form">
            <Field component={TextareaWithValidate} name="message" className="dialogs-page__textarea" placeholder="Type Your Message" validate={[requiredField, maxLength100]} />
            <button>Send Message</button>
            {/* <textarea className="dialogs-page__textarea" placeholder="Type Your Message" onChange={typingMessageForRewriting} value={ props.typingMessage }></textarea>
            <button className="dialogs-page__button" onClick={ props.dialogsPageSavePostInState }>Send Mrssage</button> */}
        </form>
    );
};

export default reduxForm({
    form: "dialogsPageForm"
})(DialogsPageForm);