import React from 'react';
import './PostList.scss';
import url from '../utils/urls';
import PostItem from './PostItem';
import { Link } from 'react-router-dom';
import { get } from '../utils/request';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        get(url.getPosts).then(response => {
            console.log(response)
            this.setState({
                posts: response
            })
        }).catch((e) => {
            constructor.log('catch', e)
        })
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="post">
                <h1>Topic List</h1>
                <button>Create Post</button>
                <div>Post Editor</div>
                <div className="post-list">
                    {posts.map(item => 
                        <PostItem post={item} key={item.id}></PostItem>
                    )}
                </div>
            </div>
        )
    }
}

export default PostList;