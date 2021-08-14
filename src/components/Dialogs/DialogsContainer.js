import React from "react";
import {sendMessageActionCreator, UpdateMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().stateDialogs;

    let addMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let changeMessage = (text) => {
        props.store.dispatch(UpdateMessageActionCreator(text));
    }

    return (
        <Dialogs updateMessageText={changeMessage}
                 addMessage={addMessage}
                 stateDialogs={state}/>
    )
}
export default DialogsContainer;