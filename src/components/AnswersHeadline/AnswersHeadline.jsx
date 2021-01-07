import React from "react";

const AnswersHeadline = (props) => {
    if (props.numberOfAnswers > 0) {
        return (
            <h2>{props.numberOfAnswers} answers</h2>
        )
    } else
        return null;
}

export default AnswersHeadline;