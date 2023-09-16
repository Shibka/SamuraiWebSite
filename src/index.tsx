import {rerenderEntireTree} from "./render";
import {addPost, state} from "./redux/state";


rerenderEntireTree({state, addPost})