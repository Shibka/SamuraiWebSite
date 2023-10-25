import {ActionTypes} from "../store";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdatePostMessageActionType = ReturnType<typeof updatePostMessageAC>
export const profileReducer = (state: any, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: Math.random(), message: action.postMessage, likesCount: 3};
            state.posts.unshift(newPost);
            state.newPostText = ''
            return state;
        case "UPDATE-POST-MESSAGE":
            state.newPostText = action.newPostText
            return state;
        default:
            return state
    }
}

export const addPostAC = (postMessage: string) => {
    return {type: 'ADD-POST', postMessage: postMessage} as const
}
export const updatePostMessageAC = (newPostText: string) => {
    return {type: 'UPDATE-POST-MESSAGE', newPostText} as const
}

