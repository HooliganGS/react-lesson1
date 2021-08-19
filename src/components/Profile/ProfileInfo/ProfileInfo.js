import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo =(props)=>{
    if(!props.profile){
        return <Preloader/>
    }

    return(
        <div className={s.ProfileInfoWrapper}>
            <div>
                <img  className={s.imgStyle}
                    src={props.profile.photos.large}
                    alt="img"/>
            </div>
            <div>Полное имя :{props.profile.fullName}</div>
            <div>Twitter: {props.profile.contacts.twitter}</div>
            <div>Vk: {props.profile.contacts.vk}</div>
            <div>Looking for a job: {props.profile.lookingForAJobDescription}</div>
            <div className={s.item}>{props.data}</div>
        </div>
    )
}
export default ProfileInfo;