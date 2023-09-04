import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

type DialogsStructureType = {
    id: number
    name: string
}
type MessagesStructureType = {
    id: number
    message: string
}
type DialogsPropsType = {
    dialogs: Array<DialogsStructureType>
    messages: Array<MessagesStructureType>
}


export const Dialogs = (props: DialogsPropsType) => {

    let messagesElements = props.messages.map((m,index) => <Message key={index} message={m.message}/>)

    let dialogsElements = props.dialogs.map((d,index) => <DialogItem  key={index} name={d.name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.bubbledLeft_bubbledRight}>
                {messagesElements}
            </div>
        </div>
    );
};
