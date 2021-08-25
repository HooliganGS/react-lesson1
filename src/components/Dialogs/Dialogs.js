import React from "react";
import s from "./Dialogs.module.css"
import DialogMessage from "./Dialog/Message/DialogMessage";
import DialogItem from "./Dialog/DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/formsControls/FormsControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.stateDialogs;
    let Dialogs = state.DataDialogs.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let Messages = state.DataMessage.map((message) => <DialogMessage message={message.message} id={message.id}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {Dialogs}
            </div>
            <div className={s.Messages}>
                <div>{Messages}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[requiredField, maxLength50]}
                       name="newMessageText"
                       placeholder='enter your message'/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;