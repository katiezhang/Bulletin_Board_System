import React, { Component } from 'react';
import './PostItem.scss';
const likeImage = require('../image/like.jpg');

class PostItem extends Component {
    render() {
        const { post } = this.props;
        const author = post.author ? post.author.username : 'No body';
        const title = post.title ? post.title : 'No title';
        return (
            <div className="post-item">
                <h4>{title}</h4>
                <span className="author">{`Author: ${author}`}</span>
                <span className="date">{`Update Time: ${post.updatedAt}`}</span>
                <span><img src={likeImage} alt="like" />{post.vote}</span>
            </div>
        )
    }
}

export default PostItem;