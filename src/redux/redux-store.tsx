import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialogReducer} from "./reducers/dialogReducer";
import {sidebarReducer} from "./reducers/sidebarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})
export let store = createStore(reducers)