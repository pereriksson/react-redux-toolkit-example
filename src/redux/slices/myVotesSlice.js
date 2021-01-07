import {createSlice} from "@reduxjs/toolkit";

const myVotesSlice = createSlice({
    name: "myVotes",
    initialState: {
        myVotes: [

        ]
    },
    reducers: {
        setMyVote: (state, action) => {
            const index = state.myVotes.findIndex(e => e.id === action.payload.id);

            if (index >= 0) {
                state.myVotes[index].value = action.payload.value;
            } else {
                state.myVotes.push({id: action.payload.id, value: action.payload.value});
            }
        }
    }
});

export default myVotesSlice;