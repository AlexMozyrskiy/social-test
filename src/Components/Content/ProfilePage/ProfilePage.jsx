import ProfilePageFormContainer from './ProfilePageForm/ProfilePageFormContainer';
import ProfilePagePoster from './ProfilePagePoster/ProfilePagePoster';
import ProfilePagePostsContainer from './ProfilePagePosts/ProfilePagePostsContainer';
import ProfilePageUserContainerWithHooks from './ProfilePageUser/ProfilePageUserContainerWithHooks';


const ProfilePage = () => {
    return (
        <div className="profile-page">
            <ProfilePagePoster />

            <ProfilePageUserContainerWithHooks />

            <h3>My Posts</h3>

            <ProfilePageFormContainer />

            <ProfilePagePostsContainer />
        </div>
    );
};

export default ProfilePage;