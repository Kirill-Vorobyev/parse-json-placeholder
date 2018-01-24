import React, { Component } from 'react';
import axios from 'axios';
import Post from '../components/Post/Post';
import NewPost from '../components/NewPost/NewPost';
import FullPost from '../components/FullPost/FullPost';

import './Blog.css';

class Blog extends Component {
    state = {
        numPosts: 10,
        selectedPostId: null,
        allPosts: [],
        posts: []
    }

    componentWillMount () {
        let posts = null;
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then( response => {
                this.setState({
                    allPosts: response.data,
                    posts: response.data.slice(0,10)
                });
            })
    }

    changeNumberHandler = (event) => {
        let value = event.target.value;
        this.setState( (prevState, props) => {
            return {
                numPosts: value,
                posts: prevState.allPosts.slice(0,value)
            };
        });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        const posts = this.state.posts.map((post)=>(
            <Post 
                key={post.id} 
                title={post.title} 
                author={post.userId}
                clicked={() => this.postSelectedHandler(post.id)}/>
        ));
        return (
            <div className="Container">
                <h1>Number of Posts to Display:</h1>
                <input 
                onChange={this.changeNumberHandler}
                type="range" 
                min="1" 
                max="100" 
                step="1" 
                value={this.state.numPosts}/>

                <div className="Posts">
                    {posts}
                </div>
                
                <FullPost id={this.state.selectedPostId}/>
            </div>
        );
    }
}

export default Blog;