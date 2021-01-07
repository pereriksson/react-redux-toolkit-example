import React from "react";
import Votes from "../Votes/Votes";
import Tag from "../Tag/Tag";
import By from "../By/By";
import "./Question.css";
import {useSelector} from "react-redux";

const Question = (props) => {
    const { post } = useSelector(state => state.post);

    return (
        <div className="question">
            <div className="left">
                <Votes votes={post.votes} id={post.id}/>
            </div>
            <div className="right">
                <p>{post.body}</p>
                {post.tags.map(t => (
                    <Tag name={t} key={t}/>
                ))}
                <By prefix="asked" date={post.date} by={post.by}/>
            </div>
        </div>
    );
}

export default Question;