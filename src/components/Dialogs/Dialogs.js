import React from "react";
import s from "./Dialogs.module.css"
import DialogMessage from "./Dialog/Message/DialogMessage";
import DialogItem from "./Dialog/DialogItem/DialogItem";
import {sendMessageActionCreator, UpdateMessageActionCreator} from "../../redux/DialogsReducer";


const Dialogs = (props) => {
let state = props.store.getState().stateDialogs;

    let Dialogs = state.DataDialogs.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let Messages = state.DataMessage.map((message) => <DialogMessage message={message.message}/>)
    let NewMessageText = state.newMessageText;

    let addMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let changeMessage = (e) => {
    let text = e.target.value;
        props.store.dispatch(UpdateMessageActionCreator(text));
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