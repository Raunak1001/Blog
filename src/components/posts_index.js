/**
 * Created by raunak on 4/6/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {FetchPosts} from '../actions/index';
import _ from 'lodash';
import {Link} from 'react-router-dom'

class PostIndex extends React.Component {

    componentDidMount() {
        this.props.FetchPosts();
    }

    renderList() {
        return _.map(this.props.posts, (post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            );
        })


    }

    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link to='/posts/new' className='btn btn-primary '>Add New Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderList()}

                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return ({
        posts: state.posts
    })
}

export default connect(mapStateToProps, {FetchPosts: FetchPosts})(PostIndex);