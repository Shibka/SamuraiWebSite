import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {addPost, state, StateType, subscribe, updatePostMessage} from "./redux/state";

// type ProfileStructureType = {
//     id: number;
//     message: string;
//     likesCount: number;
// };
// type DialogsStructureType = {
//     id: number;
//     name: string;
// };
// type MessagesStructureType = {
//     id: number;
//     message: string;
// };
// type FriendsStructureType = {
//     id: number;
//     name: string;
//     message: string;
// };
// type renderPropsType = {
//     state: {
//         profile: {
//             posts: ProfileStructureType[];
//             newPostText: string
//         };
//         messagesPage: {
//             dialogs: DialogsStructureType[];
//             messages: MessagesStructureType[];
//         };
//         sidebar: {
//             friends: FriendsStructureType[];
//         };
//     };
//     addPost: (postMessage: string) => void;
//     updatePostMessage: (newPostText: string) => void
//     subscribe: (observer: () => void) => void
// };

export const rerenderEntireTree = (props: StateType) => { //пропсы можно и не передавать и сделать все с пустой функцией !!!!

    ReactDOM.render(
        <React.StrictMode>
            <App
                addPost={addPost}
                posts={state.profile.posts}
                messages={state.messagesPage.messages}
                dialogs={state.messagesPage.dialogs}
                newPostMessage={state.profile.newPostText}
                updatePostMessage={updatePostMessage}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
};
rerenderEntireTree(state) // тут может быть пусто как и все функции в state
subscribe(rerenderEntireTree)
