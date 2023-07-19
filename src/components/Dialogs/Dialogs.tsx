import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                <DialogItem name={'Alex'} id={'1'}/>
                <DialogItem name={'Igor'} id={'2'}/>
                <DialogItem name={'Leha'} id={'3'}/>
                <DialogItem name={'Gleb'} id={'4'}/>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Hi Hi
                </div>
                <div className={s.message}>
                    Hi Hi Hi
                </div>
                <div className={s.message}>
                    Hi Hi Hi Hi Hi Hi
                </div>
            </div>
        </div>
    );
};

export default Dialogs;