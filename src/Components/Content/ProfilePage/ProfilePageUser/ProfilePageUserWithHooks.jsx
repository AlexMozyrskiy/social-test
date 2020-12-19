import Preloader from "../../../common/Preloader/Preloader";
import avatar from "./../../../../img/avatars/avatar.jpg";

const ProfilePageUserWithHooks = (props) => {
    return (
        <div className="profile-page__user-grid_wrapper">
            { props.isPreloaderActive ? <Preloader /> : null}
            <img src={props.user.photos.large ? props.user.photos.large : avatar} alt="avatar" className="profile-page__avatar" />

            <div className="profile-page__user-info">
                <div className="profile-page__user-name">Name: {props.user.fullName}</div>
                <div className="profile-page__user-birth_day">About Me: {props.user.aboutMe}</div>
                <div className="profile-page__user-city">{props.user.lookingForAJob ? 'Я ищу работу' : 'Я не ищу работу'}</div>
            </div>

            <div className="profile-page__status">
                { props.isStatusEditModeActive 
                ? <input type="text" value={ props.status } autoFocus={true} onChange={ (e) => props.changeTypingStatusInHoock(e.currentTarget.value) } onBlur={ (e)=>props.deActivateEditMode(e.currentTarget.value) } /> 
                : <div onDoubleClick={ props.activateEditMode }>{ props.userGlobalStateStatus === "" ? "----------" : props.userGlobalStateStatus }</div>
                }
            </div>
        </div>
    );
}

export default ProfilePageUserWithHooks;