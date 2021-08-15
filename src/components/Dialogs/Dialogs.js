import React from "react";
import s from "./Dialogs.module.css"
import DialogMessage from "./Dialog/Message/DialogMessage";
import DialogItem from "./Dialog/DialogItem/DialogItem";

const Dialogs = (props) => {
let state = props.stateDialogs;

    let Dialogs = state.DataDialogs.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let Messages = state.DataMessage.map((message) => <DialogMessage message={message.message} id={message.id}/>)
    let NewMessageText = state.newMessageText;

    let addMessage = () => {
        props.addMessage();
    }

    let changeMessage = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {Dialogs}
            </div>
            <div className={s.Messages}>
                <div>{Messages}</div>
            </div>
            `
            <div>
                <textarea value={NewMessageText}
                          onChange={changeMessage}
                          placeholder='enter your message'/>
            </div>
            <div>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}
export default Dialogs;