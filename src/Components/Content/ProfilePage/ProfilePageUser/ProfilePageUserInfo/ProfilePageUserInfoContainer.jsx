import React from "react";
import ProfilePageUserInfo from "./ProfilePageUserInfo";
import { connect } from "react-redux";
import * as axios from "axios";
import { profilePageSetUserIntoState } from "./../../../../../Redux/ActionCreators/profilePageActionCreators";

class ProfilePageUserInfoContainer extends React.Component {
    componentDidMount() {

        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2").
        then(response => {
            this.props.profilePageSetUserIntoState(response.data);
        });
    }

    render() {
        return <ProfilePageUserInfo userInfo={this.props.userInfo} />
    }
}



let mapStateToProps = (state) => {
    return {
        userInfo: state.profilePage.user
    }
}

export default connect(mapStateToProps, {profilePageSetUserIntoState})(ProfilePageUserInfoContainer);