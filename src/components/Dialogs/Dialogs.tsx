import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialogs}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Leha'},
        {id: 4, name: 'Gleb'}
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi Hi how are you?'},
        {id: 3, message: 'Hi Hi Hi'}
    ]

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

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