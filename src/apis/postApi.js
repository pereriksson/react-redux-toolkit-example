import store from "../redux/getStore";
import postSlice from "../redux/slices/postSlice";
import {POST_INITIAL_STATE} from "../constants";

/**
 * Normally we would get this from an API. This method
 * sets a imagined post from a mock constant.
 */
export const getPost = () => {
    store.dispatch(postSlice.actions.setPost(POST_INITIAL_STATE));
}
