import React from "react";
import s from "./Dialogs.module.css"
import DialogMessage from "./Dialog/Message/DialogMessage";
import DialogItem from "./Dialog/DialogItem/DialogItem";

const Dialogs = (props) => {

    let Dialogs = props.DataDialogs.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let Messages = props.DataMessage.map((message) => <DialogMessage message={message.message}/>)

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