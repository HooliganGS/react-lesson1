import React from "react";
import s from "./Dialogs.module.css"
import DialogMessage from "./Dialog/Message/DialogMessage";
import DialogItem from "./Dialog/DialogItem/DialogItem";

const Dialogs = (props) => {

    let Dialogs = props.Dialogs.DataDialogs.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let Messages = props.Dialogs.DataMessage.map((message) => <DialogMessage message={message.message}/>)

    let valueTextArea = React.createRef();
    let addMessage = () => {
        let messagePost = valueTextArea.current.value;
        alert(messagePost);
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {Dialogs}
            </div>
            <div className={s.Messages}>
                {Messages}
            </div>
            <textarea ref={valueTextArea}/>
            <button onClick={addMessage}/>
        </div>
    )
}
export default Dialogs;