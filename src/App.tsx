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
import {StoreType} from "./redux/store";

// type AppPropsType = {
//     dialogs: Array<DialogsStructureType>
//     messages: Array<MessagesStructureType>
//     posts: ProfileStructureType[]
//     addPost: (postMessage: string) => void
//     newPostMessage: string
//     updatePostMessage: (newPostText: string) => void
// }

type AppStorePropsType={
    store: StoreType
}
const App: React.FC<AppStorePropsType> = (props) => {
const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                  // updateMessage={props.store.updateMessage.bind(props.store)}
                                                  // addMessage={props.store.addMessage.bind(props.store)}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                  newMessage={state.dialogsPage.newMessageText}
                                                  messages={state.dialogsPage.messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={state.profile.posts}
                                                                    // addPost={props.store.addPost.bind(props.store)}
                                                                    // updatePostMessage={props.store.updatePostMessage.bind(props.store)}
                                                                    dispatch={props.store.dispatch.bind(props.store)}
                                                                    newPostText={state.profile.newPostText}

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