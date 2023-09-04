import React from 'react';
import s from './../Dialogs.module.css'
import {DialogItem} from "../DialogItem/DialogItem";


type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
            <div className={s.bubbledLeft}>
                <img className={s.item_img} src="https://i.pinimg.com/736x/bb/30/32/bb30326dda4f8240abb3ac64b4804583.jpg" alt="Avatar"/>
            {props.message}
            </div>
    )
};
