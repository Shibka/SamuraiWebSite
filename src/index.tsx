import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


let posts = [
    {id: 1, message: 'Hello, how you doin?', likesCount: 12},
    {id: 2, message: 'Hi, great, thanx', likesCount: 10},
]
let dialogs = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Igor'},
    {id: 3, name: 'Leha'},
    {id: 4, name: 'Gleb'}
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi Hi how are you?'},
    {id: 3, message: 'Hi Hi Hi'}
]

ReactDOM.render(<App
    posts={posts}
    messages={messages}
    dialogs={dialogs}
/>, document.getElementById("root"));
