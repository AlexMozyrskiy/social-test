import React from "react";
import { connect } from "react-redux";
import UsersPage from "./UsersPage";
import { usersPageSetUsersIntoState, usersPageSetNewCurrentPage, usersPageSetNewUsersCount } from "../../../Redux/ActionCreators/usersPageActionCreators";
import { preloaderActive } from "./../../../Redux/ActionCreators/preloaderActionCreator";
import {
    getUsersThunkCreator, followUserThunkCreator,
    unFollowUserThunkCreator, OnClickPaginationChangeThunkCreator,
    setNewPaginationFirstAndLastButtonsIntoState
} from "./../../../Redux/ThunkCreators/usersPageThunkCreator";
// import { withAuthRedirect } from "./../../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
    getUsersSuperSelector, getUsersPerPageSelector, getCurrentPageSelector,
    getUsersCountSelector, getButtonFollowDisabledUsersIdArraySelector,
    getAllInBaseUsersCountSelector, getPaginationPointsToDisplaySelector,
    getFirstPaginationButtonNum, getLastPaginationButtonNum
} from "./../../../utils/Selectors/usersPageSelectors";

class UsersPageDBQuery extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.usersPerPage);
    }

    componentDidUpdate() {
        if(this.props.currentPage < this.props.firstPaginationButtonNum) {
            const firstPageNum = this.props.currentPage;
            const lastPageNum = this.props.currentPage + 9;
            this.props.setNewPaginationFirstAndLastButtonsIntoState(firstPageNum, lastPageNum);
        } else if(this.props.currentPage > this.props.lastPaginationButtonNum) {
            const firstPageNum = this.props.currentPage - 9;
            const lastPageNum = this.props.currentPage;
            this.props.setNewPaginationFirstAndLastButtonsIntoState(firstPageNum, lastPageNum);
        }
    }

    render() {
        return <UsersPage
            // usersCount={this.props.usersCount}
            // usersPerPage={this.props.usersPerPage}
            // usersPageSetNewCurrentPage={this.props.usersPageSetNewCurrentPage}
            // usersPerPage={this.props.usersPerPage}
            // usersPageSetUsersIntoState={this.props.usersPageSetUsersIntoState}
            // currentPage={this.props.currentPage}
            // usersPageUsers={this.props.usersPageUsers}
            // usersPageUnFollowUser={this.props.usersPageUnFollowUser}
            // usersPageFollowUser={this.props.usersPageFollowUser}
            lpsOnClickPaginationChange={this.lpsOnClickPaginationChange}
            paginationPointsSpanArray={this.paginationPointsSpanArray}
            getFirstLastPaginationButtonNum={this.getFirstLastPaginationButtonNum}
            localState={this.state}
            // isPreloaderActive={this.props.isPreloaderActive}
            {...this.props}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        // usersPageUsers: state.usersPage.users,
        usersPageUsers: getUsersSuperSelector(state),
        allInBaseUsersCount: getAllInBaseUsersCountSelector(state),
        usersPerPage: getUsersPerPageSelector(state),
        currentPage: getCurrentPageSelector(state),
        usersCount: getUsersCountSelector(state),
        isPreloaderActive: state.preloaderActive.isPreloaderActive,
        buttonFollowDisabledUsersIdArray: getButtonFollowDisabledUsersIdArraySelector(state),
        paginationPointsToDisplay: getPaginationPointsToDisplaySelector(state),
        firstPaginationButtonNum: getFirstPaginationButtonNum(state),
        lastPaginationButtonNum: getLastPaginationButtonNum(state)
    };
}

const mapDispatchToProps = {
    usersPageSetUsersIntoState,
    // usersPageFollowUser,
    // usersPageUnFollowUser,
    usersPageSetNewCurrentPage,
    usersPageSetNewUsersCount,
    preloaderActive,
    // usersPageButtonFollowDisabled,
    getUsersThunkCreator,
    followUserThunkCreator,
    unFollowUserThunkCreator,
    OnClickPaginationChangeThunkCreator,
    setNewPaginationFirstAndLastButtonsIntoState
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         usersPageSetUsersIntoState: (users) => {
//             dispatch(usersPageSetUsersIntoStateActionCreator(users));
//         },
//         usersPageFollowUser: (userId) => {
//             dispatch(usersPageFollowUserActionCreator(userId));
//         },
//         usersPageUnFollowUser: (userId) => {
//             dispatch(usersPageUnFollowUserActionCreator(userId));
//         },
//         usersPageSetNewCurrentPage: (pageNumber) => {
//             dispatch(usersPageSetNewCurrentPageActionCreator(pageNumber));
//         },
//         usersPageSetNewUsersCount: (usersCount) => {
//             dispatch(usersPageSetNewUsersCountActionCreator(usersCount));
//         },
//         preloaderActive: (isPreloaderActive) => {
//             dispatch(preloaderActiveActionCreator(isPreloaderActive));
//         }
//     };
// }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(UsersPageDBQuery);