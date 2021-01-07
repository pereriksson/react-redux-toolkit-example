import React from 'react';
import Question from "../Question/Question";
import Answer from "../Answer/Answer";
import "./Post.css";
import AnswersHeadline from "../AnswersHeadline/AnswersHeadline";
import {useSelector} from "react-redux";

const Post = (props) => {
    const { post } = useSelector(state => state.post);

    return (
        <div className="post">
            <h1>{post.title}</h1>
            <Question/>
            <AnswersHeadline numberOfAnswers={post.answers.length}/>
            {post.answers.map(a => {
                return (
                    <Answer key={a.id} id={a.id}/>
                );
            })}
        </div>
    )
}

export default Post;