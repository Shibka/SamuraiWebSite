type ProfileStructureType = {
    id: number;
    message: string;
    likesCount: number;
};
type DialogsStructureType = {
    id: number;
    name: string;
};
type MessagesStructureType = {
    id: number;
    message: string;
};
type FriendsStructureType = {
    id: number;
    name: string;
    message: string;
};
export type RootStateType = {
    profile: {
        posts: ProfileStructureType[];
        newPostText: string,
    }
    messagesPage: {
        dialogs: DialogsStructureType[]
        messages: MessagesStructureType[]
        newMessage: string
    },
    sidebar: {
        friends: FriendsStructureType[]
    },
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    // addPost: (postMessage: string) => void,
    // updatePostMessage: (newPostText: string) => void,

    subscribe: (observer: () => void) => void
    _callSubscriber: (state: StoreType) => void
    addMessage: (message: string) => void,
    updateMessage: (message: string) => void,
    dispatch: (action: ActionTypes) => void
}
export type ActionTypes =  AddPostActionType | UpdatePostMessageActionType
type AddPostActionType = ReturnType<typeof addPostAC>
type UpdatePostMessageActionType = ReturnType<typeof updatePostMessageAC>
export let store: StoreType = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'Hello, how you doin?', likesCount: 12},
                {id: 2, message: 'Hi, great, thanx', likesCount: 10},
            ],
            newPostText: '',
        },
        messagesPage: {
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
            newMessage: ''
        },
        sidebar: {
            friends: [
                {id: 2, name: 'Igor', message: 'Hi'},
                {id: 3, name: 'Leha', message: 'Hi'},
                {id: 4, name: 'Gleb', message: 'Hi'}
            ]
        },

    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    addMessage(message: string) {
        const newMessage = {id: Math.random(), message: message};
        this._state.messagesPage.messages.push(newMessage);
        store.updateMessage('')
        this._callSubscriber(store)
    },
    updateMessage(message: string) {
        this._state.messagesPage.newMessage = message
        this._callSubscriber(store)
    },
    // addPost(postMessage: string) {
    //     const newPost = {id: Math.random(), message: postMessage, likesCount: 3};
    //     this._state.profile.posts.push(newPost);
    //     store.updatePostMessage('')
    //     this._callSubscriber(store)
    // },
    // updatePostMessage(newPostText: string) {
    //     this._state.profile.newPostText = newPostText
    //     this._callSubscriber(store)
    // },
    _callSubscriber(/*state:StoreType*/) {
        console.log('State Changed')
    },
    dispatch(action) {
        // if (action.type === 'ADD-POST') {
        //     this._addPost(action.postMessage)
        // }else if(action.type === 'UPDATE-POST-MESSAGE'){
        //     this._updatePostMessage(action.newPostText)
        // }
        if (action.type === 'ADD-POST') {
            debugger
            const newPost = {id: Math.random(), message: action.postMessage, likesCount: 3};
            this._state.profile.posts.push(newPost);
            this._state.profile.newPostText = ''
            this._callSubscriber(store)
        }else if(action.type === 'UPDATE-POST-MESSAGE'){
            debugger
            this._state.profile.newPostText = action.newPostText
            this._callSubscriber(store)
        }
    }
}
export const addPostAC = (postMessage: string) => {
    return {type: 'ADD-POST', postMessage: postMessage}as const
}
export const updatePostMessageAC = (newPostText: string)  => {
    return {type: 'UPDATE-POST-MESSAGE', newPostText: newPostText}as const
}