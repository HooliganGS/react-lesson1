import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPost} from "../../redux/state";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo data='avatar  + description'/>
            <MyPosts MyPostData = {props.Post.MyPostData} addPost = {props.addPost} NewPostText={props.NewPostText} updateNewPost={props.updateNewPost}/>
        </div>
    )
}
export default Profile;