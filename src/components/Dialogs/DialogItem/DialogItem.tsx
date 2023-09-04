import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active + ' ' + s.item}>
            <img className={s.item_img} src="https://i.pinimg.com/736x/bb/30/32/bb30326dda4f8240abb3ac64b4804583.jpg" alt="Avatar"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
