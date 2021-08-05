import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post";

const MyPosts = () => {
    return (
        <div className={s.item}>
            my post
            <div className={s.item}>
                new post
            </div>
            <Post text='hello' area='hey' coun='15'/>
            <Post text='hello' area='hey and hi' coun='20'/>

        </div>
    )
}
export default MyPosts;