import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    id: number
    message: string
    likesCount: number
}

type PostsPropsType = {
    posts: ProfilePropsType[]
    addPost: (postMessage: string) => void
}
export const Profile = (props: PostsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.posts}
                    addPost={props.addPost}
            />
        </div>
    )
}