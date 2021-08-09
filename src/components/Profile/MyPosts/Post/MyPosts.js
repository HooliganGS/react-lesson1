import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post";

const MyPosts = (props) => {

    let PostData = props.MyPostData.map((post)=><Post text={post.text} coun={post.coun}/>)

    return (
        <div className={s.item}>
            <div className={s.item}>
                my post
            </div>
            <div>
                <textarea name="1" id="" cols="30" rows="5">текст</textarea>
            </div>
            <button className={s.item}>
                new post
            </button>
            {PostData}
        </div>
    )
}
export default MyPosts;