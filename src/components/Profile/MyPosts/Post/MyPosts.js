import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let PostData = props.MyPostData.map((post) => <Post text={post.text} coun={post.coun} id={post.id}/>)

    let onAddPost = (values) => {
        props.addPostBtn(values.newPostText);
    }

    return (
        <div className={s.item}>
            <div className={s.item}>
                my post
            </div>
             <AddNewPostFormRedux onSubmit={onAddPost}/>
            {PostData}
        </div>
    )
}
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <button className={s.item}>
                new post
            </button>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;