import React from "react";
import {sendMessageActionCreator, UpdateMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        stateDialogs: state.stateDialogs,
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



export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);