import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";


class SideBar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <ul className="side-bar__links">
                    <li className="side-bar__single__link"><NavLink to={`/profile/${this.props.myId}`} className="side-bar__single__link-a" activeClassName="side-bar__single__link-active">Profile</NavLink></li>
                    <li className="side-bar__single__link"><NavLink to='/login' className="side-bar__single__link-a" activeClassName="side-bar__single__link-active">Login</NavLink></li>
                    <li className="side-bar__single__link"><NavLink to='/dialogs' className="side-bar__single__link-a" activeClassName="side-bar__single__link-active">Messages</NavLink></li>
                    <li className="side-bar__single__link"><NavLink to='/news' className="side-bar__single__link-a" activeClassName="side-bar__single__link-active">News</NavLink></li>
                    <li className="side-bar__single__link"><NavLink to='/music' className="side-bar__single__link-a" activeClassName="side-bar__single__link-active">Music</NavLink></li>
                    <li className="side-bar__single__link"><NavLink to='/users' className="side-bar__single__link-a" activeClassName="side-bar__single__link-active">Users</NavLink></li>
                    <li className="side-bar__single__link"><NavLink to='/settings' className="side-bar__single__link-a" activeClassName="side-bar__single__link-active">Settings</NavLink></li>
                </ul>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        myId: state.auth.id
    }
}

export default connect(mapStateToProps)(SideBar);