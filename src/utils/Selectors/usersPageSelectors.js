// const basePart = state.usersPage

import { createSelector } from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true);
});

export const getUsersPerPageSelector =  (state) => {
    return state.usersPage.usersPerPage;
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
}

export const getUsersCountSelector = (state) => {
    return state.usersPage.usersCount;
}

export const getAllInBaseUsersCountSelector = (state) => {
    return state.usersPage.allInBaseUsersCount;
}

export const getButtonFollowDisabledUsersIdArraySelector = (state) => {
    return state.usersPage.buttonFollowDisabled;
}

export const getPaginationPointsToDisplaySelector = (state) => {
    return state.usersPage.paginationPointsToDisplay;
}

export const getFirstPaginationButtonNum = (state) => {
    return state.usersPage.firstPaginationButtonNum;
}

export const getLastPaginationButtonNum = (state) => {
    return state.usersPage.lastPaginationButtonNum;
}