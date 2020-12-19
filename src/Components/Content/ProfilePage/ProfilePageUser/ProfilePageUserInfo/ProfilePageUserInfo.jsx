import ProfilePageUserInfoAboutMe from "./ProfilePageUserInfoAboutMe/ProfilePageUserInfoAboutMe";
import ProfilePageUserInfoJob from "./ProfilePageUserInfoJob/ProfilePageUserInfoJob";
import ProfilePageUserInfoName from "./ProfilePageUserInfoName/ProfilePageUserInfoName";

const ProfilePageUserInfo = (props) => {
    return (
        <div className="profile-page__user-info">
            <ProfilePageUserInfoName name={props.userInfo.name} />
            <ProfilePageUserInfoAboutMe aboutMe={props.userInfo.aboutMe} />
            <ProfilePageUserInfoJob lookingForAJob={props.userInfo.lookingForAJob} />
        </div>
    );
};

export default ProfilePageUserInfo;