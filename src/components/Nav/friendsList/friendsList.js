import React from "react";
import s from './friendsList.module.css'
import Friend from "./friend/friend";


const FriendsList = (props) => {

    let FriendMember = props.DataFriend.map((el)=>{
        return(
            <Friend name = {el.name}/>
        )
    })
    return (
        <div className={s.friendList}>
            <div>
                <h2>Friends</h2>
            </div>
            <div className={s.friends}>
                {FriendMember}
            </div>
        </div>
    )
}

export default FriendsList;