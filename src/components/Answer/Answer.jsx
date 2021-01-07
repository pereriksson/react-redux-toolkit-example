import React from 'react';
import Votes from "../Votes/Votes";
import Body from "../Body/Body";
import By from "../By/By";
import "./Answer.css";
import {useSelector} from "react-redux";

const Answer = (props) => {
    const { post } = useSelector(state => state.post);

    const answer = post.answers.find(a => a.id === props.id);

    if (answer) {
        return (
            <div className="answer">
                <div className="left">
                    <Votes id={answer.id} votes={answer.votes}/>
                </div>
                <div className="right">
                    <Body text={answer.body}/>
                    <By by={answer.by} date={answer.date} prefix="anwered"/>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Answer;