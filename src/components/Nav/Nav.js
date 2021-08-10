import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import FriendsList from "./friendsList/friendsList";


const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink className={s.item} to='/Profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink className={s.item} to='/Dialogs'>Messages</NavLink>
            </div>
            <div>
                <NavLink className={s.item} to='/News'>News</NavLink>
            </div>
            <div>
                <NavLink className={`${s.item} ${s.activ}`} to='/Music'>Music</NavLink>
            </div>
            <div>
                <NavLink className={s.item} to='/Settings'>Settings</NavLink>
            </div>

            <FriendsList DataFriend={props.DataFriend.DataFriend} />

        </nav>
    )
}
export default Nav;