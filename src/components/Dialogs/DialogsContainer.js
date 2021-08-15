import React from "react";
import {sendMessageActionCreator, UpdateMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        stateDialogs: state.stateDialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText :(text) => {
            dispatch(UpdateMessageActionCreator(text));
        },
        addMessage : () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;