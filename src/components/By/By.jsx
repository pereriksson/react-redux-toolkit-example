import React from 'react';
import "./By.css";

const By = (props) => {
    return (
        <div className="by">
            <p className="action-time">
                {props.prefix} {props.date}
            </p>
            <img src={props.by.avatar} className="avatar"/>
            {props.by.name}
        </div>
    );
}

export default By;