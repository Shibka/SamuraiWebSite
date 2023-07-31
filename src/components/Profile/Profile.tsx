import React from "react";
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = () => {
    let posts = [
        {id: 1, message: 'Hello, how you doin?', likesCount: 12},
        {id: 2, message: 'Hi, great, thanx', likesCount: 10},
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={posts}/>
        </div>
    )
}
export default Profile