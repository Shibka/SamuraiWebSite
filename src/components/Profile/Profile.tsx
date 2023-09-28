import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionTypes} from "../../redux/state";

type ProfilePropsType = {
    id: number
    message: string
    likesCount: number
}

type PostsPropsType = {
    posts: ProfilePropsType[]
    // addPost: (postMessage: string) => void
    dispatch: (action: ActionTypes) => void
    newPostText: string
    // updatePostMessage: (newPostText: string) => void
}
export const Profile = (props: PostsPropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.posts}
                    dispatch={props.dispatch}
                    newPostText={props.newPostText}
                    // updatePostMessage={props.updatePostMessage}
            />
        </div>
    )
}