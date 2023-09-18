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
    addPost: (postMessage: string) => void
}
export const MyPost = (props: PostsPropsType) => {

    let [newPostMessage, setNewPostMessage] = useState<string>('')


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostMessage(e.currentTarget.value)
    }
    const onCLickAddPostHandler = () => {
        props.addPost(newPostMessage)
        setNewPostMessage('')
    }
    let postsElement = props.posts.map((p, i) =>
        <Post key={i}
              message={p.message}
              likesCount={p.likesCount}
        />)
    return (
        <div>
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <div/>
                <div>
                    <textarea value={newPostMessage} onChange={onChangeHandler}/>
                </div>
                <div>
                    <button onClick={onCLickAddPostHandler}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}