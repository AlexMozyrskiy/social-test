import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { preloaderActive } from "./../../Redux/ActionCreators/preloaderActionCreator";
import { setUserDataIntoState } from "./../../Redux/ActionCreators/setUserDataIntoStateActionCreator";
import { headerIsLogoutThunkCreator } from "./../../Redux/ThunkCreators/headerThunkCreators";

class HeaderContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return <Header { ...this.props }/>
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        id: state.auth.id,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    preloaderActive, setUserDataIntoState, headerIsLogoutThunkCreator
})(HeaderContainer);