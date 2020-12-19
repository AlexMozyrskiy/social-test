import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../../utils/validators/validators";
import TextareaWithValidate from "../../../common/FormsControls/ChilderenFormsControls/TextareaWithValidate";

const maxLength10 = maxLengthCreator(10);

const ProfilePageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="profile-page__form">
            <Field component={TextareaWithValidate} placeholder="type your Post" name="post" type="text" validate={[requiredField, maxLength10]} />
            <button>Send</button>
        </form>
    );
};

export default reduxForm({
    // a uniq name for the form
    form: "profilePagePost"
})(ProfilePageForm);