import * as usersPageActionTypes from '../ActionTypes/usersPageActionTypes';

export const usersPageFollowUser = (userId) => ({ type: usersPageActionTypes.USERS_PAGE_FOLLOW_USER_ACTION_TYPE, userId: userId });
export const usersPageUnFollowUser = (userId) => ({ type: usersPageActionTypes.USERS_PAGE_UNFOLLOW_USER_ACTION_TYPE, userId: userId });
export const usersPageSetUsersIntoState = (users) => ({ type: usersPageActionTypes.USERS_PAGE_SET_USERS_INTO_STATE_ACTION_TYPE, users: users });
export const usersPageSetNewCurrentPage = (pageNumber) => ({ type: usersPageActionTypes.USERS_PAGE_SET_NEW_CURRENT_PAGE_ACTION_TYPE, pageNumber: pageNumber });
export const usersPageSetNewUsersCount = (usersCount) => ({ type: usersPageActionTypes.USERS_PAGE_SET_NEW_USERS_COUNT_ACTION_TYPE, usersCount });
export const usersPageSetAllInBaseUsersCountIntoState = (allInBaseUsersCount) => ({ type: usersPageActionTypes.USERS_PAGE_SET_USERS_COUNT_IN_BASE_ACTION_TYPE, allInBaseUsersCount });
export const usersPageIsPreloaderActive = (isPreloaderActive) => ({ type: usersPageActionTypes.USERS_PAGE_IS_PRELOADER_ACTIVE, isPreloaderActive });
export const usersPageButtonFollowDisabled = (isButtonFollowClicked, userId) => ({ type: usersPageActionTypes.USERS_PAGE_BUTTON_FOLLOWED_DISABLED_ACTION_TYPE, isButtonFollowClicked, userId });
export const usersPageSetNewPaginationFirstPage = (pageNum) => ({ type: usersPageActionTypes.USERS_PAGE_SET_NEW_PAGINATION_FIRST_PAGE_NUM, pageNum });
export const usersPageSetNewPaginationLastPage = (pageNum) => ({ type: usersPageActionTypes.USERS_PAGE_SET_NEW_PAGINATION_LAST_PAGE_NUM, pageNum });