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
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
export default MyPosts;