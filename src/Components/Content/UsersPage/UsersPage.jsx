import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "./../../../img/avatars/avatar.jpg";
import Preloader from "./../../common/Preloader/Preloader";

const UsersPage = (props) => {
    // const paginationPointsCount = Math.ceil(props.usersCount / props.usersPerPage); // сколько страниц в пагинации
    const paginationPointsCountAll = Math.ceil(props.allInBaseUsersCount / props.usersPerPage); // сколько страниц в пагинации с учетом количества всех пользователй в базе
    const paginationPointsSpanArray = [];
    // for (let i = 1; i <= paginationPointsCount; i++) {          // превратим в массив количество страниц пагинации для его мапа в двльнейшем при отрисовке кнопок пагинации
    //     paginationPointsCountArray.push(i);
    // }
    for (let i = props.firstPaginationButtonNum; i <= props.lastPaginationButtonNum; i++) {          // превратим в массив количество страниц пагинации для его мапа в двльнейшем при отрисовке кнопок пагинации
        paginationPointsSpanArray.push(
            <span
                className={props.currentPage === i ? "users-page__pagination-point users-page__pagination-point-current" : "users-page__pagination-point"}
                onClick={() => { props.OnClickPaginationChangeThunkCreator(i, props.usersPerPage) }}
                key={i}>
                {i}
            </span>);
    }

    return (

        <div>
            { props.isPreloaderActive ? <Preloader /> : null}

            <div className="users-page__pagination-points-wrapper">
                {props.currentPage === 1 ? null : <button onClick={() => { props.OnClickPaginationChangeThunkCreator((props.currentPage - 1), props.usersPerPage) }}>Prev</button>}   { /* если на первой странице не отображать кнопку назад */}
                {paginationPointsSpanArray}
                {props.currentPage === paginationPointsCountAll ? null : <button onClick={() => { props.OnClickPaginationChangeThunkCreator((props.currentPage + 1), props.usersPerPage) }}>Next</button>}       { /* если на последней странице не отображать кнопку вперед */}
            </div>

            <ul className="users-page__users content">
                {
                    props.usersPageUsers.map(user => (
                        <li className="users-page__single-user" key={user.id}>
                            <div className="users-page__avatar-follow">
                                <NavLink to={'/profile/' + user.id}><img src={user.photos.small != null ? user.photos.large : avatar} alt="avatar" className="users-page__avatar" /></NavLink>

                                {
                                    user.followed ?
                                        <button className="users-page__follow-button" disabled={props.buttonFollowDisabledUsersIdArray.some(id => id === user.id) ? true : false}
                                            onClick={() => {
                                                props.unFollowUserThunkCreator(user.id);
                                            }}>Unfollow</button>

                                        :

                                        <button className="users-page__follow-button" disabled={props.buttonFollowDisabledUsersIdArray.some(id => id === user.id) ? true : false}
                                            onClick={() => {
                                                props.followUserThunkCreator(user.id);
                                            }}>Follow</button>
                                }

                            </div>
                            <div className="users-page__user-info">
                                <div className="users-page__name-status">
                                    <h3 className="users-page__user-name">{user.name}</h3>
                                    <p className="users-page__user-status">{user.status}</p>
                                </div>
                                <div className="users-page__user-location">
                                    <h2 className="users-page__user-country">{"user.location.country"}</h2>
                                    <h3 className="users-page__user-city">{"user.location.city"}</h3>
                                </div>
                            </div>
                        </li>))
                }
            </ul>
        </div>

    );
}

export default UsersPage;