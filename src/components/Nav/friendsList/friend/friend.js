import s from "../friendsList.module.css";
import React from "react";

const Friend =(props)=>{
    return(
        <div className={s.friend}>
            <img src="http://sun9-39.userapi.com/s/v1/ig2/8aqATIMGN_0ucbrpPT2w9-Od9s4_R-28vuF1rs263b_AnT8lBidXi9Tp1qazfob7TONkocJPt4t4cK1Z6ZOpdx3e.jpg?size=200x0&quality=96&crop=35,35,1002,1009&ava=1" alt="ilya"/>
            <h3>{props.name}</h3>
        </div>
    )
}
export default Friend;