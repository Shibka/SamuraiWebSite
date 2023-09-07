import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {state} from "./redux/state";
import {addPost} from "./redux/state";


ReactDOM.render(
    <App
        addPost={addPost}
        posts={state.profile.posts}
        messages={state.messagesPage.messages}
        dialogs={state.messagesPage.dialogs}
    />, document.getElementById("root"));
