import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post";


const MyPosts = (props) => {
    let PostData = props.MyPostData.map((post)=><Post text={post.text} coun={post.coun} id={post.id}/>)
    let NewPostElement = React.createRef();
    let onAddPost =()=>{
        props.addPostBtn();
    }
    let onPostChange =()=>{
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.item}>
            <div className={s.item}>
                my post
            </div>
            <div>
                <textarea onChange={onPostChange} ref={NewPostElement} value={props.NewPostText}/>
            </div>
            <button onClick={onAddPost} className={s.item}>
                new post
            </button>
            {PostData}
        </div>
    )
}
export default MyPosts;