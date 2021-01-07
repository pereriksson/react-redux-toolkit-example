import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import {saveState, loadState} from "./storage";
import myVotesSlice from "./slices/myVotesSlice";

let preloadedState = loadState();
const store = configureStore({
    reducer: {
        post: postSlice.reducer,
        myVotes: myVotesSlice.reducer
    },
    preloadedState: preloadedState
});

store.subscribe(() => {
    saveState(store.getState());
})

export default store;