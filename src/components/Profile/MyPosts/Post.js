import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU" alt="avatar"/>
            <div>
                {props.text} {props.area}
            </div>
            <div>
                <span> likes: {props.coun}</span>
            </div>
        </div>
    )
}
export default Post;