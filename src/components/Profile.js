import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="img"/>
            </div>
            <div className={s.item}>ava+discription</div>
            <div className={s.item}>my post</div>
            <div className={s.item}>new post</div>
            <div>
                <div className={s.item}>1</div>
                <div className={s.item}>2</div>
            </div>
        </div>
    )
}
export default Profile;