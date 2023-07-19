import React from "react";
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}
export default Profile