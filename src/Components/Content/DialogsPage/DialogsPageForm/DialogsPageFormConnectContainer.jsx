import DialogsPageClassFormContainer from "./DialogsPageClassFormContainer";
import { dialogsPageSetMessageIntoStateThunkCreator } from "./../../../../Redux/ThunkCreators/dialogsPageThunkCreator";
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        
    };
}

const mapDispatchToProps = {
    dialogsPageSetMessageIntoStateThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsPageClassFormContainer);