import s from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo =(props)=>{
    return(
        <div className={s.ProfileInfoWrapper}>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                    alt="img"/>
            </div>
            <div className={s.item}>ava+discription</div>
        </div>
    )
}
export default ProfileInfo;