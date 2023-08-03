import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

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


const Dialogs = (props: DialogsPropsType) => {

    // let dialogs = [
    //     {id: 1, name: 'Alex'},
    //     {id: 2, name: 'Igor'},
    //     {id: 3, name: 'Leha'},
    //     {id: 4, name: 'Gleb'}
    // ]
    // let messages = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'Hi Hi how are you?'},
    //     {id: 3, message: 'Hi Hi Hi'}
    // ]

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;