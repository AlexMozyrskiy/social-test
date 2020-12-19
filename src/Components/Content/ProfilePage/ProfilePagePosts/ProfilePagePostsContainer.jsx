import ProfilePagePosts from './ProfilePagePosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const posts = state.profilePage.posts.map(post => <li key={post.id} className="profile-page__single-post">{ post.text }</li>);

    return {
        posts: posts
    }
};

const ProfilePagePostsContainer = connect(mapStateToProps)(ProfilePagePosts);

export default ProfilePagePostsContainer;