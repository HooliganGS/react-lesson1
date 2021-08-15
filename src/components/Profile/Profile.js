import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo data='avatar  + description'/>
            <MyPostsContainer  />
        </div>
    )
}
export default Profile;