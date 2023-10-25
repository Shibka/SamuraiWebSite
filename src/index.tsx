import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {store} from "./redux/redux-store";
import {StoreType} from "./redux/store";

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

export const rerenderEntireTree = (/*props:StoreType*/) => { //пропсы можно и не передавать !!!!

    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                // addPost={store.addPost}
                // posts={store.state.profile.posts}
                // messages={store.state.messagesPage.messages}
                // dialogs={store.state.messagesPage.dialogs}
                // newPostMessage={store.state.profile.newPostText}
                // updatePostMessage={store.updatePostMessage}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
};
rerenderEntireTree() // тут может быть пусто как и все функции в state

store.subscribe(rerenderEntireTree)
// store.subscribe(()=>{
//     let state = store.getState()
//     rerenderEntireTree(state)
// })
