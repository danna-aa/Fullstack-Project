import { connect } from 'react-redux';
import { fetchPosts, fetchPost, createPost, updatePost, deletePost, fetchOwnPosts } from '../../actions/post_actions';
import { fetchUsers, fetchUser } from '../../actions/session_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
    posts: state.entities.posts,
    users: state.entities.users,
    errors: state.errors,
    session: state.session,
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: (filter) => dispatch(fetchPosts(filter)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: () => dispatch(fetchUser()),

    // not used yet
    // fetchPost: postId => dispatch(fetchPost(postId)),
    // createPost: postId => dispatch(createPost(postId)),
    // updatePost: postId => dispatch(updatePost(postId)),
    // deletePost: postId => dispatch(deletePost(postId)),
    // fetchOwnPosts: postId => dispatch(fetchOwnPosts(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
