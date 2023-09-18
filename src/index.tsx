import {rerenderEntireTree} from "./render";
import {addPost, state, updatePostMessage} from "./redux/state";


rerenderEntireTree({state, addPost, updatePostMessage})