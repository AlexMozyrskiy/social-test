import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import { profilePageSetUserIntoState } from "../../../../Redux/ActionCreators/profilePageActionCreators"
// import { preloaderActive } from "../../../../Redux/ActionCreators/preloaderActionCreator";
import ProfilePageUserWithHooks from "./ProfilePageUserWithHooks";
import { Redirect, withRouter } from "react-router-dom";
import { profilePageGetUserThunkCreator, profilePageGetUserStatusThunkCreator, profilePageUpdateUserStatusThunkCreator } from "../../../../Redux/ThunkCreators/profilePageThunkCreator";
import { compose } from "redux";
// import {withAuthRedirect} from "./../../../../hoc/withAuthRedirect";


const ProfilePageWithHooksUserContainer = (props) => {
    // let stateWithUseState = useState(false);        // использовали хук useState, отправив первой значение false
    // let isStatusEditModeActive = stateWithUseState[0];            // после использование useState он вернет массив с 2мя значениями: 0 значение в массиве - параметр который мы передали при сохдании хука, в данном случае false, 
    // let setEditMode = stateWithUseState[1];                     // 1 значение в массиве - функция, которая может менять 0 значение в массиве
    let [isStatusEditModeActive, changeIsStatusEditModeActive] = useState(false);   // после использование useState он вернет массив с 2мя значениями: 0 значение в массиве - параметр который мы передали при сохдании хука, в данном случае false, 1 значение в массиве - функция, которая может менять 0 значение в массиве
    let [status, changeTypingStatus] = useState(props.userGlobalStateStatus);
    // const { userGlobalStateStatus } = {...props};

    useEffect(() => {
        props.profilePageGetUserThunkCreator(props.match.params.userId);
        props.profilePageGetUserStatusThunkCreator(props.match.params.userId);
        changeTypingStatus(props.userGlobalStateStatus);
    }, [props.userGlobalStateStatus]);

    function activateEditMode() {
        changeIsStatusEditModeActive(true);
    }

    function deActivateEditMode(message) {
        changeIsStatusEditModeActive(false)
        props.profilePageUpdateUserStatusThunkCreator(message);
    }

    function changeTypingStatusInHoock(message) {
        changeTypingStatus(message);
    }

    // debugger
    if (!props.isAuth) {
        return <Redirect to="/login" />
    }



    return (
        <ProfilePageUserWithHooks
            user={props.user}
            isStatusEditModeActive={isStatusEditModeActive}
            activateEditMode={activateEditMode}
            deActivateEditMode={deActivateEditMode}
            status={status}
            changeTypingStatusInHoock={changeTypingStatusInHoock}
            // isPreloaderActive={this.props.isPreloaderActive}
            // localState={this.state}
            // activateEditMode={this.activateEditMode.bind(this)}
            // deActivateEditMode={this.deActivateEditMode.bind(this)}
            // changeTypingStatusInLocalState={this.changeTypingStatusInLocalState.bind(this)}
            userGlobalStateStatus={props.userGlobalStateStatus}
        // userLocalStateStatus={this.state.status}
        />
    );
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
        // profilePageSetUserIntoState,
        // preloaderActive,
        profilePageGetUserThunkCreator,
        profilePageGetUserStatusThunkCreator,
        profilePageUpdateUserStatusThunkCreator
    }),
    // withAuthRedirect,
    withRouter
)(ProfilePageWithHooksUserContainer);