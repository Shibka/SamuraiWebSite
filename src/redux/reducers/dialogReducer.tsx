import {ActionTypes} from "../state";


export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateDialogsMessageActionType = ReturnType<typeof updateDialogsMessageAC>

export const dialogReducer = (state: any, action: ActionTypes) => {
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