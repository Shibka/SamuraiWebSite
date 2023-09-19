
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
export type RootStateType ={
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
    getState: ()=> RootStateType
    addPost: (postMessage: string) => void,
    updatePostMessage: (newPostText: string) => void,
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: (state:StoreType)=>void
    addMessage: (message: string)  => void,
    updateMessage: (message: string) => void,
}

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
    getState(){
      return this._state
    },
    addMessage (message: string) {
        const  newMessage= {id: Math.random(), message: message};
        this._state.messagesPage.messages.push(newMessage);
        store.updateMessage('')
        this._rerenderEntireTree(store)
    },
    updateMessage(message: string) {
        this._state.messagesPage.newMessage = message
        this._rerenderEntireTree(store)
    },
    addPost (postMessage: string) {
        const newPost = {id: Math.random(), message: postMessage, likesCount: 3};
        this._state.profile.posts.push(newPost);
        store.updatePostMessage('')
        this._rerenderEntireTree(store)
    },
    updatePostMessage(newPostText: string) {
        this._state.profile.newPostText = newPostText
        this._rerenderEntireTree(store)
    },
   subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    _rerenderEntireTree (state:StoreType){
        console.log('State Changed')
    }
}
// export let state: StateType = {
//     profile: {
//         posts: [
//             {id: 1, message: 'Hello, how you doin?', likesCount: 12},
//             {id: 2, message: 'Hi, great, thanx', likesCount: 10},
//         ],
//         newPostText: '',
//     },
//     messagesPage: {
//         dialogs: [
//             {id: 1, name: 'Alex'},
//             {id: 2, name: 'Igor'},
//             {id: 3, name: 'Leha'},
//             {id: 4, name: 'Gleb'}
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'Hi Hi how are you?'},
//             {id: 3, message: 'Hi Hi Hi'}
//         ]
//     },
//     sidebar: {
//         friends: [
//             {id: 2, name: 'Igor', message: 'Hi'},
//             {id: 3, name: 'Leha', message: 'Hi'},
//             {id: 4, name: 'Gleb', message: 'Hi'}
//         ]
//     },
//
// }


// export const addPost = (postMessage: string) => {
//     const newPost = {id: Math.random(), message: postMessage, likesCount: 3};
//     state.profile.posts.push(newPost);
//     updatePostMessage('')
//     rerenderEntireTree(state)
// };
// export const updatePostMessage = (newPostText: string) => {
//     state.profile.newPostText = newPostText
//     rerenderEntireTree(state)
// };
//
// export const subscribe = (observer: (state:StateType) => void) => {
//     rerenderEntireTree = observer
// }