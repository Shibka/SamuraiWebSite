import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

type ProfileStructureType = {
    id: number;
    message: string;
    likesCount: number;
};
type DialogsStructureType = {
    id: number;
    name: string;
};
type MessagesStructureType = {
    id: number;
    message: string;
};
type FriendsStructureType = {
    id: number;
    name: string;
    // Add the 'message' property here to match the actual data structure
    message: string;
};

type renderPropsType = {
    state: {
        profile: {
            posts: ProfileStructureType[];
        };
        messagesPage: {
            dialogs: DialogsStructureType[];
            messages: MessagesStructureType[];
        };
        sidebar: {
            friends: FriendsStructureType[];
        };
    };
    addPost: (postMessage: string) => void;
};

export let rerenderEntireTree = (props: renderPropsType) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                addPost={props.addPost}
                posts={props.state.profile.posts}
                messages={props.state.messagesPage.messages}
                dialogs={props.state.messagesPage.dialogs}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
};
