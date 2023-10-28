import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialogReducer} from "./reducers/dialogReducer";
import {sidebarReducer} from "./reducers/sidebarReducer";
import {StoreType} from "./store";




let reducers = combineReducers({
    profile: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
})
export let reduxStore: StoreType = createStore(reducers)