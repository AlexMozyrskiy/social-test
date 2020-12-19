import { preloaderActive } from "./../../Redux/ActionCreators/preloaderActionCreator";
import { usersPageAPI } from "./../../Api/api";
import {
    usersPageSetUsersIntoState, usersPageFollowUser, usersPageUnFollowUser,
    usersPageSetNewCurrentPage, usersPageSetNewUsersCount, usersPageButtonFollowDisabled,
    usersPageSetAllInBaseUsersCountIntoState,usersPageSetNewPaginationFirstPage,
    usersPageSetNewPaginationLastPage
} from "./../../Redux/ActionCreators/usersPageActionCreators";

export const getUsersThunkCreator = (currentPage, usersPerPage) => async (dispatch) => {
    dispatch(preloaderActive(true));

    const data = await usersPageAPI.getUsers(currentPage, usersPerPage);

    dispatch(preloaderActive(false));

    dispatch(usersPageSetUsersIntoState(data.items));

    const usersCountAllInBase = data.totalCount;
    const usersCountToDisplay = data.totalCount > 30 ? 30 : data.totalCount;     // если зарегистрированных юзер много сделаем кнопки пагинации для первых 30

    // if (data.totalCount > 50) {         // если зарегистрированных юзер много сделаем кнопки пагинации для первых 50
    //     data.totalCount = 50
    // };

    dispatch(usersPageSetAllInBaseUsersCountIntoState(usersCountAllInBase));
    dispatch(usersPageSetNewUsersCount(usersCountToDisplay));
}

export const followUserThunkCreator = (userId) => async (dispatch) => {
    dispatch(usersPageButtonFollowDisabled(true, userId));

    const data = await usersPageAPI.followUser(userId);

    dispatch(usersPageButtonFollowDisabled(false, userId));

    if (data.resultCode === 0) {
        dispatch(usersPageFollowUser(userId));
    }
}

export const unFollowUserThunkCreator = (userId) => async (dispatch) => {
    dispatch(usersPageButtonFollowDisabled(true, userId));

    const data = await usersPageAPI.unFollowUser(userId);

    dispatch(usersPageButtonFollowDisabled(false, userId));

    if (data.resultCode === 0) {
        dispatch(usersPageUnFollowUser(userId));
    }
}

export const OnClickPaginationChangeThunkCreator = (pageNumber, usersPerPage) => async (dispatch) => {
    dispatch(preloaderActive(true));

    dispatch(usersPageSetNewCurrentPage(pageNumber));       // перерисуем страницу

    const data = await usersPageAPI.getUsers(pageNumber, usersPerPage);

    dispatch(preloaderActive(false));
    
    dispatch(usersPageSetUsersIntoState(data.items));
}

export const setNewPaginationFirstAndLastButtonsIntoState = (firstPageNum, lastPageNum) => (dispatch) => {
    dispatch(preloaderActive(true));

    dispatch(usersPageSetNewPaginationFirstPage(firstPageNum));
    dispatch(usersPageSetNewPaginationLastPage(lastPageNum));

    dispatch(preloaderActive(false));
}