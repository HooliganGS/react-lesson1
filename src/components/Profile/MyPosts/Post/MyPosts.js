import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post";

const MyPosts = () => {
    let MyPostData = [
        {id: 1, text: 'hello', coun: 0},
        {id: 2, text: 'privki', coun: 15},
        {id: 3, text: 'hello', coun: 20},
    ]

    return (
        <div className={s.item}>
            <div className={s.item}>
                my post
            </div>
            <div>
                <textarea name="1" id="" cols="30" rows="5"></textarea>
            </div>
            <button className={s.item}>
                new post
            </button>
            <Post text={MyPostData[0].text} coun={MyPostData[0].coun}/>
            <Post text={MyPostData[1].text} coun={MyPostData[1].coun}/>
        </div>
    )
}
export default MyPosts;