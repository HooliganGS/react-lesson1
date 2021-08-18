import React from "react";
import s from "./Users.module.css";
import avatar3219 from "../../assets/images/avatar3219.jpg";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(user => <div key={user.id}>
                <div>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : avatar3219} className={s.img}/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => {
                            props.unfollow(user.id)
                        }}>FOLLOW</button> : <button onClick={() => {
                            props.follow(user.id)
                        }}>UNFOLLOW</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default Users;