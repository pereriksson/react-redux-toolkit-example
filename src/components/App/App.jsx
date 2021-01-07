import React, {useEffect} from 'react';
import Post from '../Post/Post';
import "./App.css";
import {getPost} from "../../apis/postApi";
import {useSelector} from "react-redux";

const App = (props) => {
    const { post } = useSelector(state => state.post);

    useEffect(() => {
        getPost();
    }, []);

    if (post.title) {
        return (
            <Post/>
        )
    } else {
        return null;
    }
};

export default App;