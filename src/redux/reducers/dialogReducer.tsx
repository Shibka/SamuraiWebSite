import {ActionTypes} from "../store";

export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateDialogsMessageActionType = ReturnType<typeof updateDialogsMessageAC>

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Leha'},
        {id: 4, name: 'Gleb'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi Hi how are you?'},
        {id: 3, message: 'Hi Hi Hi'}
    ],
    newMessageText: ''
}
export const dialogReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {id: Math.random(), message: action.message};
            state.messages.push(newMessage);
            state.newMessageText = ''
            return state;
        case "UPDATE-DIALOGS-MESSAGE":
            state.newMessageText = action.message
            return state;
        default:
            return state
    }

}

export const addMessageAC = (message: string) => {
    return {type: 'ADD-MESSAGE', message} as const
}
export const updateDialogsMessageAC = (message: string) => {
    return {type: 'UPDATE-DIALOGS-MESSAGE', message} as const
}