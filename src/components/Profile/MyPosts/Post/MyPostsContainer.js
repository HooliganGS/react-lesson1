import React from "react";
import {addPostActionCreator, PostChangeActionCreator} from "../../../../redux/PostDataReducer";
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
        addPostBtn: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(PostChangeActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;