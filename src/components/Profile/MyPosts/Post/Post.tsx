import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string;
    likesCount: number
}
const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/bb/30/32/bb30326dda4f8240abb3ac64b4804583.jpg" alt="Avatar"/>
            {props.message}
            <div>
                <button>Like</button>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post