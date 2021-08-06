import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.Dialog + ' ' + s.active}>
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const DialogMessage = (props) => {
    return (
        <div className={s.Message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let DataDialogs = [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Anastasiya'},
        {id: 4, name: 'Vladimir'},
    ]
    let DataMessage = [
        {message: 'hello'},
        {message: 'hi'},
        {message: 'hey'}
    ]

    let Dialogs = DataDialogs.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let Messages = DataMessage.map((message) => <DialogMessage message={message.message}/>)

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {Dialogs}
            </div>
            <div className={s.Messages}>
                {Messages}
            </div>
        </div>
    )
}
export default Dialogs;