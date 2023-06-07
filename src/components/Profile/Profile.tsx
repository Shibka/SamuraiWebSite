import React from "react";
import MainBackground from "../../Images/MainBackground/MainBackground.jpg";
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={MainBackground} alt="Background" width={1000}/>
            </div>
            <div className={s.item}>
                ava + description
            </div>
            <MyPost/>

        </div>
    )
}
export default Profile