import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {addMessageAC, updateDialogsMessageAC} from "../../redux/reducers/dialogReducer";
import {ActionTypes} from "../../redux/store";


type DialogsStructureType = {
    id: number
    name: string
}
type MessagesStructureType = {
    id: number
    message: string
}
type DialogsPropsType = {
    dispatch: (action: ActionTypes) => void
    dialogs: Array<DialogsStructureType>
    messages: Array<MessagesStructureType>
    // updateMessage: (message: string) => void
    // addMessage: (message: string) => void
    newMessage: string
}


export const Dialogs = (props: DialogsPropsType) => {

    let messagesElements = props.messages.map((m, index) => <Message key={index} message={m.message}/>)

    let dialogsElements = props.dialogs.map((d, index) => <DialogItem key={index} name={d.name} id={d.id}/>)

    const addMessageHandler = () => {
        if (props.newMessage.trim()) {
            props.dispatch(addMessageAC(props.newMessage))
        } else return ''
    }
    const onKeyAddMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && props.newMessage.trim()) {
            props.dispatch(addMessageAC(props.newMessage))
        }
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateDialogsMessageAC(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.bubbledLeft_bubbledRight}>
                {messagesElements}
                <textarea onKeyPress={onKeyAddMessage}
                          value={props.newMessage}
                          onChange={onChangeMessageHandler}>
                </textarea>
                <button onClick={addMessageHandler}>sent</button>
            </div>
        </div>
    );
};
