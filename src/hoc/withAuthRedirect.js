import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isLoggedIn
    }
}

export const withAuthRedirect = (Component) => {
    const withAuthRedirectContainer = (props) => {
        if(!props.isAuth) return <Redirect to="/login" />

        return <Component {...props} />;
    }

    return connect(mapStateToProps)(withAuthRedirectContainer);
}