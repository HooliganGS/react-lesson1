import React from "react";
import {sendMessageActionCreator} from "../../redux/DialogsReducer";
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
        addMessage : (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText));
        }
    }
}



export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);