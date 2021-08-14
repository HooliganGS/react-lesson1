import React from "react";
import {addPostActionCreator, PostChangeActionCreator} from "../../../../redux/PostDataReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
let state = props.store.getState();
    let addPostBtn =()=>{
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange =(text)=>{
        props.store.dispatch(PostChangeActionCreator(text));
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPostBtn = {addPostBtn}
                 MyPostData={state.statePostData.MyPostData}
                 NewPostText={state.statePostData.NewPostText}
        />
    )
}
export default MyPostsContainer;