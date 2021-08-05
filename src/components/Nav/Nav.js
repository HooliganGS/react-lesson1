import React from "react";
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a className={s.item} href='/Profile'>Profile</a>
            </div>
            <div >
                <a className={s.item} href='/Dialogs'>Messages</a>
            </div>
            <div>
                <a className={s.item} href='/News'>News</a>
            </div>
            <div >
                <a className={`${s.item} ${s.activ}`} href='/Music'>Music</a>
            </div>
            <div >
                <a className={s.item} href='/Settings'>Settings</a>
            </div>
        </nav>
    )
}
export default Nav;