/**
 * Created by raunak on 4/6/17.
 */
import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchPost} from '../actions/index'
import {deletePost} from '../actions/index'


class PostShow extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    onDelete() {
        const id = this.props.match.params.id;
        this.props.deletePost(id,()=>{this.props.history.push('/')});
    }

    render() {
        if (!this.props.post) {
            return (<div>
                Loading...
            </div>)
        }


        return (
            <div>
                <Link to='/'>Back To HomePage</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDelete.bind(this)}>
                    Delete Post
                </button>
                <h1>{this.props.post.title}</h1>
                <h6>{this.props.post.categories}</h6>
                <p>{this.props.post.content}</p>
            </div>
        );
    }


}

function mapStateToProps(state, ownProps) {
    return ({
        post: state.posts[ownProps.match.params.id]
    })

}

export default connect(mapStateToProps, {fetchPost: fetchPost,deletePost:deletePost})(PostShow);