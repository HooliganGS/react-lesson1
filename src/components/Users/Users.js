import React from "react";
import s from "./Users.module.css";
import avatar3219 from "../../assets/images/avatar3219.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : avatar3219} className={s.img}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                                props.toggleFollowingProgress(true,user.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {'API-KEY': 'f4f823ce-76e0-4cdd-917b-eb6c3e1ee620'}
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(user.id);
                                        }
                                        props.toggleFollowingProgress(false,user.id)
                                    });
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                                props.toggleFollowingProgress(true,user.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {'API-KEY': 'f4f823ce-76e0-4cdd-917b-eb6c3e1ee620'}
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(user.id);
                                        }
                                        props.toggleFollowingProgress(false,user.id)
                                    });

                            }}>follow</button>}
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