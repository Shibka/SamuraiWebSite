import React, {ChangeEvent, useState} from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    let postData = [
        {id: 1, message: 'Hello, how you doin?', likesCount: 12},
        {id: 2, message: 'Hi, great, thanx', likesCount: 10},
    ]

    return (
        <div>
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <div/>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>{postData[0].message}
                </div>
                <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                </div>
            </div>
        </div>
    )
}
export default MyPost