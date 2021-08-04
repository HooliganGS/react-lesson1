import React from "react";
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a className={s.item} href='/#'>Profile</a>
            </div>
            <div className='item'>
                <a className={s.item} href='/#'>Messages</a>
            </div>
            <div className='item'>
                <a className={s.item} href='/#'>News</a>
            </div>
            <div className='item'>
                <a className={s.item} href='/#'>Music</a>
            </div>
            <div className='item'>
                <a className={s.item} href='/#'>Settings</a>
            </div>
        </nav>
    )
}
export default Nav;