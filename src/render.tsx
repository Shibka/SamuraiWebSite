import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addPost} from "./redux/state";

type renderPropsType = {
    state: {
        profile: {
            posts: [
                {
                    id: number,
                    message: string,
                    likesCount: number
                },
            ],
        },
        messagesPage: {
            dialogs: [
                {
                    id: number,
                    name: string
                },

            ],
            messages: [
                { id: number,
                    message: string },
            ]
        },
        sidebar: {
            friends: [
                { id: number,
                    name: string },
            ]
        },
    }
}

export let RerenderEntireTree = (props: renderPropsType) => {
    ReactDOM.render(
        <App
            addPost={addPost}
            posts={props.state.profile.posts}
            messages={props.state.messagesPage.messages}
            dialogs={props.state.messagesPage.dialogs}
        />, document.getElementById("root"));

}
