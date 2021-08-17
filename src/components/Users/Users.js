import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import avatar3219 from '../../assets/images/avatar3219.jpg';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => (props.setUsers(response.data.items)))
    }
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <div>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : avatar3219} className={s.img}/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>FOLLOW</button>
                            : <button onClick={() => {
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