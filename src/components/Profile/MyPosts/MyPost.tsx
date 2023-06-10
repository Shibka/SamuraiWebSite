import React, {ChangeEvent, useState} from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            <div className={s.item}>
                My posts
                <div/>
                <textarea></textarea>
                <button>Add post</button>
                <button>Delete post</button>
                <Post name={'Hello, how you doin?'} likesCount={15}/>
                <Post name={'Hi, great, thanx'} likesCount={24}/>

            </div>
        </div>
    )
}
export default MyPost