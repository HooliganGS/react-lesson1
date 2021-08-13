import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post";
import {addPostActionCreator, PostChangeActionCreator} from "../../../../redux/PostDataReducer";




const MyPosts = (props) => {

    let PostData = props.MyPostData.map((post)=><Post text={post.text} coun={post.coun}/>)

    let NewPostElement = React.createRef();

    let addPostBtn =()=>{
        props.dispatch(addPostActionCreator());
    }
    let onPostChange =()=>{
        let text = NewPostElement.current.value;
        props.dispatch(PostChangeActionCreator(text));
    }

    return (
        <div className={s.item}>
            <div className={s.item}>
                my post
            </div>
            <div>
                <textarea onChange={onPostChange} ref={NewPostElement} value={props.NewPostText}/>
            </div>
            <button onClick={addPostBtn} className={s.item}>
                new post
            </button>
            {PostData}
        </div>
    )
}
export default MyPosts;