import React, {ChangeEvent} from "react";
import s from './MyPost.module.css'
import {Post} from "./Post/Post";
import {addPostAC, updatePostMessageAC} from "../../../redux/reducers/profileReducer";
import {ActionTypes} from "../../../redux/store";


type PostsStructureType = {
    id: number
    message: string
    likesCount: number
}
type PostsPropsType = {
    posts: PostsStructureType[]
    // addPost: (postMessage: string) => void
    dispatch: (action: ActionTypes) => void
    newPostText: string
    // updatePostMessage: (newPostText: string) => void
}



export const MyPost = (props: PostsPropsType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updatePostMessage(e.currentTarget.value)
        let newText = e.currentTarget.value
        props.dispatch(updatePostMessageAC(newText))
    }
    const onCLickAddPostHandler = () => {
        if (props.newPostText.trim()) {
            // props.addPost(props.newPostText)
            // props.updatePostMessage('')
            props.dispatch(addPostAC(props.newPostText))
        } else {
            return ' '
        }

    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && e.ctrlKey && onCLickAddPostHandler()
    }

    let postsElement = props.posts.map((p) =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}
        />)
    return (
        <div>
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <div/>
                <div>
                    <textarea placeholder={"Enter post's message"}
                              onKeyPress={onKeyPressHandler}
                              value={props.newPostText}
                              onChange={onChangeHandler}/>
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