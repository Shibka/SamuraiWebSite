import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import {Music} from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {store, StoreType} from "./redux/state";


type DialogsStructureType = {
    id: number
    name: string
}
type MessagesStructureType = {
    id: number
    message: string

}
type ProfileStructureType = {
    id: number
    message: string
    likesCount: number
}

type AppPropsType = {
    dialogs: Array<DialogsStructureType>
    messages: Array<MessagesStructureType>
    posts: ProfileStructureType[]
    addPost: (postMessage: string) => void
    newPostMessage: string
    updatePostMessage: (newPostText: string) => void

}
type AppStorePropsType={
    store: StoreType
}
const App = (props: AppStorePropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={props.store.state.messagesPage.dialogs}
                                                  messages={props.store.state.messagesPage.messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.store.state.profile.posts}
                                                                    addPost={props.store.addPost}
                                                                    newPostText={props.store.state.profile.newPostText}
                                                                    updatePostMessage={props.store.updatePostMessage}
                    />} />
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/friends'} render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;