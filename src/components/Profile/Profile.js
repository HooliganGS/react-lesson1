import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo data='avatar  + description'/>
            <MyPosts MyPostData = {props.Post.MyPostData}
                     NewPostText={props.NewPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;