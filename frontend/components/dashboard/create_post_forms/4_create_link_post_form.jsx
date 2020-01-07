import React from 'react';
import { connect } from 'react-redux';
import { createPost, createPhotoPost, createVideoPost, createAudioPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';


class CreateTextPostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: props.currentUser.id,
            username: props.currentUser.username,
            title: "",
            body: "",
            source: "",
            source_alias: "",
            link: "",
            link_alias: "",
            image_url: "",
            video_url: "",
            html: "",
            root_post_id: "",
            parent_post_id: "",
            post_type: props.formType,
            private: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        const post = Object.assign({}, this.state);
        this.props.createPost(post);
        this.props.closeModal();
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="post-form-container">

                <form className="post-form" onSubmit={this.handleSubmit}>

                    <div className="current-user">{this.props.currentUser.username} <i className="fas fa-chevron-down"></i></div>

                    <div>
                        <input type="user_id"
                            value={this.state.user_id}
                            onChange={this.update('user_id')}
                            className="post-form-input"
                            placeholder={this.state.user_id}
                            type="hidden"
                        />
                    </div>

                    <div>
                        <input type="username"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="post-form-input"
                            placeholder={this.state.username}
                            type="hidden"
                        />
                    </div>

                    <div>
                        <input type="link"
                            value={this.state.link}
                            onChange={this.update('link')}
                            className="post-form-input post-link"
                            placeholder="Type or paste a url"
                        />
                    </div>

                    <div>
                        <input type="link_alias"
                            value={this.state.link_alias}
                            onChange={this.update('link_alias')}
                            className="post-form-input link_alias"
                            placeholder="Link alias"
                        />
                    </div>

                    <div>
                        <textarea
                            value={this.state.body}
                            onChange={this.update('body')}
                            className="post-form-input body"
                            placeholder="Add a description, if you like"
                        />
                    </div>

                    <div>
                        <input type="tags"
                            value={this.state.tags}
                            className="post-form-input tags"
                            placeholder="#tags"
                        />
                    </div>

                    <div className="modal-click">

                        <button className="close-button"
                            onClick={this.props.closeModal}>
                            <div className="unselected">Close</div>
                        </button>

                        <button className="post-button" type="submit">
                            <div className="unselected">Post</div>
                        </button>

                    </div>



                </form>

            </div>
        )
    }

}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: 'link'
})

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal()),
    // createPhotoPost: post => dispatch(createPhotoPost(post)),
    // createVideoPost: post => dispatch(createVideoPost(post)),
    // createAudioPost: post => dispatch(createAudioPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTextPostForm);

