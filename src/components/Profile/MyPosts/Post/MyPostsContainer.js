import React from "react";
import {addPostActionCreator} from "../../../../redux/PostDataReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        MyPostData: state.statePostData.MyPostData,
        NewPostText: state.statePostData.NewPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostBtn: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;