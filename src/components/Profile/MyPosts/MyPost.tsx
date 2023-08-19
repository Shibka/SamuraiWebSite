import React, {ChangeEvent, useState} from "react";
import s from './MyPost.module.css'
import {Post} from "./Post/Post";

type PostsStructureType = {
    id: number
    message: string
    likesCount: number
}
type PostsPropsType = {
    posts: PostsStructureType[]
}
export const MyPost = (props: PostsPropsType) => {
    // let posts = [
    //     {id: 1, message: 'Hello, how you doin?', likesCount: 12},
    //     {id: 2, message: 'Hi, great, thanx', likesCount: 10},
    // ]

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div>
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <div/>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}