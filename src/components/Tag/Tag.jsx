import React from 'react';
import "./Tag.css";

const Tag = (props) => {
    return (
        <a className="tag" href="#">{props.name}</a>
    );
};

export default Tag;