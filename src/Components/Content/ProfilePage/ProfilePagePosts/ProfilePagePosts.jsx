const ProfilePagePosts = (props) => {
    return (
        <ul className="profile-page__posts">
            {props.posts}
        </ul>
    );
};

export default ProfilePagePosts;