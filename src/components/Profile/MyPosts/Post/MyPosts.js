import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post";


const MyPosts = (props) => {

    let PostData = props.MyPostData.map((post)=><Post text={post.text} coun={post.coun}/>)

    let NewPostElement = React.createRef();

    let addPostBtn =()=>{
        let text = NewPostElement.current.value;
       props.addPost(text);
        NewPostElement.current.value = '';
    }

    return (
        <div className={s.item}>
            <div className={s.item}>
                my post
            </div>
            <div>
                <textarea ref={NewPostElement}> </textarea>
            </div>
            <button onClick={addPostBtn} className={s.item}>
                new post
            </button>
            {PostData}
        </div>
    )
}
export default MyPosts;