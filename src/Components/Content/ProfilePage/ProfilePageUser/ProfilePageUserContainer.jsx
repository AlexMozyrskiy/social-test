import React from "react";
import { connect } from "react-redux";
import { profilePageSetUserIntoState } from "./../../../../Redux/ActionCreators/profilePageActionCreators"
import { preloaderActive } from "./../../../../Redux/ActionCreators/preloaderActionCreator";
import ProfilePageUser from "./ProfilePageUser";
import { Redirect, withRouter } from "react-router-dom";
import { profilePageGetUserThunkCreator, profilePageGetUserStatusThunkCreator, profilePageUpdateUserStatusThunkCreator } from "./../../../../Redux/ThunkCreators/profilePageThunkCreator";
import { compose } from "redux";
// import {withAuthRedirect} from "./../../../../hoc/withAuthRedirect";



class ProfilePageUserContainer extends React.Component {
    state = {
        status: this.props.userGlobalStateStatus,
        isEditMode: false
    }

    activateEditMode() {
        this.setState({
            isEditMode: true,
            // status: this.props.userGlobalStateStatus
        });
    }

    deActivateEditMode(message) {
        this.setState({
            isEditMode: false
        });
        this.props.profilePageUpdateUserStatusThunkCreator(message);
    }

    changeTypingStatusInLocalState(message) {
        this.setState({
            status: message
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state;
    }

    componentDidMount() {
        console.log("ProfilePageUserContainer componentDidMount");
        this.props.profilePageGetUserThunkCreator(this.props.match.params.userId);
        this.props.profilePageGetUserStatusThunkCreator(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.userGlobalStateStatus !== this.props.userGlobalStateStatus) {
            this.setState({
                status: this.props.userGlobalStateStatus
            });
        }
    }

    render() {
        console.log("ProfilePageUserContainer render(")
        if(!this.props.isAuth) {
            return <Redirect to="/login" />
        }
        return (
            <ProfilePageUser
                user={this.props.user}
                isPreloaderActive={this.props.isPreloaderActive}
                localState={this.state}
                activateEditMode={this.activateEditMode.bind(this)}
                deActivateEditMode={this.deActivateEditMode.bind(this)}
                changeTypingStatusInLocalState={this.changeTypingStatusInLocalState.bind(this)}
                userGlobalStateStatus={this.props.userGlobalStateStatus}
                userLocalStateStatus={this.state.status}
            />
        );
    }
}



const mapStateToProps = (state) => {
    return {
        user: state.profilePage.user,
        isPreloaderActive: state.preloaderActive.isPreloaderActive,
        isAuth: state.auth.isLoggedIn,
        userGlobalStateStatus: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {
        profilePageSetUserIntoState,
        preloaderActive,
        profilePageGetUserThunkCreator,
        profilePageGetUserStatusThunkCreator,
        profilePageUpdateUserStatusThunkCreator
    }),
    // withAuthRedirect,
    withRouter
)(ProfilePageUserContainer);