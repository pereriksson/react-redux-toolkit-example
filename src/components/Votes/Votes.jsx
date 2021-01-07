import React, {useEffect} from 'react';
import "./Votes.css";
import store from "../../redux/getStore";
import myVotesSlice from "../../redux/slices/myVotesSlice";
import {useSelector} from "react-redux";

const Votes = (props) => {
    const { myVotes } = useSelector(state => state.myVotes );

    const myVote = myVotes.find(mv => mv.id === props.id);

    const myVoteCount = (myVote) ? myVote.value : 0;

    const updateMyVotes = (id, value) => {
        store.dispatch(myVotesSlice.actions.setMyVote({ id: id, value: value }));
    }

    return (
        <div className="votes">
            <a className="upvote" href="#" onClick={()=>updateMyVotes(props.id, 1)}>
                <svg aria-hidden="true" className="m0 svg-icon iconArrowUpLg" width="36" height="36"
                     viewBox="0 0 36 36">
                    <path d="M2 26h32L18 10 2 26z" fill="#BBC0C4"></path>
                </svg>
            </a>
            <div className="count">{ props.votes + myVoteCount }</div>
            <a className="downvote" href="#" onClick={()=>updateMyVotes(props.id, -1)}>
                <svg aria-hidden="true" className="m0 svg-icon iconArrowDownLg" width="36" height="36"
                     viewBox="0 0 36 36">
                    <path d="M2 10h32L18 26 2 10z" fill="#BBC0C4"></path>
                </svg>
            </a>
        </div>
    )
}

export default Votes;