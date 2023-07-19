import React, {ChangeEvent, useState} from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
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
                <Post name={'Hello, how you doin?'} likesCount={15}/>
                <Post name={'Hi, great, thanx'} likesCount={24}/>
                </div>
            </div>
        </div>
    )
}
export default MyPost