import {ActionTypes} from "../store";

let initialState = {
    friends: [
        {id: 2, name: 'Igor', message: 'Hi'},
        {id: 3, name: 'Leha', message: 'Hi'},
        {id: 4, name: 'Gleb', message: 'Hi'}
    ]
}
export const sidebarReducer = (state =initialState, action: ActionTypes) =>{
    return state
}