import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const post = props => {
    return (
        <div className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <p className="Author">UserID: {props.author}</p>
        </div>
    );
};

export default post;