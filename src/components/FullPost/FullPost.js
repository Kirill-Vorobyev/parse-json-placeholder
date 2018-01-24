import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    componentDidUpdate () {
        if(this.props.id){
            if(!this.state.post || (this.state.post && this.state.post.id !== this.props.id)){
                axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.id)
                    .then(response => {
                        this.setState({
                            post: response.data
                        })
                    })
            }
        }
    }

    render() {
        let post = <p>Please Select a Post to Display...</p>;
        if(this.props.id){
            post = <p>Loading...</p>;
            if(this.state.post){
                post =  <div className="FullPost">
                        <h1>{this.state.post.title}</h1>
                        <p className="UserId">UserId: {this.state.post.userId}</p>
                        <p className="PostBody">{this.state.post.body}</p>
                        </div>
            }
        }
        return post;
    }
}

export default FullPost;